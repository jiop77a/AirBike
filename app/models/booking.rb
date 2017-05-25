class Booking < ActiveRecord::Base
  belongs_to :bike
  belongs_to :user

  validates(
    :bike,
    :user,
    :start_date,
    :end_date,
    presence: true
  )

  validate :start_must_come_before_end
  validate :start_must_be_in_the_future
  validate :does_not_overlap

  def start_must_be_in_the_future
    errors[:base] << "Booking must be in the future"
  end

  def start_must_come_before_end
    return if start_date < end_date
    errors[:base] << "Start date must come before end date"
  end

  def overlapping_requests
    Booking
     .where.not(id: self.id)
     .where(bike_id: bike_id3)
     .where(<<-SQL, start_date: start_date, end_date: end_date)
        NOT( (start_date > :end_date) OR (end_date < :start_date) )
     SQL
  end

  def does_not_overlap

    unless overlapping_bookings.empty?
      errors[:base] << "Booking conflicts with existing request"
    end

  end

end
