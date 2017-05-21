class Review < ActiveRecord::Base
  validates :rating, inclusion: { in: (1..10) }
  validates :bike, :user, presence: true
  validates :user, uniqueness: { scope: :bike }
  belongs_to :user
  belongs_to :bike
end
