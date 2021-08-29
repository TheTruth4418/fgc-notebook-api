class CharacterNotesController < ApplicationController
    def create 
        user = current_user
        character = Character.find_by(name: params[:noteObj][:character])
        game = Game.find_by(title: params[:noteObj][:game])
        charNote = CharacterNote.new(title: params[:noteObj][:title], character_id: character.id, game_id: game.id, user_id: user.id)
        if charNote.valid? && character.game_id == game.id && current_user
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
        user = current_user
        character = Character.find_by(name: params[:character])
        notes = user.character_notes.user_notes(character.id)

        render json: notes.to_json(:include => {
                :bullet_points => {:only => [:description, :id]},
                :character => {:only=> [:name]}
        }, :except => [:created_at, :updated_at])
        
    end
    

    def destroy
        note = CharacterNote.find_by_id(params[:id])
        note.bullet_points.destroy_all
        note.destroy
    end
end



