import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {

    return (

        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Escribeme por Whatsapp</h2>
                        <button className="whatsapp"><a href="https://api.whatsapp.com/send/?phone=51973489593&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">📱 Whatsapp</a></button>
                        
                    </Col>
                </Row>
            </Container>
        </section>


    )

}