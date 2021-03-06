class BulletPoint < ApplicationRecord
    belongs_to :matchup_note, optional: true
    belongs_to :character_note, optional: true

    validates_presence_of :character_note_id, if: :matchup_note_id_blank?
    validates_presence_of :matchup_note_id, if: :character_note_id_blank?

    validates :description, presence: true
    validates :description, uniqueness: {scope: :character_note_id, message: "No Duplicate note name for character"}, if: :matchup_note_id_blank?
    validates :description, uniqueness: {scope: :matchup_note_id, message: "No Duplicate note name for matchup"}, if: :character_note_id_blank?

    def character_note_id_blank?
        character_note_id.blank?
    end

    def matchup_note_id_blank?
        matchup_note_id.blank? 
    end
end
