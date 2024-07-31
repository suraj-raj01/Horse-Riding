
import Hero from "./Components/Hero";
import BookingForm from "./Components/BookingForm";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import BookRide from "./Components/BookRide";
import About from "./Components/About";
const App = () =>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Hero/>}/>
        <Route path="home" element={<Hero/>}/>
        <Route path="bookride" element={<BookRide/>}/>
        <Route path="bookform" element={<BookingForm/>}/>
        <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;