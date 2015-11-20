class CreateSubtasks < ActiveRecord::Migration
  def change
    create_table :subtasks do |t|
      t.string :title
      t.text :description
      t.integer :subhours
      t.integer :subminutes
      t.string :author
      t.references :project, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
