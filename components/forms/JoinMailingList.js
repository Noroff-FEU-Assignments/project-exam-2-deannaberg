import { Container, Col, Row, Form, Button, Stack } from 'react-bootstrap';
export default function JoinMailingList() {
    return (
        <Container fluid className=" bg-secondary">
            <Container className="py-5">
                <Row className="d-flex justify-content-between">
                    <Col className="mb-3">
                        <p className="text-white text-center display-6">Join our mailing list and stay up to date on all our products and services!</p>
                    </Col>
                    <Col md={4} className="me-auto">
                        <Form className="d-flex justify-content-center">
                            <Form.Group className="mb-3" controlId="joinMailingListEmail">
                                <Stack className="mb-2" direction="horizontal" gap={2}>
                                    <Form.Label className="visually-hidden" >Your email address</Form.Label>
                                    <Form.Control className="me-auto" type="email" placeholder="Your email address" />
                                    <Button type="submit">Join!</Button>
                                </Stack>
                                <Form.Text className="text-light">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}