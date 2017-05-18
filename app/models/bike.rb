class Bike < ActiveRecord::Base
  validates :description,
            :picture_url,
            :cost,
            :city,
            :lat,
            :lng,
            :type,
            :featured, presence: true
  validates :type, inclusion: { in: %w(mountain road cruiser eccentric)}

  
end
