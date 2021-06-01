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

    def show 
        char1 = Character.find_by(name: params[:char]) 
        char2 = Character.find_by(name: params[:opp])
        mu = Matchup.find_by(character_id: char1.id, opponent_id: char2.id)
        if mu.matchup_notes.length > 0
            render json: mu.to_json(:include => {
                :matchup_notes => {:include => {
                    :notes => {:only => [:id,:description]},
                }, :only => [:id,:title],
            }}, :except => [:created_at, :updated_at, :id])
        else
            render json: {message: "No Matchup Notes found for #{char1.name} vs #{char2.name}."}
        end
        # Grab the correct Matchup, then display the matchup note in h1 and then notes in bullet points
    end

    def destroy
        def destroy 
            note = MatchupNote.find_by_id(params[:id])
            note.destroy
        end
    end
end
