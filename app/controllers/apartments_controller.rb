class ApartmentsController < ApplicationController
    def index
        aparments = Apartment.all
        render json: apartments
    end

    def create
        apartment = Apartment.create(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end

    private 
    def apartment_params
        params.require(:apartment).permit(:bedrooms, :bathrooms, :address, :planet, :square_footage, :price, :utilities, :pets, :parking, :image, :user_id)
    end
end
