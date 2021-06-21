class GamesController < ApplicationController
    def recieve_characters
        case self.title
        when "Mortal Kombat 11"
            characters =["Shang Tsung", "Shao Kahn", "Frost", "Nightwolf",
                     "Joker", "Johnny Cage", "Sonya", "Cassie Cage", "Jax", "Spawn",
                    "Scorpion", "Noob", "Baraka", "Raiden", "Jacqui", "Sub-Zero",
                    "Kano", "Kabal", "Liu Kang", "Kitana", "Kung Lao", "Jade",
                    "Robocop", "Skarlet", "Erron Black", "Dvorah", "Kotal Kahn", "Sheeva",
                    "Rambo", "The Terminator", "Geras", "Kollector", "Sindel", "Milleena",
                    "Cetrion", "Fujin", "Rain"]
        when "Tekken 7"
            characters =["Akuma", "Alisa", "Anna", "Armor King", "Asuka", "Bob", "Bryan",
                        "Claudio", "Devil Jin", "Dragunov", "Eddy", "Eliza", "Fahkumram","Feng",
                        "Ganryu", "Geese", "Gigas", "Heihachi", "Hwoarang", "Jack-7", "Jin", "Josie",
                        "Julia", "Katarina", "Kazumi", "Kazuya", "King", "Kuma", "Kunimitsu", "Lars",
                        "Law", "Lee", "Lei", "Leo", "Leroy", "Lidia", "Lili", "Lucky Chloe", "Marduk",
                        "Miguel", "Negan", "Nina", "Noctis", "Panda", "Paul", "Master Raven", "Shaheen",
                        "Steve", "Xiaoyu", "Yoshimitsu", "Zafina"]
        when "Guilty Gear Strive"
            characters=["Sol", "Ky", "May", "Axl", "Chipp", "Potemkin", "Faust", "Millia", "Zato-1",
                        "Ramlethal", "Leo", "Nagoriyuki", "Giovanna", "Anji", "I-no"]
    end
end
