import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from "reactstrap"
import {NavLink} from "react-router-dom"


const ApartmentShow = ({apartments}) => {
    const { id } = useParams()
    const navigate = useNavigate()
    let selectedApartment = apartments.find(apartment => apartment.id === +id)

    const handleSubmit = () => {
      navigate("/apartmentindex")
    }

    return (
    <>
      {selectedApartment && (
        <Card
        style={{
          width: "45%"
        }}
      >
        <img
          alt={selectedApartment.address}
          src={selectedApartment.image}
        />
        <CardBody>
          <CardTitle>
            {selectedApartment.address}
          </CardTitle>
          <CardSubtitle>
            Planet: {selectedApartment.planet}
          </CardSubtitle>
          <CardText>
            Bedrooms: {selectedPlant.bedrooms}
          </CardText>
          <CardText>
            Bathrooms: {selectedPlant.bathrooms}
          </CardText><CardText>
            square_footage: {selectedPlant.square_footage}
          </CardText><CardText>
            Price: {selectedPlant.price}
          </CardText><CardText>
            Utilities: {selectedPlant.utilities}
          </CardText><CardText>
            Pets: {selectedPlant.pets}
          </CardText><CardText>
            Parking: {selectedPlant.parking}
          </CardText>
        </CardBody>
      </Card>
      
      )}
      <Button>
      <NavLink 
      to={`/apartmentedit/${selectedApartment.id}`}>
          Edit Apartment
      </NavLink>
      </Button>
      <Button>
      <NavLink 
      to={`/apartmentindex`}>
          Back to Apartment Index
      </NavLink>
      </Button>
    
    </>
  )
}

export default ApartmentShow