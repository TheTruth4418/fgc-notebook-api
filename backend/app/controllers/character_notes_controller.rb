class CharacterNotesController < ApplicationController
    def index
        notes = CharacterNote.find_by(character_id: params[:id])
        if notes
            render json: notes
        else
            render json: { message: 'No notes in database' }
        end
    end
end
