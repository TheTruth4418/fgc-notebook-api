class CharacterNote < ApplicationRecord
    has_many :notes
    belongs_to :character

    validates :title, uniqueness: true
    validates :title, presence: true
    validates :character_id, presence: true
end
