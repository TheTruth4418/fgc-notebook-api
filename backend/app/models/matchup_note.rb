class MatchupNote < ApplicationRecord
    belongs_to :user
    has_one :character
    has_many :bullet_points

    validates :matchup_id, presence: true
    validates :title, presence: true
    validates :title, uniqueness: true
end
