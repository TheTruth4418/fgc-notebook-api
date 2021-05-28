class Character < ApplicationRecord
    has_many :character_notes
    has_many :notes, through: :character_notes
    validates :name, uniqueness: true
end
