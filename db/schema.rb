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

ActiveRecord::Schema.define(version: 20160308011344) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "slug",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "brands", ["slug"], name: "index_brands_on_slug", unique: true, using: :btree

  create_table "clothing_items", force: :cascade do |t|
    t.string   "model",      null: false
    t.string   "type",       null: false
    t.string   "slug",       null: false
    t.integer  "brand_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "clothing_items", ["slug"], name: "index_clothing_items_on_slug", unique: true, using: :btree

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string   "slug",                      null: false
    t.integer  "sluggable_id",              null: false
    t.string   "sluggable_type", limit: 50
    t.string   "scope"
    t.datetime "created_at"
  end

  add_index "friendly_id_slugs", ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true, using: :btree
  add_index "friendly_id_slugs", ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type", using: :btree
  add_index "friendly_id_slugs", ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id", using: :btree
  add_index "friendly_id_slugs", ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type", using: :btree

  create_table "purchases", force: :cascade do |t|
    t.string   "version",          null: false
    t.date     "date",             null: false
    t.integer  "clothing_item_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "purchases_purposes", id: false, force: :cascade do |t|
    t.integer "purchase_id"
    t.integer "purpose_id"
  end

  create_table "purposes", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "slug",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "purposes", ["slug"], name: "index_purposes_on_slug", unique: true, using: :btree

  create_table "wish_list_categories", force: :cascade do |t|
    t.string   "name",              null: false
    t.string   "slug",              null: false
    t.string   "clothing_item_ids", null: false, array: true
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "wish_list_categories", ["slug"], name: "index_wish_list_categories_on_slug", unique: true, using: :btree

end
