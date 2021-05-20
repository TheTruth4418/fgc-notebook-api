class CreateMatchups < ActiveRecord::Migration[6.1]
  def change
    create_table :matchups do |t|
      t.string :comfort
      t.integer :character_id
      t.integer :opponent_id, foreign_key: { to_table: 'characters'}

      t.timestamps
    end
  end
end
