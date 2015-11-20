class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :text
      t.integer :hoursleft
      t.integer :minutesleft
      t.string :author

      t.timestamps null: false
      t.references :user, index: true, foreign_key: true
    end
  end
end
