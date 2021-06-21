class Character < ApplicationRecord
    has_many :character_notes
    has_many :bullet_points, through: :character_notes
    belongs_to :game
    validates :name, uniqueness: true
    validates :game_id, presence: true
end
