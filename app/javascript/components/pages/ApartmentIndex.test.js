import React from "react"
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import ApartmentIndex from "./ApartmentIndex"

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ApartmentIndex />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const apartmentListings = screen.getByRole('heading', {
        name: /apartment listings/i
      })
    expect(apartmentListings).toBeInTheDocument()
  })
})