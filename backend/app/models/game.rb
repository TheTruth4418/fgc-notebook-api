class Game < ApplicationRecord
    has_many :characters
    has_many :matchups
    has_many :character_notes
    has_many :matchup_notes
    validates :title, uniqueness: true


    def create_chars(arr,id)
        arr.each do |fighter|
            fighter = Character.new(name: fighter)
            fighter.game_id = id
            fighter.save if fighter.valid?
        end
    end

    def create_matchups(arr,id)
        arr.all.each do |fighter|
            arr.all.each do |opponent|
                mu = Matchup.new(character_id: fighter.id, opponent_id: opponent.id)
                mu.game_id = id
                mu.save if mu.valid?
            end
        end
    end

    def create_and_save_chars
        case self.title
        when "Mortal Kombat 11"
            characters =["Shang Tsung", "Shao Kahn", "Frost", "Nightwolf",
                     "Joker", "Johnny Cage", "Sonya", "Cassie Cage", "Jax", "Spawn",
                    "Scorpion", "Noob", "Baraka", "Raiden", "Jacqui", "Sub-Zero",
                    "Kano", "Kabal", "Liu Kang", "Kitana", "Kung Lao", "Jade",
                    "Robocop", "Skarlet", "Erron Black", "Dvorah", "Kotal Kahn", "Sheeva",
                    "Rambo", "The Terminator", "Geras", "Kollector", "Sindel", "Milleena",
                    "Cetrion", "Fujin", "Rain"]
                    characters.sort
                    create_chars(characters, self.id)
        when "Tekken 7"
            characters =["Akuma", "Alisa", "Anna", "Armor King", "Asuka", "Bob", "Bryan",
                        "Claudio", "Devil Jin", "Dragunov", "Eddy", "Eliza", "Fahkumram","Feng",
                        "Ganryu", "Geese", "Gigas", "Heihachi", "Hwoarang", "Jack-7", "Jin", "Josie",
                        "Julia", "Katarina", "Kazumi", "Kazuya", "King", "Kuma", "Kunimitsu", "Lars",
                        "Law", "Lee", "Lei", "Leo", "Leroy", "Lidia", "Lili", "Lucky Chloe", "Marduk",
                        "Miguel", "Negan", "Nina", "Noctis", "Panda", "Paul", "Master Raven", "Shaheen",
                        "Steve", "Xiaoyu", "Yoshimitsu", "Zafina"]
                        create_chars(characters, self.id)
        when "Guilty Gear Strive"
            characters=["Sol", "Ky", "May", "Axl", "Chipp", "Potemkin", "Faust", "Millia", "Zato-1",
                        "Ramlethal", "Leo", "Nagoriyuki", "Giovanna", "Anji", "I-no"]
                        characters.sort
                        create_chars(characters, self.id)
        else
            nil
        end
    end
end
