class Api::BikesController < ApplicationController

  def index
      @bikes = Bike.all
      @bikes = @bikes.where("variety = ?", params[:variety]) if params[:variety]
      @bikes = @bikes.where("city ~ ?", params[:city]) if params[:city]
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
