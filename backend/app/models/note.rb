class Note < ApplicationRecord
    belongs_to :matchup_note
    belongs_to :character_note 

    validates_numericality_of :character_note_id, allow_nil: true
    validates_numericality_of :matchup_note_id, allow_nil: true

    validate :character_xor_matchup
    validates :description, presence: true

    private

    def character_xor_matchup
        unless character_note_id.blank? && matchup_note_id.blank?
            errors.add(:base, "Note cant exsist without a character or a matchup!")
        end
    end
end
