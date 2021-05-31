class NotesController < ApplicationController
    def create
        note = Note.new(description: params[:desc])
        if params[:type] == "mu"
            note.matchup_note_id = params[:titleId]
            if note.valid?
                note.save
                render json: {message: "Note saved!"}
            else
                render json: {message: note.errors.messages}
            end
        else
            note.character_note_id = params[:titleId]
            if note.valid?
                note.save
                render json: {message: "Note saved!"}
            else
                render json: {message: note.errors.messages}
            end
        end
    end
end
