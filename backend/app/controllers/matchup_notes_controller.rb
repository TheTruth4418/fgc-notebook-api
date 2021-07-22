class MatchupNotesController < ApplicationController
    def create
        char1 = Character.find_by(name: params[:noteObj][:character]) 
        char2 = Character.find_by(name: params[:noteObj][:opponent])
        game = Game.find_by(title: params[:noteObj][:game])
        mu = Matchup.find_by(character_id: char1.id, opponent_id: char2.id)
        mu_note = MatchupNote.new(title: params[:noteObj][:title], matchup_id: mu.id, game_id: game.id)
        if mu.valid? && (char1.game_id == game.id && char2.game_id == game.id)
            if mu_note.valid?
                mu_note.save
                render json: {message:"Note saved for #{char1.name} vs #{char2.name} matchup."}
            else
                render json: {message:charNote.errors.messages.to_s}
                render json: {message:mu_note.errors.messages.to_s}
            end
        else
            render json: {message: "There was an issue with the credentials provided"}
        end
    end

    def show
        char = Character.find_by(name: params[:character])
        opp = Character.find_by(name: params[:opponent])
        mu = Matchup.find_by(character_id: char.id, opponent_id: opp.id)
        render json: mu.to_json(:include => {
            :matchup_notes => {:include => {
                :bullet_points => {:only => [:description, :id]}
            }, :only => [:title, :id]}
        }, :only => [:id])
    end

    def destroy
        def destroy 
            note = MatchupNote.find_by_id(params[:id])
            note.notes.destroy_all
            note.destroy
        end
    end
end