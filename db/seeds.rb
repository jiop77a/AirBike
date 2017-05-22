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
    picture_url: "https://s-media-cache-ak0.pinimg.com/564x/28/1a/e4/281ae45e0d79aa8df2c9169f939a020d.jpg",
    cost: 30,
    city: "San Francisco",
    lat: 37.775769,
    lng: -122.434960,
    variety: "Eccentric",
    featured: true
  )

  Bike.create!(
    description: "All your off-road dreams come true!",
    picture_url: "http://cdn.vitalmtb.com/photos/users/600/photos/13641/s1600_upload1.jpg",
    cost: 20,
    city: "San Francisco",
    lat: 37.769996,
    lng: -122.511281,
    variety: "Mountain",
    featured: true
  )

  Bike.create!(
    description: "Sleek and fast; you'll be first off the line!",
    picture_url: "http://68.media.tumblr.com/46934d1f8f9ac5c151c2763f08da5c48/tumblr_inline_mugwrzuTit1rvbuzu.jpg",
    cost: 35,
    city: "San Francisco",
    lat: 37.779760,
    lng: -122.413820,
    variety: "Road",
    featured: true
  )

  Bike.create!(
    description: "A relaxed ride through town, with plenty of space for a few shopping bags..",
    picture_url: "https://s-media-cache-ak0.pinimg.com/564x/69/54/23/6954236364e74f8d859e1e3b34482214.jpg",
    cost: 25,
    city: "San Francisco",
    lat: 37.793349,
    lng: -122.419838,
    variety: "Cruiser",
    featured: true
  )

  Bike.create!(
    description: "The best of the beach and the city!",
    picture_url: "http://i108.photobucket.com/albums/n36/pete355/100_0007-1.jpg",
    cost: 30,
    city: "San Francisco",
    lat: 37.757595,
    lng: -122.413375,
    variety: "Eccentric",
    featured: true
  )

  Bike.create!(
    description: "A sturdy downhill ride.  No frills, just thrills.",
    picture_url: "https://thumbor-static.factorymedia.com/IKmCwYN2kO8rB_O9vW7tEQDqd0s=/465x310/smart/http%3A%2F%2Fcdn.coresites.factorymedia.com%2Fdirt_new%2Fwp-content%2Fuploads%2F2011%2F09%2FP1030025.jpg",
    cost: 20,
    city: "San Francisco",
    lat: 37.764850,
    lng: -122.398346,
    variety: "Mountain",
    featured: true
  )

  Bike.create!(
    description: "Stripped-down single-speed roadie.  Great for urban fun!",
    picture_url: "http://3.bp.blogspot.com/-vHwoZSIAoT4/UX1m-xE61qI/AAAAAAAADP0/rNe6jpE0Yeg/s1600/20130427_151406.jpg",
    cost: 35,
    city: "San Francisco",
    lat: 37.767490,
    lng: -122.402774,
    variety: "Road",
    featured: false
  )

  Bike.create!(
    description: "A Japanese-inspired single-speed cruiser.  You're a local with style!",
    picture_url: "http://7169-presscdn-0-61.pagely.netdna-cdn.com/wp-content/uploads/2013/04/level-mamachari-1.jpg",
    cost: 25,
    city: "San Francisco",
    lat: 37.757944,
    lng: -122.388157,
    variety: "Cruiser",
    featured: false
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

end
