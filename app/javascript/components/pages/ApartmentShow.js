import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from "reactstrap"
import {NavLink} from "react-router-dom"


const ApartmentShow = ({apartments, logged_in, deleteApartment}) => {

    const { id } = useParams()
    const navigate = useNavigate()

    let selectedApartment = apartments?.find(apartment => apartment.id === +id)

    const handleSubmit = () => {
      deleteApartment(selectedApartment.id)
      navigate("/myapartments")
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
            Address: {selectedApartment.address}
          </CardTitle>
          <CardSubtitle>
            Planet: {selectedApartment.planet}
          </CardSubtitle>
          <CardText>
            Bedrooms: {selectedApartment.bedrooms}
          </CardText>
          <CardText>
            Bathrooms: {selectedApartment.bathrooms}
          </CardText><CardText>
            square_footage: {selectedApartment.square_footage}
          </CardText><CardText>
            Price: {selectedApartment.price}
          </CardText><CardText>
            Utilities: {selectedApartment.utilities}
          </CardText><CardText>
            Pets: {selectedApartment.pets}
          </CardText><CardText>
            Parking: {selectedApartment.parking}
          </CardText>
        </CardBody>
      </Card>
      )}
      {logged_in && (
        <>
      <Button>
        <NavLink to={`/apartmentedit/${selectedApartment?.id}`}>
          Edit Apartment Listing
        </NavLink>
      </Button>
      <Button onClick={handleSubmit}>
        <NavLink to={'/apartmentindex'}>
          Delete Apartment Listing
        </NavLink>
      </Button>
      </>
    )}
      <Button>
        <NavLink to={`/myapartments`}>
          Back to Listings
        </NavLink>
      </Button>
    </>
  )
}

export default ApartmentShow