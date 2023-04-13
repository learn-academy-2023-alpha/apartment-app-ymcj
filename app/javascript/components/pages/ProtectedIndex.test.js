import React from "react"
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProtectedIndex from "./ProtectedIndex"

describe("<ProtectedIndex />", () => {
  beforeEach(() => {
    const current_user ={
      email: "test@testing.com",
      password: "testing123",
      id: 1
    }

    const userApartment = [
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
      }
    ]
    render(
      <BrowserRouter>
        <ProtectedIndex apartments={userApartment} current_user={current_user}/>
      </BrowserRouter>
    )
  })
  it("renders without crashing", () => {})

  it("displays my listings", () => {
    const apartments = screen.getByText("My Apartments")
    expect(apartments).toBeInTheDocument()
  })
})