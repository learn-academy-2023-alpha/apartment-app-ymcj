import React from 'react'
import { NavLink } from 'react-router-dom'
import {Card, CardBody, Button, CardTitle} from "reactstrap"

const ApartmentIndex = ({apartments}) => {
  return (
    <>
      <h1>Apartment Listings</h1>
      <div className='apartments'>
        {apartments?.map((apartment, index) => {
          return (
            <Card
              key={index}
              style={{
                width: '18rem'
              }}
            >
              <img
                alt={apartment.address}
                src={apartment.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {apartment.address},{apartment.planet}
                </CardTitle>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default ApartmentIndex