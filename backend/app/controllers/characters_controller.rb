class CharactersController < ApplicationController
    def index
        characters = Character.all

        if characters.length >= 0
            render json: characters
        else
            render json: { message: 'No characters in database' }
        end
    end

    def show
        character = Character.find_by_id(params[:id])
        if character 
            render json: character
        else
            render json: {meassage: "No character with desired ID try again."}
        end
    end
end
