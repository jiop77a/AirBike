class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :body, null: false, default: ""
      t.integer :rating, null: false
      t.references :bike, index: true, null: false
      t.references :user, index: true, null: false

      t.timestamps null: false
    end

    add_index :reviews, [:bike_id, :user_id], unique: true
  end
end
