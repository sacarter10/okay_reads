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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130925221840) do

  create_table "book_flags", :force => true do |t|
    t.integer  "user_id"
    t.integer  "book_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "book_flags", ["user_id", "book_id"], :name => "index_book_flags_on_user_id_and_book_id"

  create_table "books", :force => true do |t|
    t.string   "author"
    t.string   "title"
    t.string   "genre"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "open_library_id"
  end

  create_table "reviews", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "user_id"
    t.string   "title"
    t.text     "body"
    t.integer  "book_id"
    t.integer  "rating"
  end

  add_index "reviews", ["user_id", "book_id"], :name => "index_reviews_on_user_id_and_book_id"

  create_table "users", :force => true do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_hash"
    t.string   "session_token"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
    t.string   "provider"
    t.string   "uid"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
  end

  add_index "users", ["username"], :name => "index_users_on_username"

end
