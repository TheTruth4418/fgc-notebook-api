class Character < ApplicationRecord
    has_many :character_notes
    validates :name, uniqueness: true
end
