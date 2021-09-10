class Matchup < ApplicationRecord
    belongs_to :character
    has_many :matchup_notes
    belongs_to :game

    validates :character_id, presence: true
    validates :character_id, uniqueness: { scope: :opponent_id }
    validates :opponent_id, presence: true

    def opponent
        return Character.find_by_id(self.opponent_id)
    end
end
