class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.text :description
      t.integer :character_id
      t.integer :matchup_id

      t.timestamps
    end
  end
end
