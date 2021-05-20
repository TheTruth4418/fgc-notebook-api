class MatchupNote < ApplicationRecord
    belongs_to :matchup 
    has_many :notes

    validates :matchup_id, presence: true
    validates :title, presence: true
    validates :title, uniquness: true
end
