import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentNew from "./pages/ApartmentNew"
import NotFound from "./pages/NotFound"



const App = (props) => {

  const createApartment = (apartment) => {
    fetch("/apartments", {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readApartments())
    .catch((error) => console.log(error))


  }
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentindex" element={<ApartmentIndex />} />
          <Route path="/apartmentshow/:id" element={<ApartmentShow />} />
          <Route path="/apartmentedit/:id" element={<ApartmentEdit />} />
          <Route path="/apartmentnew" element={<ApartmentNew current_user={props.current_user} createApartment={createApartment} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
