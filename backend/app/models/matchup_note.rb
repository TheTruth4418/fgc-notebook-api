class MatchupNote < ApplicationRecord
    belongs_to :user
    has_one :character
    has_one :game, through: :character
    has_many :bullet_points

    validates :matchup_id, presence: true
    valiidates :user_id, presence: true
    valiidates :game_id, presence: true
    validates :title, presence: true, :uniqueness => true
end
