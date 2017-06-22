# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def create_random_review!(bike, user)
  Review.create!(
  bike_id: bike.id,
  user_id: user.id,
  rating: (1..10).to_a.sample,
  body: Faker::Hipster.sentence
  )
end

def create_set_booking!(bike, user)
  Booking.create!(
  bike_id: bike.id,
  user_id: user.id,
  start_date: "2018/7/6",
  end_date: "2018/7/16"
  )
end


ActiveRecord::Base.transaction do

  User.delete_all


  User.create!(
    username: "Frank",
    password: "password"
  )

  User.create!(
    username: "Gus",
    password: "password"
  )

end

ActiveRecord::Base.transaction do

  Bike.delete_all

  Bike.create!(
    description: "Add some attitude (and altitude) to your city cruise",
    picture_url: "https://res.cloudinary.com/dol1mm8bd/image/upload/e_art:primavera/v1497903547/281ae45e0d79aa8df2c9169f939a020d_noaqgw.jpg",
    cost: 30,
    city: "San Francisco",
    lat: 37.775769,
    lng: -122.434960,
    variety: "Eccentric",
    featured: true
  )

  Bike.create!(
    description: "All your off-road dreams come true!",
    picture_url: "https://res.cloudinary.com/dol1mm8bd/image/upload/v1498157285/s1600_upload1_bz1e3t.jpg",
    cost: 20,
    city: "San Francisco",
    lat: 37.769996,
    lng: -122.511281,
    variety: "Mountain",
    featured: true
  )

  Bike.create!(
    description: "Sleek and fast; you'll be first off the line!",
    picture_url: "https://res.cloudinary.com/dol1mm8bd/image/upload/v1498156174/tumblr_inline_mugwrzuTit1rvbuzu_haospu.jpg",
    cost: 35,
    city: "Oakland",
    lat: 37.801564,
    lng: -122.273301,
    variety: "Road",
    featured: true
  )

  Bike.create!(
    description: "A relaxed ride through town, with plenty of space for a few shopping bags..",
    picture_url: "https://res.cloudinary.com/dol1mm8bd/image/upload/v1498156202/6954236364e74f8d859e1e3b34482214_t59lcl.jpg",
    cost: 25,
    city: "Oakland",
    lat: 37.804625,
    lng: -122.263569,
    variety: "Cruiser",
    featured: true
  )

  Bike.create!(
    description: "The best of the beach and the city!",
    picture_url: "https://res.cloudinary.com/dol1mm8bd/image/upload/e_art:eucalyptus/v1498156301/100_0007-1_fp6ulr.jpg",
    cost: 30,
    city: "San Francisco",
    lat: 37.757595,
    lng: -122.413375,
    variety: "Eccentric",
    featured: true
  )

  Bike.create!(
    description: "A sturdy downhill ride.  No frills, just thrills.",
    picture_url: "https://res.cloudinary.com/dol1mm8bd/image/upload/v1498156317/http_3A_2F_2Fcdn.coresites.factorymedia.com_2Fdirt_new_2Fwp-content_2Fuploads_2F2011_2F09_2FP1030025_mnhgby.jpg",
    cost: 20,
    city: "Berkeley",
    lat: 37.865742,
    lng: -122.270780,
    variety: "Mountain",
    featured: false
  )

  Bike.create!(
    description: "Stripped-down single-speed roadie.  Great for urban fun!",
    picture_url: "https://res.cloudinary.com/dol1mm8bd/image/upload/v1498156337/20130427_151406_tbjfly.jpg",
    cost: 35,
    city: "San Francisco",
    lat: 37.767490,
    lng: -122.402774,
    variety: "Road",
    featured: false
  )

  Bike.create!(
    description: "A Japanese-inspired single-speed cruiser.  You're a local with style!",
    picture_url: "https://res.cloudinary.com/dol1mm8bd/image/upload/v1498156354/level-mamachari-1_ln3llo.jpg",
    cost: 25,
    city: "Berkeley",
    lat: 37.867512,
    lng: -122.267915,
    variety: "Cruiser",
    featured: true
  )

  User.all.each do |user|
    Bike.all.each do |bike|
      create_random_review!(bike, user)

    end
  end

  User.create!(
  username: "Guest",
  password: "password"
  )


  Bike.all.each do |bike|
    guest = User.last
    create_set_booking!(bike, guest)
  end

  # Booking.create!(
  #   bike_id: 1,
  #   user_id: 1,
  #   start_date: Faker::Date.forward(10),
  #   end_date: Faker::Date.forward(20)
  # )
  #
  # Booking.create!(
  #   bike_id: 2,
  #   user_id: 2,
  #   start_date: Faker::Date.forward(10),
  #   end_date: Faker::Date.forward(20)
  # )

end
