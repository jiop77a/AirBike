json.extract! booking, :start_date, :end_date, :bike_id
json.city booking.bike.city
json.description booking.bike.description
json.cost booking.bike.cost
json.picture_url booking.bike.picture_url
