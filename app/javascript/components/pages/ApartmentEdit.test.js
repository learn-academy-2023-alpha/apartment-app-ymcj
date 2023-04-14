import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApartmentEdit from "./ApartmentEdit";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import apartments from "../mockApartments";

describe("<ApartmentEdit />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/apartmentedit/1"]}>
        <Routes>
          <Route
            path="/apartmentedit/:id"
            element={<ApartmentEdit apartments={apartments} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
  it("renders an edit page without crashing", () => {
    const pageTitle = screen.getByText("Edit a Listing");
    expect(pageTitle).toBeInTheDocument();
  });
  it("has fillable forms for updating an apartment", () => {
    const formAddress = screen.getByText(/address/i);
    expect(formAddress.getAttribute("for")).toEqual("address");

    const formPlanet = screen.getByText(/planet/i);
    expect(formPlanet.getAttribute("for")).toEqual("planet");

    const formBedrooms = screen.getByText(/bedrooms/i);
    expect(formBedrooms.getAttribute("for")).toEqual("bedrooms");

    const formBathrooms = screen.getByText(/bathrooms/i);
    expect(formBathrooms.getAttribute("for")).toEqual("bathrooms");

    const formSquareFootage = screen.getByText(/square footage/i);
    expect(formSquareFootage.getAttribute("for")).toEqual("square_footage");

    const formUtilities = screen.getByText(/utilities/i);
    expect(formUtilities.getAttribute("for")).toEqual("utilities");

    const formParking = screen.getByText(/parking/i);
    expect(formParking.getAttribute("for")).toEqual("parking");

    const formPets = screen.getByText(/pets/i);
    expect(formPets.getAttribute("for")).toEqual("pets");

    const formPrice = screen.getByText(/price/i);
    expect(formPrice.getAttribute("for")).toEqual("price");

    const formImage = screen.getByText(/image/i);
    expect(formImage.getAttribute("for")).toEqual("image");
  });
});
