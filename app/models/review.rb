class Review < ActiveRecord::Base
  validates :rating, inclusion: { in: (1..10) }
  validates :bike, :user, presence: true
  validates :body, presence: { message: "Body can't be blank" }
  validates :user_id, uniqueness: { scope: :bike,
    message: "You can only review a bike once"}
  belongs_to :user
  belongs_to :bike
end
