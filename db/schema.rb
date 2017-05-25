# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170525181836) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bikes", force: :cascade do |t|
    t.string   "description"
    t.string   "picture_url"
    t.integer  "cost"
    t.string   "city"
    t.string   "variety",     null: false
    t.boolean  "featured",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.float    "lat"
    t.float    "lng"
  end

  create_table "bookings", force: :cascade do |t|
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.integer  "bike_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "bookings", ["bike_id"], name: "index_bookings_on_bike_id", using: :btree
  add_index "bookings", ["user_id"], name: "index_bookings_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.string   "body",       default: "", null: false
    t.integer  "rating",                  null: false
    t.integer  "bike_id",                 null: false
    t.integer  "user_id",                 null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "reviews", ["bike_id", "user_id"], name: "index_reviews_on_bike_id_and_user_id", unique: true, using: :btree
  add_index "reviews", ["bike_id"], name: "index_reviews_on_bike_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
