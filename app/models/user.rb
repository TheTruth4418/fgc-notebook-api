class User < ApplicationRecord
    validates :username, presence: true
    validates :username, uniqueness: true
    has_secure_password

    has_many :character_notes
    has_many :matchup_notes
end
