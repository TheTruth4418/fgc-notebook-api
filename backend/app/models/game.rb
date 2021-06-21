class Game < ApplicationRecord
    has_many :characters
    has_many :matchups
    validate :title, uniqueness: true
end
