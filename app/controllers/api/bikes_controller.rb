class Api::BikesController < ApplicationController

  def index
    bounds = params[:bounds]
    bikes = bounds ? Bike.in_bounds(bounds) : Bike.all
    bikes = bikes.where("city ~ ?", params[:city]) if params[:city]

    if (params[:variety] == "") || (params[:variety] == "Select Bike Type") || (params[:variety] == "All")
      @bikes = bikes
    else
      @bikes = bikes.where("variety = ?", params[:variety])
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
