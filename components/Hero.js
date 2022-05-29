import Container from 'react-bootstrap/container'
export default function Hero({ textColor, background, text }) {
    return (
        <Container fluid className={background}>
            <Container className="d-flex justify-content-center text-center p-5">
                <h1 className={textColor}>{text}</h1>
            </Container>
        </Container>
    )
}