class Character < ApplicationRecord
    has_many :character_notes
    has_many :matchup_notes
    has_many :bullet_points, through: :character_notes
    belongs_to :game
    validates :name, uniqueness: true
    validates :game_id, presence: true

    scope :mk11, -> {where(game_id: 1)}
    scope :tekken7, -> {where(game_id: 2)}
    scope :ggs, -> {where(game_id: 3)}
end
