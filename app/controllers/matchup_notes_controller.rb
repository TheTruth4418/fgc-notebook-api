class MatchupNotesController < ApplicationController
    def create
        user = current_user
        char1 = Character.find_by(name: params[:noteObj][:character]) 
        char2 = Character.find_by(name: params[:noteObj][:opponent])
        game = Game.find_by(title: params[:noteObj][:game])
        mu = Matchup.find_by(character_id: char1.id, opponent_id: char2.id)
        mu_note = MatchupNote.new(title: params[:noteObj][:title], matchup_id: mu.id, game_id: game.id, character_id: char1.id,opponent_id: char2.id, user_id: user.id)
        if mu.valid? && (char1.game_id == game.id && char2.game_id == game.id) && current_user
            if mu_note.valid?
                mu_note.save
                render json: {message:"Note saved for #{char1.name} vs #{char2.name} matchup."}
            else
               render json: {message:mu_note.errors.messages.to_s}
            end
        else
            render json: {message: "There was an issue with the credentials provided"}
        end
    end

    def show
        user = current_user
        char = Character.find_by(name: params[:character])
        opp = Character.find_by(name: params[:opponent])
        mu = Matchup.find_by(character_id: char.id, opponent_id: opp.id)
        notes = user.matchup_notes.user_notes(char.id)
        if notes.length > 0
            render json: notes.to_json(:include => {
                :matchup => {:include => {
                    :character => {:only => [:name]},
                    :opponent => {:only => [:name]}
                }, :only => [:title, :id]},
                :bullet_points => {:only => [:description, :id]},
            }, :except => [:created_at, :updated_at])
        else 
            render json: {matchup: {char: char.name, opp: opp.name}}
        end
    end

    def destroy
        note = MatchupNote.find_by_id(params[:id])
        note.bullet_points.destroy_all
        note.destroy
    end

    def blah
        render json: mu.to_json(:include => {
            :matchup_notes => {:include => {
                :bullet_points => {:only => [:description, :id]}
            }, :only => [:title, :id]},
            :character => {:only => [:name]},
            :opponent => {:only => [:name]}
        }, :only => [:id])
    end
end