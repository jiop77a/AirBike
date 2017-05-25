class Api::BikesController < ApplicationController

  def index
    bounds = params[:bounds]
    bikes = bounds ? Bike.in_bounds(bounds) : Bike.all
    bikes = bikes.where("city ~ ?", params[:city]) if params[:city]

    variety = params[:variety]
    if (variety == "") || (variety == "Select Bike Type") || (variety == "All") || (!variety)
      @bikes = bikes
    else
      @bikes = bikes.where("variety = ?", variety)
    end
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
