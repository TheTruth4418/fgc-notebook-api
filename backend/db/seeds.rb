# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed in two MU Notes and Char Notes with two bullet points for each game.

#MK SEEDS
CharacterNote.create(title: "Flawless Block Gaps", character_id: 37, game_id: 1)
CharacterNote.create(title: "Punishabel strings", character_id: 10, game_id: 1)
BulletPoint.create(character_note_id: 1, description:"212 on last hit")
BulletPoint.create(character_note_id: 2, description:"b12 is -13")

MatchupNote.create(character_id: 37, matchup_id: 1342, title: "Dealing with 11 pressure", game_id: 1)
MatchupNote.create(character_id: 37, matchup_id: 1342, title: "Dealing with Zoning", game_id: 1)
BulletPoint.create(matchup_note_id: 1, description:"Move in slowly after string is blocked")
BulletPoint.create(matchup_note_id: 2, description:"Duck 1st one and block second. Teleport in when they are comfy")

MatchupNote.create(character_id: 10, matchup_id: 370, title: "Dealing with running man pressure", game_id: 1)
MatchupNote.create(character_id: 10, matchup_id: 370, title: "Dealing with ion pressure", game_id:1)
BulletPoint.create(matchup_note_id: 3, description: "Flawless block b32 into kick")
BulletPoint.create(matchup_note_id: 4, description:"Punish f2 grenade")