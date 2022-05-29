
import { Container, Row, Col } from 'react-bootstrap';


export default function Home() {
  return (
    <div>
      <Container fluid className="mb-5">
        <Container className="text-center p-5">
          <h1 className="display-4 display-md-3 d-flex flex-column"><span className="mb-4">Your one-stop-shop for
            commercial  frozen dessert
            equipment and service</span><span className="fs-4">Gelato<i className="text-muted p-2 fs-6 bi bi-circle-fill"></i>Ice Cream<i className="text-muted p-2 fs-6 bi bi-circle-fill"></i>Frozen Yogurt<i className="text-muted p-2 fs-6 bi bi-circle-fill"></i>Whipped Topping<i className="text-muted p-2 fs-6 bi bi-circle-fill"></i>Slush<i className="text-muted p-2 fs-6 bi bi-circle-fill"></i>Custard</span></h1>
        </Container>
      </Container>
      <section className="mb-5">
        <Container className="bg-white">
          <Row className="w-100 ">
            <Col className=" d-none d-md-inline bg-light col-5">image goes here</Col>
            <Col className="p-5">
              <h2 className="display-6 mb-4">Sales, consulting services, repairs, and maintenance</h2>
              <p className="fs-5">JTB Distributors has over 30 years of experience providing full service concept to completion for commercial end users all over the United States.
              </p>
              <p className="fs-5">Restaurants, casinos, small businesses,  and retail chains are just a few examples of the industries we serve.
              </p>
              <p className="fs-5">We are an authorized distribution channel for Carpigiani, ISA, Oscartek, GTI Designs, Tekneitalia,
                and other high end manufacturers.</p>

            </Col>
          </Row>
        </Container>
      </section>
      <section className="d-flex flex-column align-content-center">
        <Container className="d-flex flex-column text-center p-4">
          <div className="w-75 m-auto">
            <h3 className="mb-3 display-6">Restaurant Equipment for Every Need</h3>
            <p className="fs-5">No matter what your vision is for your restaurant, coffee shop, ice cream store, or small business — we can help you select the best equipment to make your dream a reality.</p>
          </div>
          <div className="text-center">

          </div>
        </Container>

      </section>
      <section className="text-center">

      </section>
    </div >
  )
}
