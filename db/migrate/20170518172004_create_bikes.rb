class CreateBikes < ActiveRecord::Migration
  def change
    create_table :bikes do |t|
      t.string :description
      t.string :picture_url
      t.integer :cost
      t.string :city
      t.decimal :lat
      t.decimal :lng
      t.string :type, null: false
      t.boolean :featured, null: false

      t.timestamps null: false
    end
  end
end
