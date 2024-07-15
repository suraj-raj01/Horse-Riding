import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const BookingForm = () => {
    function hide()
    {
        document.getElementById('bookride').style.display='none';
        // document.getElementById('msg').style.display='block';
        let a = document.getElementById('opt').value;
        let d = document.getElementById('date').value;
        let n = document.getElementById('num').value;
        let e = document.getElementById('email').value;
        alert("your ride has been booked!!\n"+"Your Horse Number : "+a+"\nDate is : "+d+"\nYour Number is: "+n+"\nYour Email is: "+e+"\nThank You For Visiting")
    }
    function cancel(){
        document.getElementById("bookride").style.display='none';
    }
    return (
        <>
            <Container id='bookride'>
                <br />
                <br />
                <Row id='list'>
                    <Col sm={5}>
                        <h5>Select a Horse</h5>
                        <Form.Select aria-label="Default select example" id='opt'>
                            <option>Select horse</option>
                            <option value="1">first Horse - 1</option>
                            <option value="2">Second Horse - 2</option>
                            <option value="3">Third Horse - 3 </option>
                            <option value="4">Fourt Horse - 4</option>
                            <option value="5">Fifth Horse - 5</option>
                            <option value="6">Sixth Horse - 6</option>
                            <option value="7">Seventh Horse - 7</option>
                            <option value="8">Eighth Horse - 8</option>
                        </Form.Select>
                        <br />
                        <h5>Select a date</h5>
                        {/* <h1 id='date'><DatePicker id='date'/></h1> */}
                        <h4><input type="date" id='date'/></h4>
                        <br/>
                    <Form>
                        <Row md={2}>
                            <Col>
                                <Form.Control type='text' placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control type='text' placeholder="Last name" />
                            </Col>
                            <br/><br/>
                            <Col>
                                <Form.Control type='email' placeholder="email" id='email'/>
                            </Col>
                            <br/><br/>
                            <Col>
                                <Form.Control type='password' placeholder="password" />
                            </Col><br/><br/>
                            <Col>
                                <Form.Control type='number' placeholder="phone number" id='num' />
                            </Col>
                        </Row>
                        <br/>
                            <Button variant="primary" onClick={hide}>Submit</Button>{' '}
                            <Button variant="warning" onClick={cancel}>Cancel</Button>{' '}
                    </Form>
                    </Col>
                </Row>
            </Container>
                
        </>
    )
}
export default BookingForm;