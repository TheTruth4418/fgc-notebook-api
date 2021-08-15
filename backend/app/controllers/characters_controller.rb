class CharactersController < ApplicationController
    def index
        characterHash = {
            "Mortal Kombat 11": grab_names(Character.mk11),
            "Tekken 7": grab_names(Character.tekken7),
            "Guilty Gear Strive": grab_names(Character.ggs)
        }
        render json: characterHash
    end

    def grab_names(arg)
        obj={}
        arg.all.each do |char|
            obj[char.name] = {
                "id" => char.id
            }
        end
        obj
    end
end
