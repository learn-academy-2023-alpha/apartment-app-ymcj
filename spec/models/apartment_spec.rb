require 'rails_helper'
# {
#         bedrooms: 3,
#         bathrooms: 7,
#         address: "14 Glamuleon Drive",
#         planet: "GlipGlop",
#         square_footage: 2000,
#         price: 500000,
#         utilities: "solar panels, slime chamber, washing machine",
#         pets: true,
#         parking: "ship hangar",
#         image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg"
#     }
RSpec.describe Apartment, type: :model do
  let (:user) {User.create email: 'test@testing.com', password: '1234567', password_confirmation: '1234567'}

  it 'should validate bedrooms' do
    apartment = user.apartments.create(bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:bedrooms]).to_not be_empty
  end

  it 'should validate bathrooms' do
    apartment = user.apartments.create(bedrooms: 3, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:bathrooms]).to_not be_empty
  end

  it 'should validate address' do
    apartment = user.apartments.create(bedrooms: 3, bathrooms: 7, planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:address]).to_not be_empty
  end

  it 'should validate planet' do
    apartment = user.apartments.create(bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:planet]).to_not be_empty
  end

  it 'should validate square_footage' do
    apartment = user.apartments.create(bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:square_footage]).to_not be_empty
  end

  it 'should validate price' do
    apartment = user.apartments.create(bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:price]).to_not be_empty
  end

  it 'should validate utilities' do
    apartment = user.apartments.create(bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:utilities]).to_not be_empty
  end

  it 'should validate pets' do
    apartment = user.apartments.create(bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:pets]).to_not be_empty
  end
  
  it 'should validate parking' do
    apartment = user.apartments.create(bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:parking]).to_not be_empty
  end

  it 'should validate image' do
    apartment = user.apartments.create(bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar")
    expect(apartment.errors[:image]).to_not be_empty
  end

  it 'should validate a user_id' do
    apartment = Apartment.create(bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")
    expect(apartment.errors[:user_id]).to_not be_empty
  end
end
