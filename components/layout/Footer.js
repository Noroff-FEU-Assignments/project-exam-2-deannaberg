import JoinMailingList from '../forms/JoinMailingList'
import Link from 'next/link';
import { Nav, Row, Col, Container } from 'react-bootstrap';
import styles from '../../styles/Footer.module.scss';
export default function Footer() {
    return (
        <footer className="footer mt-auto bg-primary">
            <JoinMailingList />
            <Container className="py-5">
                <Row>
                    <Col md={6} className="col-auto me-auto mb-3">
                        <Link href="/"><h2 className="text-white">JTB Distributors</h2></Link>
                        <p className="h4 text-white">Providing quality frozen dessert equipment, service, and training since 1991.</p>
                        <div><i className="h4 bi bi-facebook me-2 text-white"></i>
                            <i className="h4 bi bi-instagram text-white"></i></div>
                    </Col>
                    <Col className="col-auto me-auto">
                        <Nav defaultActiveKey="/home" className="flex-column ">
                            <Link href="/home" passHref><Nav.Link className={styles.navLink}>Home</Nav.Link></Link>
                            <Link href="/about" passHref><Nav.Link className={styles.navLink}>About</Nav.Link></Link>
                            <Link href="/equipment" passHref><Nav.Link className={styles.navLink}>Equipment</Nav.Link></Link>
                            <Link href="/store" passHref><Nav.Link className={styles.navLink}>Store</Nav.Link></Link>
                            <Link href="/News" passHref><Nav.Link className={styles.navLink}>News</Nav.Link></Link>
                            <Link href="/Contact" passHref><Nav.Link className={styles.navLink}>Contact</Nav.Link></Link>
                        </Nav>
                    </Col>
                    <Col className="col-auto me-auto">
                        <address className={styles.address}>61 Sheehy Ct.
                            Napa, CA 94558</address>
                        <address className={styles.address}>info@jtbdistributors.com</address>
                        <address className={styles.address}>707-123-1234</address>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-dark">
                <Container className="py-2">
                    <p>Copywrite text goes here</p>
                </Container>
            </Container>
        </footer>

    );
}