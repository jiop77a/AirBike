# Schema Information

## users

column name | data type | details
------------ | ------------- | -------------
id | integer | not null, primary key
username	| string | not null, indexed, unique
email |	string | not null, indexed, unique
password_digest	| string | not null
session_token	| string	| not null, indexed, unique

### validations
Has Many: Reviews

Has Many: Bookings


## bikes

column name | data type | details
------------ | ------------- | -------------
Id | integer | Not null, primary key
Description | text |
Picture_url | string | 
City | string | not null
Cost | integer | not null
Location_Lat | decimal |
Location_Long | decimal |
Type | string | not null, model validates inclusion in (mountain, road, cruiser, eccentric)
Featured | boolean | Not null

Has Many: Reviews

Has Many: Bookings


## reviews

column name | data type | details
------------ | ------------- | -------------
Id | integer | Not null, primary key
User Id | integer | Not null, indexed
Bike Id | integer | Not null, indexed
Rating | integer | Not null, numerically between 0 and 10
Body | text | Not null

Validation of one userId/houseId combo

Belongs To: Bikes

Belongs To: Reviewer (ClassName: Users)

## bookings

column name | data type | details
------------ | ------------- | -------------
Id | integer | Not null, primary key
User Id | integer | Not null, indexed
Spot Id | integer | Not null, indexed
Start Date | date | Not null, indexed
End Date | date | Not null, indexed

Belongs To: Houses

Belongs To: Renters (ClassName: Users)
