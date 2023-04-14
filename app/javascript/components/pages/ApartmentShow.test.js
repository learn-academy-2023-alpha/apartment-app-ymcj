import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import ApartmentShow from "./ApartmentShow"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import apartments from "../mockApartments"


const renderShow = () => {
    render (
        <MemoryRouter initialEntries={["/apartmentshow/1"]}>
            <Routes>
                <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments}/>} />                
            </Routes>
        </MemoryRouter>
    )
}
describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    renderShow()
    const planet=screen.getByText(`Planet: ${apartments[0].planet}`)
    expect(planet).toBeInTheDocument()
  })
  it("has clickable links for an unregistered user", () => {
    render(
      <BrowserRouter>
        <ApartmentShow logged_in={false} />
      </BrowserRouter>
    )
    const allApartments = userEvent.click(
      screen.getByRole("link", { name: /back to listings/i })
    )
  })
  it("has an edit button for a registered user", () => {
    render(
      <BrowserRouter>
        <ApartmentShow logged_in={true} />
      </BrowserRouter>
    )
    const editApartments = userEvent.click(
      screen.getByRole("link", { name: /edit apartment listing/i })
    )
  })
  it("has a delete button for a register user", () => {
    render(
      <BrowserRouter>
        <ApartmentShow logged_in={true} />
      </BrowserRouter>
    )
    const deleteApartment = userEvent.click(
      screen.getByRole("link", { name: /delete apartment listing/i })
    )
  })
})

export default ApartmentShow