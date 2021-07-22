class CreateMatchupNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :matchup_notes do |t|
      t.string :title
      t.integer :game_id
      t.integer :character_id
      t.integer :opponent_id
      t.integer :matchup_id

      t.timestamps
    end
  end
end
