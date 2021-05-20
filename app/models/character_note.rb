class CharacterNote < ApplicationRecord
    has_many :notes
    belongs_to :character
end
