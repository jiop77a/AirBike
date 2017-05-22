json.partial! '/api/bikes/bike', bike: @bike

json.reviews do
  @bike.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end
