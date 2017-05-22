json.partial! '/api/bikes/bike', bike: @bike

json.reviews do
  json.partial! 'api/reviews/review', collection: bench.reviews, as: :review
end
