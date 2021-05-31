class CharacterNotesController < ApplicationController
    def index
        notes = CharacterNote.find_by(character_id: params[:id])
        if notes
            render json: notes
        else
            render json: { message: 'No notes in database' }
        end
    end

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
        render json: note.to_json(:include => {
            :character_notes => {:include => {
                :notes => {:only => [:description]},
            }, :only => [:title, :id],
        }}, :except => [:created_at, :updated_at])
        # display the title in h1 tag with the note
    end
end
