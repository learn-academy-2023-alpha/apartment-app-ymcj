require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let (:user) {User.create email: 'test@testing.com', password: 'test123', password_confirmation: 'test123'}
  describe "GET /index" do
    it "gets a list of apartments" do 
        user.apartments.create(
        bedrooms: 3,
        bathrooms: 7,
        address: "14 Glamuleon Drive",
        planet: "GlipGlop",
        square_footage: 2000,
        price: 500000,
        utilities: "solar panels, slime chamber, washing machine",
        pets: true,
        parking: "ship hangar",
        image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg")

      get '/apartments'
      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 1
    end
  end

  describe "POST /create" do
    it "creates an apartment" do
      apartment_params = {
        apartment: {
          bedrooms: 3,
          bathrooms: 7,
          address: "14 Glamuleon Drive",
          planet: "GlipGlop",
          square_footage: 2000,
          price: 500000,
          utilities: "solar panels, slime chamber, washing machine",
          pets: true,
          parking: "ship hangar",
          image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg",
          user_id: user.id
      }
  }

    post "/apartments", params: apartment_params

    expect(response).to have_http_status(200)
    apartment = Apartment.last
    expect(apartment.address).to eq "14 Glamuleon Drive"
    expect(apartment.bedrooms).to eq 3
    expect(apartment.bathrooms).to eq 7
    expect(apartment.planet).to eq "GlipGlop"
    expect(apartment.square_footage).to eq 2000
    expect(apartment.price).to eq 500000
    expect(apartment.utilities).to eq "solar panels, slime chamber, washing machine"
    expect(apartment.pets).to eq true
    expect(apartment.parking).to eq "ship hangar"
    expect(apartment.image).to eq "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg"
    expect(apartment.user_id).to eq user.id  
  end
end

  it "does not create an apartment without bedrooms" do 
    apartment_params = {
        apartment: {
          bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg", user_id: user.id
        }
      }
      post "/apartments", params: apartment_params 
      expect(response).to have_http_status(422) 
      json = JSON.parse(response.body)
      expect(json['bedrooms']).to include "can't be blank"
  end

  it "does not create an apartment without bathrooms" do 
    apartment_params = {
        apartment: {
          bedrooms: 3, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg", user_id: user.id
        }
      }
      post "/apartments", params: apartment_params 
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['bathrooms']).to include "can't be blank"
  end

  it "does not create an apartment without an address" do 
    apartment_params = {
        apartment: {
          bedrooms: 3, bathrooms: 7, planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg", user_id: user.id
        }
      }
      post "/apartments", params: apartment_params 
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['address']).to include "can't be blank"
  end

  it "does not create an apartment without an planet" do 
    apartment_params = {
        apartment: {
          bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg", user_id: user.id
        }
      }
      post "/apartments", params: apartment_params 
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['planet']).to include "can't be blank"
  end    

  it "does not create an apartment without square_footage" do 
    apartment_params = {
        apartment: {
          bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg", user_id: user.id
        }
      }
      post "/apartments", params: apartment_params 
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['square_footage']).to include "can't be blank"
  end

  it "does not create an apartment without price" do 
    apartment_params = {
        apartment: {
          bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg", user_id: user.id
          }
        }
        post "/apartments", params: apartment_params 
        expect(response).to have_http_status(422)
        json = JSON.parse(response.body)
        expect(json['price']).to include "can't be blank"
  end

  it "does not create an apartment without utilities" do 
      apartment_params = {
          apartment: {
            bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg", user_id: user.id
            }
          }
          post "/apartments", params: apartment_params 
          expect(response).to have_http_status(422)
          json = JSON.parse(response.body)
          expect(json['utilities']).to include "can't be blank"
  end

  it "does not create an apartment without pets" do 
      apartment_params = {
          apartment: {
            bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg", user_id: user.id
          }
        }
          post "/apartments", params: apartment_params 
          expect(response).to have_http_status(422)
          json = JSON.parse(response.body)
          expect(json['pets']).to include "can't be blank"
  end

  it "does not create an apartment without parking" do 
      apartment_params = {
          apartment: {
            bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg", user_id: user.id
          }
        }
        post "/apartments", params: apartment_params 
        expect(response).to have_http_status(422)
        json = JSON.parse(response.body)
        expect(json['parking']).to include "can't be blank"
  end

  it "does not create an apartment without an image" do 
    apartment_params = {
        apartment: {
          bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", user_id: user.id
        }
      }
      post "/apartments", params: apartment_params 
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['image']).to include "can't be blank"
end

it "does not create an apartment without a user_id" do 
  apartment_params = {
      apartment: {
        bedrooms: 3, bathrooms: 7, address: "14 Glamuleon Drive", planet: "GlipGlop", square_footage: 2000, price: 500000, utilities: "solar panels, slime chamber, washing machine", pets: true, parking: "ship hangar", image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg"
      }
    }
    post "/apartments", params: apartment_params 
    expect(response).to have_http_status(422)
    json = JSON.parse(response.body)
    expect(json['user_id']).to include "can't be blank"
end

describe "DELETE /destroy" do
  it "deletes an apartment" do
    apartment_params = {
        apartment: {
          bedrooms: 3,
          bathrooms: 7,
          address: "14 Glamuleon Drive",
          planet: "GlipGlop",
          square_footage: 2000,
          price: 500000,
          utilities: "solar panels, slime chamber, washing machine",
          pets: true,
          parking: "ship hangar",
          image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg",
          user_id: user.id
      }
  }

  post "/apartments", params: apartment_params
  apartment = Apartment.first 
  apartments = Apartment.all

  delete "/apartments/#{apartment.id}"
  expect(response).to have_http_status(200)
  expect(apartments).to be_empty
  end
end

end