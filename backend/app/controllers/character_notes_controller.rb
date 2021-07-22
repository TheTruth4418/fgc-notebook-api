class CharacterNotesController < ApplicationController
    def create 
        character = Character.find_by(name: params[:noteObj][:character])
        game = Game.find_by(title: params[:noteObj][:game])
        charNote = CharacterNote.new(title: params[:noteObj][:title], character_id: character.id, game_id: game.id)
        if charNote.valid? && character.game_id == game.id
            charNote.save
            render json: {message:"Saved note for #{character.name}"}
        else
            render json: {message:charNote.errors.messages.to_s}
        end
    end

    def index 
        games = Game.all

        render json: games.to_json(:include => {
            :characters => {:include => { 
                    :character_notes => {:include => {
                        :bullet_points => {:only => [:description, :id]}
                    }, :except => [:created_at, :updated_at]},
                }},
        }, :only => [:title])  
    end

    def show
        game = params[:game]
        character = Character.find_by(name: params[:character])
        notes = character.character_notes

        render json: character.to_json(:include => {
            :character_notes => {:include => {
                :bullet_points => {:only => [:description, :id]}
            }, :only => [:title, :id]}
        }, :only => [:name])
        
    end
    

    def destroy
        def destroy 
            note = CharacterNote.find_by_id(params[:id])
            note.notes.destroy_all
            note.destroy
        end
    end
end



