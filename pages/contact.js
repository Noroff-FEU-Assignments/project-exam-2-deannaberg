import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/forms/ContactForm';

export default function Contact() {
    return (
        <Container>
            <h1 className="display-6 py-3 px-0">Contact</h1>
            <Row className="flex-column-reverse flex-md-row justify-content-center">
                <Col>
                    <ContactForm />
                </Col>
                <Col className="mb-3 ms-md-5">
                    <p className="h5 mb-0">Business Hours:</p>
                    <p>Monday - Friday 9:00am - 4:00pm</p>
                    <p className="h5 mb-0">Phone Number:</p>
                    <address>707-123-1234</address>
                    <p className="h5 mb-0">Email:</p>
                    <address>info@jtbdistributors.com</address>


                </Col>
            </Row>
        </Container>
    )

}