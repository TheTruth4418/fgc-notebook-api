class CharacterNote < ApplicationRecord
    has_many :bullet_points
    has_one :matchup
    belongs_to :game
    belongs_to :character

    validates :title, uniqueness: {scope: :character_id, message: "No Duplicate note names!"}
    validates :title, presence: true
    validates :game_id, presence: true
    validates :character_id, presence: true

    scope :pull, -> (id) { where(game_id: id ) }
end
