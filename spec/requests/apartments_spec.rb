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
end