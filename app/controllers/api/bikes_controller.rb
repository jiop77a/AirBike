class Api::BikesController < ApplicationController

  def index
    @bikes = Bike.all
  end

  def show
    @bike = Bike.find(params[:id])
  end

  private

  def bike_params
    params.require(:bike).permit(
      :description,
      :picture_url,
      :cost,
      :city,
      :lat,
      :lng,
      :variety,
      :featured
    )
  end
end
