import { Container, Row, Col } from 'react-bootstrap';
import RequestQuote from '../../components/forms/RequestQuote';
import RequestQuoteForm from '../../components/forms/RequestQuoteForm';
import axios from 'axios';
import { BASE_URL, WOO_COMMERCE_KEY, WOO_COMMERCE_SECRET } from '../../constants/api';
import Image from 'next/image';

export default function ProductDetail({ detail }) {
    return (
        <Container className="mt-5">
            <Row className="w-100">
                <Col md={5}>
                    <div className="w-100 bg-white shadow" >
                        <Image src={detail.images[0].src} width="500" height="500" unoptimized={true} alt={detail.images.alt} />
                    </div>
                    <RequestQuote >
                        <RequestQuoteForm machineName={detail.name} />
                    </RequestQuote>
                </Col>
                <Col className="ps-md-5">
                    <h1 className="display-4 mb-4">{detail.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: detail.description }} />
                </Col>
            </Row>
        </Container>
    )
}

export async function getStaticPaths() {
    try {
        const URL = `${BASE_URL}/wc/v2/products?${WOO_COMMERCE_KEY}&${WOO_COMMERCE_SECRET}`
        const response = await axios.get(URL);

        const data = response.data;


        const paths = data.map((detail) => ({
            params: { id: detail.id.toString() },
        }));

        return {
            paths: paths,
            fallback: false
        };

    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({ params }) {

    const url = `${BASE_URL}/wc/v2/products/${params.id}?${WOO_COMMERCE_KEY}&${WOO_COMMERCE_SECRET}`;
    let detail = null;

    try {
        const response = await axios.get(url);
        detail = response.data;

    } catch (error) {
        console.log(error);
    }

    return {
        props: { detail: detail, },
    };

}