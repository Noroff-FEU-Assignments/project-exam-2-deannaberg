import Container from 'react-bootstrap/Container';
import Header from './/Header';
import Footer from './/Footer';

export default function Layout({ children }) {
    return (
        <Container fluid className="d-flex flex-column justify-content-center h-100 p-0">
            <Header />
            <main className="flex-shrink-0 mb-5">
                {children}
            </main>
            <Footer />
        </Container>
    )
}