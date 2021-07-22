class MatchupNote < ApplicationRecord
    belongs_to :matchup
    belongs_to :character
    belongs_to :game
    has_many :bullet_points

    validates :character_id, presence: true
    validates :matchup_id, presence: true
    validates :game_id, presence: true
    validates :title, presence: true, :uniqueness => true

    scope :pull, -> (id) { where(game_id: id ) }
end
