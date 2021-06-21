class CharacterNote < ApplicationRecord
    has_many :bullet_points
    has_one :matchup
    belongs_to :user

    validates :title, uniqueness: {scope: :character_id, message: "No Duplicate note names!"}
    validates :title, presence: true
    validates :character_id, presence: true
end
