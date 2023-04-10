class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.string :city
      t.string :quote
      t.string :dragon

      t.references :character, index: true, foreign_key: true

      t.timestamps
    end
  end
end
