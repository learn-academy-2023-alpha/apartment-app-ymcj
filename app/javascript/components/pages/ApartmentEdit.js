import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const ApartmentEdit = ({ apartments, current_user, updateApartment }) => {
  const [editApartment, setEditApartment] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (apartments.length > 0) {
      let currentApartment = apartments.find(
        (apartment) => apartment.id === +id
      );
      setEditApartment({
        bedrooms: currentApartment.bedrooms,
        bathrooms: currentApartment.bathrooms,
        address: currentApartment.address,
        planet: currentApartment.planet,
        square_footage: currentApartment.square_footage,
        price: currentApartment.price,
        utilities: currentApartment.utilities,
        pets: currentApartment.pets,
        parking: currentApartment.parking,
        image: currentApartment.image,
        user_id: current_user?.id,
      });
    }
  }, [apartments]);

  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateApartment(editApartment, id);
    navigate(`/apartmentshow/${id}`);
  };
  if (editApartment) {
    return (
      <div className="create-form">
        <h1>Edit a Listing</h1>
        <Form>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              id="address"
              name="address"
              type="text"
              onChange={handleChange}
              value={editApartment.address}
            />
          </FormGroup>
          <FormGroup>
            <Label for="planet">Planet</Label>
            <Input
              id="planet"
              name="planet"
              type="text"
              onChange={handleChange}
              value={editApartment.planet}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms">Bedrooms</Label>
            <Input
              name="bedrooms"
              type="number"
              onChange={handleChange}
              value={editApartment.bedrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms">Bathrooms</Label>
            <Input
              name="bathrooms"
              type="number"
              onChange={handleChange}
              value={editApartment.bathrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="square_footage">Square Footage</Label>
            <Input
              name="square_footage"
              type="number"
              onChange={handleChange}
              value={editApartment.square_footage}
            />
          </FormGroup>
          <FormGroup>
            <Label for="utilities">Utilities</Label>
            <Input
              name="utilities"
              type="textarea"
              onChange={handleChange}
              value={editApartment.utilities}
            />
          </FormGroup>
          <FormGroup>
            <Label for="parking">Parking</Label>
            <Input
              id="parking"
              name="parking"
              type="text"
              onChange={handleChange}
              value={editApartment.parking}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pets">Pets</Label>
            <Input
              name="pets"
              type="checkbox"
              onChange={handleChange}
              value={editApartment.pets}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              name="price"
              type="number"
              onChange={handleChange}
              value={editApartment.price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              name="image"
              type="text"
              onChange={handleChange}
              value={editApartment.image}
            />
          </FormGroup>
          <Button onClick={handleSubmit}>Update Listing</Button>
        </Form>
      </div>
    );
  } else {
    return <p>Loading... Please Wait</p>;
  }
};
export default ApartmentEdit;
