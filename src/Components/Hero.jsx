import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
const Hero = () => {
  return (
    <>
        <Carousel id='carousel'>
          <Carousel.Item interval={1000}>
            <img src='/Images/h1.jpg' />
            <Carousel.Caption>
              <h3>First Horse</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src='/Images/h2.jpg' />
            <Carousel.Caption>
              <h3>Second Horse</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/Images/h3.jpg' />
            <Carousel.Caption>
              <h3>Third Horse</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://wallpaper.dog/large/10815968.jpg' />
            <Carousel.Caption>
              <h3>Fourth Horse</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </>
  )
}
export default Hero;