class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.references :bike, index: true, null: false
      t.references :user, index: true, null: false
      t.timestamps null: false
    end
  end
end
