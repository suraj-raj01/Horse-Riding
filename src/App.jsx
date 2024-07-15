import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Horses from "./Components/Horses";
import BookingForm from "./Components/BookingForm";
import Container from "react-bootstrap/esm/Container";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
const App = () =>{
  return(
    <>
    <NavBar/>
    <br/>
    <Hero/>
    <Container>
    <Horses/>
    </Container>
    <BookingForm/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App;