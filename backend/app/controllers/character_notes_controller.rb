class CharacterNotesController < ApplicationController
    def create 
        character = Character.find_by(name: params[:char])
        charNote = CharacterNote.new(title: params[:charNote], character_id:  character.id)
        #Pass thorugh the User Id
        if charNote.valid?
            charNote.save
            render json: {message:"Saved note for #{character.name}"}
        else
            render json: {message:charNote.errors.messages.to_s}
        end
    end

    def show
        char = Character.find_by(name: params[:char])
        note = CharacterNote.find_by(character_id: char.id)
        #pass in user id
        render json: note.to_json()
    end

    def destroy
        def destroy 
            note = CharacterNote.find_by_id(params[:id])
            note.notes.destroy_all
            note.destroy!
        end
    end
end
