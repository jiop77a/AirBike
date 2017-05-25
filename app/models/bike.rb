class Bike < ActiveRecord::Base
  validates :description,
            :picture_url,
            :cost,
            :city,
            :lat,
            :lng,
            :variety, presence: true
  validates :variety, inclusion: { in: %w(Mountain Road Cruiser Eccentric)}
  validates :featured, inclusion: { in: [true, false]}

  has_many :reviews
  has_many :bookings

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

end
