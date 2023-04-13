import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ApartmentNew = ({ current_user, createApartment }) => {
  const navigate = useNavigate();

  const [myApartment, setMyApartment] = useState({
    bedrooms: "",
    bathrooms: "",
    address: "",
    planet: "",
    square_footage: "",
    price: "",
    utilities: "",
    pets: "",
    parking: "",
    image: "",
    user_id: current_user?.id,
  });

  const handleChange = (e) => {
    setMyApartment({ ...myApartment, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createApartment(myApartment);
    navigate("/myapartments");
  };

  return (
    <div className="create-form">
      <h1>Create a Listing</h1>
      <Form>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            id="address"
            name="address"
            placeholder="What is the address?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="planet">Planet</Label>
          <Input
            id="planet"
            name="planet"
            placeholder="What planet is this apartment on?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            name="bedrooms"
            placeholder="# Bedrooms"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            name="bathrooms"
            placeholder="# Bathrooms"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="square_footage">Square Footage</Label>
          <Input
            name="square_footage"
            placeholder="What is the square footage of the apartment?"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="utilities">Utilities</Label>
          <Input
            name="utilities"
            placeholder="What utilities does the apartment include?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="parking">Parking</Label>
          <Input
            id="parking"
            name="parking"
            placeholder="Available parking"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets</Label>
          <Input
            name="pets"
            placeholder="Are pets allowed?"
            type="checkbox"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            name="price"
            placeholder="What is the price of the apartment?"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            name="image"
            placeholder="Add an image URL"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Create Listing</Button>
      </Form>
    </div>
  );
};

export default ApartmentNew;
