import { Col, Container, ToastBody } from "react-bootstrap";

function Home() {
    return (
        <Container>
            <Col className="container center" md={{ span: 11 }}>
                <br></br>
                <ToastBody>Lorem Ipsum</ToastBody>
                <ToastBody>
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
                </ToastBody>
            </Col>
        </Container>
    );
}
export default Home;
