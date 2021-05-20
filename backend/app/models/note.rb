class Note < ApplicationRecord
    belongs_to :matchup_note
    belongs_to :character_note 

    validate_numericality_of :character_id, allow_nil: true
    validate_numericality_of :matchup_id, allow_nil: true

    validate :character_xor_matchup
    validates :description, presence: true

    private

    def character_xor_matchup
        unless character_id.blank? ^ matchup_id.blank>
            errors.add(:base, "Note cant exsist without a character or a matchup!")
        end
    end
end
