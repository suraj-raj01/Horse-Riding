import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Horses = () => {
    function show()
    {
        let d = document.getElementById('bookride');
        d.style.display="block"
    }

    return (
        <>
            <Container >
                <br/><br/>
                <center><h2 >Choose Horse Number</h2></center>
                <Row id='addHorse'>
                    <Col md={3}><Card style={{ width: '18rem' }}>
                        <img src='Images/h1.jpg'/>
                        <Card.Body>
                            <Card.Title>First Horse - 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={show}>Book Now</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card style={{ width: '18rem' }}>
                    <img src='Images/h2.jpg'/>
                        <Card.Body>
                            <Card.Title>Second Horse - 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={show}>Book Now</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card style={{ width: '18rem' }}>
                    <img src='Images/h3.jpg'/>
                        <Card.Body>
                            <Card.Title>Third Horse - 3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={show}>Book Now</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card style={{ width: '18rem' }}>
                    <img src='Images/h4.jpg'/>
                        <Card.Body>
                            <Card.Title>Fourth Horse - 4</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={show}>Book Now</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row id='addHorse'>
                    <Col md={3}><Card style={{ width: '18rem' }}>
                        <img src='https://th.bing.com/th/id/OIP.TFb8CPV3X-iCWyEq33YuxwHaEJ?w=626&h=351&rs=1&pid=ImgDetMain'/>
                        <Card.Body>
                            <Card.Title>Fifth Horse - 5</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={show}>Book Now</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card style={{ width: '18rem' }}>
                    <img src='https://img.freepik.com/premium-photo/black-horse-running-through-field-tall-grass-ai_431161-6822.jpg'/>
                        <Card.Body>
                            <Card.Title>Sixth Horse - 6</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={show}>Book Now</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card style={{ width: '18rem' }}>
                    <img src='https://th.bing.com/th/id/OIP.6rVANySkLRsKl3lxA_5sjQHaEJ?w=626&h=351&rs=1&pid=ImgDetMain'/>
                        <Card.Body>
                            <Card.Title>Seventh Horse - 7</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={show}>Book Now</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card style={{ width: '18rem' }}>
                    <img src='https://img.freepik.com/premium-photo/beautiful-horse-galloping-meadow-sunset_916191-39202.jpg'/>
                        <Card.Body>
                            <Card.Title>Eighth Horse - 8</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={show}>Book Now</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>
        </>
    )
}
export default Horses;