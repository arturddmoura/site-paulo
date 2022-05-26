import { Col, Container, Button } from "react-bootstrap";
import { Text } from "react-bootstrap-text";

function Home() {
    return (
        <Container>
            <Col className="container center">
                <br></br>
                <br></br>
                <Text normal>Lorem Ipsum</Text>
                <Text normal>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum bibendum dapibus sodales. Cras porta lacus eu
                    tellus dapibus suscipit. Fusce mi nisl, posuere ac aliquet
                    quis, aliquam aliquam augue. Quisque id dapibus risus. Cras
                    vel hendrerit justo, nec elementum urna. Cras non urna at
                    risus mollis maximus. Ut aliquet lectus vel augue vulputate,
                    sit amet rutrum ex mollis. Nullam massa nunc, venenatis sed
                    turpis in, blandit suscipit neque. Nullam sit amet odio
                    sagittis, placerat est vel, rutrum libero. Pellentesque
                    porta sem vel diam pretium, eu luctus felis finibus.
                </Text>
                <br></br>
                <Button
                    href="https://api.whatsapp.com/send?phone=5533984600772&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consultoria."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="container center"
                    color="green"
                    variant="success"
                    style={{ fontSize: "1.3rem" }}
                >
                    Clique aqui para marcar uma consultoria pelo WhatsApp
                </Button>
            </Col>
        </Container>
    );
}
export default Home;
