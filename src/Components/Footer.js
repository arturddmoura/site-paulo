import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import { Text } from "react-bootstrap-text";

function Footer() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1,
            }}
        />
    );
    return (
        <Container>
            {/* Aqui começam as recomendações */}
            <br></br>
            <br></br>
            <Text>Depoimentos dos alunos:</Text>
            <ColoredLine color="grey" />
            <CardGroup>
                <Card>
                    <Card.Header>Lorem Ipsum :</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum bibendum dapibus sodales. Cras
                            porta lacus eu tellus dapibus suscipit.{" "}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Lorem Ipsum :</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum bibendum dapibus sodales. Cras
                            porta lacus eu tellus dapibus suscipit.{" "}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Lorem Ipsum :</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum bibendum dapibus sodales. Cras
                            porta lacus eu tellus dapibus suscipit.{" "}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
}

export default Footer;
