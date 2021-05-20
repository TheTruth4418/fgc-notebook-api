class Matchup < ApplicationRecord
    belongs_to :character
    has_many :matchup_notes
end
