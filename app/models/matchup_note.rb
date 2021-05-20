class MatchupNote < ApplicationRecord
    belongs_to :matchup 
    has_many :notes
end
