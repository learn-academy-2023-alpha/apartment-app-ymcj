import React, {useState, useEffect} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentNew from "./pages/ApartmentNew"
import ProtectedIndex from "./pages/ProtectedIndex"
import NotFound from "./pages/NotFound"


const App = (props) => {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("/apartments")
    .then((response) => response.json())
    .then((payload) => setApartments(payload))
    .catch((error) => console.log(error))
  }

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
  
  const deleteApartment = (id) => {
    fetch(`/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => readApartments())
    .catch((error) => console.log(error))
  }

  return (
    <>
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
          <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} {...props} deleteApartment={deleteApartment}/>} />
          <Route path="/apartmentedit/:id" element={<ApartmentEdit />} />
          <Route path="/myapartments" element={<ProtectedIndex apartments={apartments} current_user={props.current_user} />} />
          <Route path="/apartmentnew" element={<ApartmentNew current_user={props.current_user} createApartment={createApartment} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
