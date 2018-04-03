require_relative 'booking'

describe Booking do

  subject(:booking_one) {Booking.new}
  describe '#start_must_be_in_the_future' do
    it 'throws an error if start date has past'
  end
end
