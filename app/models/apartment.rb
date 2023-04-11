class Apartment < ApplicationRecord
    belongs_to :user
    validates :bedrooms, :bathrooms, :address, :planet, :square_footage, :price, :utilities, :pets, :parking, :image, :user_id, presence: true
end
