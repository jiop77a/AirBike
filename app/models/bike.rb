class Bike < ActiveRecord::Base
  validates :description,
            :picture_url,
            :cost,
            :city,
            :lat,
            :lng,
            :variety,
            :featured, presence: true
  validates :variety, inclusion: { in: %w(Mountain Road Cruiser Eccentric)}


end
