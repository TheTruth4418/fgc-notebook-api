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
                "id" => char.id,
                "Character_Notes": grab_notes(char.character_notes),
                "Matchup_notes" => char.matchup_notes
            }
        end
        obj
    end

    def grab_notes(arg)
        obj={}
        arg.each do |charNote|
            obj[charNote.title] = {
                "Bullet Points" => charNote.bullet_points,
                "Id" => charNote.id
            }
        end
        obj
    end
end
