import { Container } from 'react-bootstrap';


export default function About() {
    return (

        <Container fluid className="mb-5">
            <Container className="text-center p-5">
                <h1 className="display-4 display-md-3 d-flex flex-column">JTB Distributors has been providing quality frozen dessert equipment, service, and training since 1991.</h1>
            </Container>
            <Container fluid className="mb-5">
                <Container className=" m-auto p-md-5">
                    <p className="fs-3">JTB Distributors supplies commercial restaurant equipment for the NorthWest territory of the United States.
                    </p>
                    <div className="fs-5 fw-light">
                        <p >We sell equipment from high-profile Italian manufacturers such as Carpigiani, Tekneitalia, and Oscartek.
                        </p>
                        <p>We are an authorized parts distributor with access to a catalogue of over 10,000 replacement parts that we buy directly from the manufacturer.
                        </p>
                        <p>We provide on-site and virtual repair services provided by the best equipment technicians in the industry. We have been servicing high-end Italian equipment for over thirty years, and offer on-site trainings to make sure your entire staff can properly use and care for the equipment you purchase.
                        </p>
                        <p>Our main priority is to provide excellent customer service, and offer world-class technical and sales support.</p>
                    </div>
                </Container>
            </Container>
        </Container>

    );
}



