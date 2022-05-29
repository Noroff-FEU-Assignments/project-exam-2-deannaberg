import Link from 'next/link';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Search from '..//forms/Search';
import style from '../../styles/Header.module.scss';



export default function Header() {
    return (
        <Navbar className="w-100 bg-transparent m-0" expand="md">
            <Container fluid className="flex-column p-0">
                <Row className="justify-content-between container mb-4">
                    <Col xs={true}>
                        <i className="bi bi-facebook h5 me-3 text-primary"></i>
                        <i className="bi bi-instagram h5 text-primary"></i>
                    </Col>
                    <Col xs={6} md={true} className="me-auto">
                        <Link href="/" passHref><Navbar.Brand><img className="img-fluid" src="/logo.svg" alt="" /></Navbar.Brand></Link>
                    </Col>
                    <Col xs={true} className="me-auto d-flex justify-content-end">
                        <address><i className="bi bi-telephone-fill h5 me-3 text-primary"></i></address>
                        <address><i className="bi bi-envelope-fill h5 text-primary"></i></address>
                    </Col>
                </Row>
                <Container fluid className="bg-white shadow p-0">
                    <Container className="py-2">
                        <Row className="justify-content-between">
                            <Col className="mb-0 d-flex align-content-center">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto my-2 my-lg-0 p-0">
                                        <Link href="/" passHref><Nav.Link className={style.navLink}>Home</Nav.Link></Link>
                                        <Link href="/about" passHref><Nav.Link className={style.navLink}>About</Nav.Link></Link>
                                        <Link href="/equipment/equipment" passHref><Nav.Link className={style.navLink}>Equipment</Nav.Link></Link>
                                        <Link href="/contact" passHref><Nav.Link className={style.navLink}>Contact</Nav.Link></Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Col>
                            <Col className="col-auto d-flex">
                                <Search />
                                <Link href="/admin/admin-login" passHref><Nav.Link className={style.navLink}><i className="bi bi-person-circle h3 ms-3"></i></Nav.Link></Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </Container>
        </Navbar >

    );
}