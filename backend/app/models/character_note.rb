class CharacterNote < ApplicationRecord
    has_many :bullet_points
    has_one :matchup
    has_one :game, through: :character
    belongs_to :user

    validates :title, uniqueness: {scope: :character_id, message: "No Duplicate note names!"}
    validates :title, presence: true
    valiidates :user_id, presence: true
    validates :game_id, presence: true
    validates :character_id, presence: true
end
