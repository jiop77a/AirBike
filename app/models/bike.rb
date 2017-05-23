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

  

end
