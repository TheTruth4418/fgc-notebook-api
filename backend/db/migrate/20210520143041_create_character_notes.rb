class CreateCharacterNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :character_notes do |t|
      t.string :title
      t.integer :character_id
      t.integer :user_id

      t.timestamps
    end
  end
end
