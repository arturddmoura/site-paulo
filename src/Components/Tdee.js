import React, { useState } from "react";
import { Form, Button, Col, Alert, Container } from "react-bootstrap";

function Tdee() {
    const [altura, setAltura] = useState("");
    const [userPeso, setPeso] = useState("");
    const [idade, setIdade] = useState("");
    const [sexo, setSexo] = useState("");
    const [nivel, setNivel] = useState("");
    const [sucess, setSucess] = useState("");

    const [bmrDiario, setBmrDiario] = useState("");
    const [tdeeDiario, setTdeeDiario] = useState("");
    const [calPerda, setCalPerda] = useState("");
    const [calGanho, setCalGanho] = useState("");

    function handleTDEE(res) {
        res.preventDefault();
        if (sexo === "masculino") {
            let bmr =
                88.362 + 13.397 * userPeso + 4.799 * altura - 5.677 * idade;
            let bmrDiario = Math.round(bmr);
            let tdeeDiario = Math.round(bmr * nivel);
            let calPerda = Math.round(tdeeDiario * 0.8);
            let calGanho = Math.round(tdeeDiario * 1.1);
            setSucess(true);

            setBmrDiario(bmrDiario);
            setTdeeDiario(tdeeDiario);
            setCalPerda(calPerda);
            setCalGanho(calGanho);
        }
        if (sexo === "feminino") {
            let bmr =
                447.593 + 9.247 * userPeso + 3.098 * altura - 4.33 * idade;
            let bmrDiario = Math.round(bmr);
            let tdeeDiario = Math.round(bmr * nivel);
            let calPerda = Math.round(tdeeDiario * 0.8);
            let calGanho = Math.round(tdeeDiario * 1.1);
            setSucess(true);

            setBmrDiario(bmrDiario);
            setTdeeDiario(tdeeDiario);
            setCalPerda(calPerda);
            setCalGanho(calGanho);
        }
    }
    return (
        <Container>
            <br></br>
            <br></br>
            {sucess ? (
                <Container>
                    <Col className="container center w-50 justify-content-center">
                        <Alert key="info" variant="info">
                            Sua <strong>taxa metabólica basal</strong> é de:{" "}
                            <strong>{bmrDiario}</strong> calorias.<br></br>
                            Baseado em suas atividades, seu{" "}
                            <strong>TDEE</strong> é de:{" "}
                            <strong>{tdeeDiario}</strong> calorias.<br></br>
                            Para <strong>perder peso</strong>, recomendamos
                            ingerir <strong>{calPerda}</strong> calorias.
                            <br></br>
                            Para <strong>ganhar peso</strong>, recomendamos
                            ingerir <strong>{calGanho}</strong> calorias.
                        </Alert>
                        <Alert key="warning" variant="warning">
                            Este teste não substitui o atendimento de um
                            profissional da saúde.
                        </Alert>
                    </Col>
                </Container>
            ) : (
                ""
            )}
            <Col className="container center justify-content-center">
                <Form onSubmit={handleTDEE}>
                    <Form.Label>
                        Calcule sua taxa metabólica basal abaixo:
                    </Form.Label>
                    <Form.Select onChange={(res) => setSexo(res.target.value)}>
                        <option>Sexo:</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </Form.Select>
                    <Form.Group>
                        <Form.Control
                            className="mt-1"
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
                        <Form.Control
                            className="mt-1"
                            type="number"
                            placeholder="Insira seu idade:"
                            onChange={(res) => setIdade(res.target.value)}
                        />
                        <Form.Select
                            onChange={(res) => setNivel(res.target.value)}
                            className="mt-1"
                        >
                            Sexo
                            <option>Nível de atividade:</option>
                            <option value="1.2">Sedentário</option>
                            <option value="1.375">Pouco ativo</option>
                            <option value="1.55">Moderadamente ativo</option>
                            <option value="1.725">Muito ativo</option>
                            <option value="1.9">Extremamente ativo</option>
                        </Form.Select>
                        <Button
                            className="mt-1 container w-50 float-end"
                            variant="primary"
                            type="submit"
                        >
                            Calcular
                        </Button>
                        <Button
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
export default Tdee;
