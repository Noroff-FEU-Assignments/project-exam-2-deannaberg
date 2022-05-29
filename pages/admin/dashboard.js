import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BASE_URL, WOO_COMMERCE_KEY, WOO_COMMERCE_SECRET } from '../../constants/api';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';



export default function Dashboard(props) {
    const router = useRouter();
    const [, setAuth] = useContext(AuthContext);

    function logout() {
        setAuth(null);
        router.push('/');
    }
    return (
        <Container>
            <h1 className="display-6 py-3 px-0">Dashboard</h1>
            <Button onClick={logout}>Logout</Button>
            <Row className="w-100 h-auto d-flex">
                <Col md={2}>

                </Col>
                <Col className="d-flex flex-wrap ">
                    {props.products.map((data) => {
                        return <Card className="border-0 bg-transparent me-2" style={{ width: '12rem' }} key={data.id}>
                            <a href={`${data.id}`}>
                                <Card.Img className="bg-white shadow-sm border-0 p-2" variant="top" style={{ width: '100%', height: 'auto' }} src={data.images[0].src} />
                                <Card.Body className="px-0">
                                    <Card.Title>{data.name}</Card.Title>
                                </Card.Body>
                            </a>
                        </Card>
                    })}
                </Col>
            </Row>
        </Container>
    );
}
export async function getStaticProps() {
    let products = [];
    const url = `${BASE_URL}/wc/v2/products?${WOO_COMMERCE_KEY}&${WOO_COMMERCE_SECRET}`;

    try {
        const response = await axios.get(url);
        products = response.data;
        console.log(data);

    } catch (error) {
        console.log(error);
    }
    return {
        props: {
            products: products,
        },
    };

}