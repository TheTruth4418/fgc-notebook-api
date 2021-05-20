class ApplicationController < ActionController::API

    def create_characters(mode)

        characters =["Shang Tsung", "Shao Kahn", "Frost", "Nightwolf",
                     "Joker", "Johnny Cage", "Sonya", "Cassie Cage", "Jax", "Spawn",
                    "Scorpion", "Noob", "Baraka", "Raiden", "Jacqui", "Sub-Zero",
                    "Kano", "Kabal", "Liu Kang", "Kitana", "Kung Lao", "Jade",
                    "Robocop", "Skarlet", "Erron Black", "Dvorah", "Kotal Kahn", "Sheeva",
                    "Rambo", "The Terminator", "Geras", "Kollector", "Sindel", "Milleena",
                    "Cetrion", "Fujin", "Rain"]
        characters = characters.sort

        if mode == 1
            characters.each do |fighter|
                    fighter = Character.new(name: fighter)
                    fighter.save if fighter.valid?
            end
        else
           Character.all.each do |fighter|
            Character.all.each do |opponent|
                mu = Matchup.new(character_id: fighter.id, opponent_id: opponent.id)
                mu.save if mu.valid?
            end
           end
        end
    end
    # create a method to search for a matchup based off the opponent Id and the character ID
end