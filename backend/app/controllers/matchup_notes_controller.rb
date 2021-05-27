class MatchupNotesController < ApplicationController
    def create
        char1 = Character.find_by(name: params[:char]) 
        char2 = Character.find_by(name: params[:opp])
        mu = Matchup.find_by(character_id: char1.id, opponent_id: char2.id)
        mu_note = MatchupNote.new(title: params[:title], matchup_id: mu.id)
        if mu.valid?
            mu_note.save
            render json: {message:"Note saved for #{char1.name} vs #{char2.name} matchup."}
        else
            render json: {message:charNote.errors.messages.to_s}
        end
    end
end
