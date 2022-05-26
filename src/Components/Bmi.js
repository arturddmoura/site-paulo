import React, { useState } from "react";
import { Form, Button, Col, Alert, Container } from "react-bootstrap";

function Bmi() {
    const [userAltura, setAltura] = useState("");
    const [userPeso, setPeso] = useState("");
    const [pesoabaixo, setPesoAbaixo] = useState("");
    const [obeso, setObeso] = useState("");
    const [normal, setNormal] = useState("");
    const [sobrepeso, setSobrepeso] = useState("");

    function handleIMC(res) {
        res.preventDefault();
        if (userPeso !== null && userAltura !== null) {
            let imc = (userPeso / ((userAltura * userAltura) / 10000)).toFixed(
                2
            );
            if (imc >= 30) {
                setObeso(imc);
            } else if (imc <= 18.5) {
                setPesoAbaixo(imc);
            } else if (imc >= 18.6 && imc <= 24.9) {
                setNormal(imc);
            } else if (imc >= 25 && imc <= 29.9) {
                setSobrepeso(imc);
            }
        }
    }
    return (
        <Container>
            <br></br>
            <br></br>
            <Col className="container center justify-content-center">
                {obeso ? (
                    <Alert key="danger" variant="danger">
                        Você está obeso.<br></br> IMC: {obeso}
                    </Alert>
                ) : (
                    ""
                )}
                {pesoabaixo ? (
                    <Alert key="danger" variant="danger">
                        Seu IMC está abaixo do normal.<br></br> IMC:{" "}
                        {pesoabaixo}
                    </Alert>
                ) : (
                    ""
                )}
                {normal ? (
                    <Alert key="success" variant="success">
                        Seu IMC está normal.<br></br> IMC: {normal}
                    </Alert>
                ) : (
                    ""
                )}
                {sobrepeso ? (
                    <Alert key="warning" variant="warning">
                        Seu IMC está acima normal.<br></br> IMC: {sobrepeso}
                    </Alert>
                ) : (
                    ""
                )}
                <Form onSubmit={handleIMC}>
                    <Form.Label>Calcule seu IMC abaixo:</Form.Label>
                    <Form.Group>
                        <Form.Control
                            type="number"
                            placeholder="Insira sua altura em centímetros:"
                            onChange={(res) => setAltura(res.target.value)}
                        />
                        <Form.Control
                            className="mt-1"
                            type="number"
                            placeholder="Insira seu peso em quilogramas:"
                            onChange={(res) => setPeso(res.target.value)}
                        />
                        <Button
                            className="mt-1 container w-50 float-end"
                            variant="primary"
                            type="submit"
                        >
                            Calcular
                        </Button>
                        <Button
                            href="/imc"
                            className="mt-1 container w-50 float-end"
                            variant="secondary"
                        >
                            Limpar
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Container>
    );
}

export default Bmi;
