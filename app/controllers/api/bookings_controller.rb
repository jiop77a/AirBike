class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.all.where("user_id = ?", params[:user_id])
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])

    if @booking.destroy
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end



  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :bike_id, :user_id)
  end
end
