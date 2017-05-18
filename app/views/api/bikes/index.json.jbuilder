@bikes.each do |bike|
  json.set! bike.id do
    json.partial! 'bike', bike: bike
  end
end
