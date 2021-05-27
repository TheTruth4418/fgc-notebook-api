class CharacterNote < ApplicationRecord
    has_many :notes
    belongs_to :character

    validates :title, uniqueness: {scope: :character_id, message: "No Duplicate note names!"}
    validates :title, presence: true
    validates :character_id, presence: true
end
