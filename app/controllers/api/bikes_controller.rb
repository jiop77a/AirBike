class Api::BikesController < ApplicationController

  def index
    bounds = params[:bounds]
    bikes = bounds ? Bike.in_bounds(bounds) : Bike.all

    # bikes = bikes.where("variety = ?", params[:variety]) if params[:variety]
    # bikes = bikes.where("city ~ ?", params[:city]) if params[:city]

    @bikes = bikes

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
