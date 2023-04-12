class ApartmentsController < ApplicationController
    def index
        aparments = Apartment.all
        render json: apartments
    end
end
