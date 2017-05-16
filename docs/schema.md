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

Has Many: Houses

## spot

column name | data type | details
------------ | ------------- | -------------
Id | integer | Not null, primary key
User Id | integer | Not null, unique
Description | text | Not null
City | string | not null
Cost | integer | not null
Location_Lat | decimal | Not null, indexed
Location_Long | decimal | Not null, indexed
Featured | boolean | Not null

Has Many: Reviews

Has Many: Bookings

Belongs To: Owner (ClassName: Users)

## reviews

column name | data type | details
------------ | ------------- | -------------
Id | integer | Not null, primary key
User Id | integer | Not null, indexed
Spot Id | integer | Not null, indexed
Rating | integer | Not null, numerically between 0 and 10
Body | text | Not null

Validation of one userId/houseId combo

Belongs To: Houses

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
