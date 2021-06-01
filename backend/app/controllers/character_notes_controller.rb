class CharacterNotesController < ApplicationController
    def create 
        character = Character.find_by(name: params[:char])
        charNote = CharacterNote.new(title: params[:charNote], character_id:  character.id)
        if charNote.valid?
            charNote.save
            render json: {message:"Saved note for #{character.name}"}
        else
            render json: {message:charNote.errors.messages.to_s}
        end
    end

    def show
        note = Character.find_by(name: params[:arg])
        if note.character_notes.length > 0
            render json: note.to_json(:include => {
                :character_notes => {:include => {
                    :notes => {:only => [:id,:description]},
                }, :only => [:title, :id],
            }}, :except => [:created_at, :updated_at])
        else
            render json: {message:"No notes found for #{note.name}"}
        end
        # display the title in h1 tag with the note
    end

    def destroy
        def destroy 
            note = CharacterNote.find_by_id(params[:id])
            note.destroy
        end
    end
end
