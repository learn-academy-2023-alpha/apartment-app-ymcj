user1 = User.where(email: 'test@testing.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')
user2 = User.where(email: 'test2@testing.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')

user1_apartments = [
    {
        bedrooms: 3,
        bathrooms: 7,
        address: "14 Glamuleon Drive",
        planet: "GlipGlop",
        square_footage: 2000,
        price: 500000,
        utilities: "solar panels, slime chamber, washing machine",
        pets: true,
        parking: "ship hangar",
        image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg"
    },
    {
        bedrooms: 1,
        bathrooms: 10.5,
        address: "123 4th Street",
        planet: "Windshield Washing",
        square_footage: 1000,
        price: 1000000,
        utilities: "Windshield wipers, windshield wiper fluid machine, washing machine ",
        pets: false,
        parking: "Windshield wiping store parking lot",
        image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg"
    }
]

user2_apartments = [
    {
        bedrooms: 18,
        bathrooms: 0.5,
        address: ";OUBWG'9034[TH'42GJPWPM]",
        planet: "P",
        square_footage: 10,
        price: 1000,
        utilities: "Shleeb, skrimuleon, jaquibulah",
        pets: true,
        parking: "Street parking",
        image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg"
    },
    {
        bedrooms: 4,
        bathrooms: 2.5,
        address: "111 Regular Way",
        planet: "Dirt",
        square_footage: 1500,
        price: 750000,
        utilities: "N/A",
        pets: false,
        parking: "Don't",
        image: "https://live.staticflickr.com/65535/50077136637_f3611de27c_b.jpg"
    }
]

user1_apartments.each do |apartment|
    user1.apartments.create(apartment)
    p "Created: #{apartment}"
end

user2_apartments.each do |apartment|
    user2.apartments.create(apartment)
    p "Created: #{apartment}"
end