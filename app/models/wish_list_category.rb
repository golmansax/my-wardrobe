# frozen_string_literal: true
class WishListCategory < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates :name, presence: true
end
