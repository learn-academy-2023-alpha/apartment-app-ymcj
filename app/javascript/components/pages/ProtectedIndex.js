import React from "react";
import { Card, CardBody, Button, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";

const ProtectedIndex = ({ apartments, current_user }) => {
  const myApartments = apartments?.filter(
    (apartment) => current_user.id === apartment.user_id
  );
  return (
    <>
      <h1>My Apartments</h1>
      <div className="apartments">
        {myApartments?.map((apartment, index) => {
          return (
            <Card
              key={index}
              style={{
                width: "18rem",
              }}
            >
              <img alt={apartment.address} src={apartment.image} />
              <CardBody>
                <CardTitle tag="h5">
                  {apartment.address}, {apartment.planet}
                </CardTitle>
                <Button>
                  <NavLink to={`/apartmentshow/${apartment.id}`}>
                    See More Info
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ProtectedIndex;
