class MatchupNotesController < ApplicationController
    def create
        game = Game.find_by_id(params[:game])
        char1 = Character.find_by(name: params[:char]) 
        char2 = Character.find_by(name: params[:opp])
        mu = Matchup.find_by(game_id: game.id, character_id: char1.id, opponent_id: char2.id)
        mu_note = MatchupNote.new(title: params[:title], matchup_id: mu.id)
        #Pass through the User id
        if mu_note.valid?
            mu_note.save
            render json: {message:"Note saved for #{char1.name} vs #{char2.name} matchup."}
        else
            render json: {message:mu_note.errors.messages.to_s}
        end
    end

    def show
        game = Game.find_by_id(params[:game]) 
        char1 = Character.find_by(name: params[:char])
        char2 = Character.find_by(name: params[:opp])
        muNote = MatchupNote.find_by(character_id: char1.id, opponent_id: char2.id)
        #Also pass in the user id
        render muNote.to_json()
    end

    def destroy
        def destroy 
            note = MatchupNote.find_by_id(params[:id])
            note.notes.destroy_all
            note.destroy
        end
    end
end
