import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
  InputGroup,
} from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(null);
  const [theme] = useThemeHook();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    const firstname = form.firstName.value;
    const lastname = form.lastName.value;
    const email = form.email.value;

    if (username && password && firstname && lastname && email && number) {
      setLoading(true);
      console.log("call api here");
      console.log(username, password, firstname, lastname, email, number);
    }
  };
  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mt-5">
        <Col
          xs={11}
          sm={10}
          md={8}
          lg={4}
          className={`p-4 rounded ${
            theme ? "text-light bg-dark" : "text-black bg-light"
          }`}
        >
          <h1
            className={`text-center border-bottom pb-3 ${
              theme ? "text-dark-primary" : "text-light-primary"
            }`}
          >
            Бүртгүүлэх
          </h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Овог</Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Нэр</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Цахим хаяг</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Хэрэглэгчийн нэр</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                minLength={3}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Утасны дугаар</Form.Label>
              <PhoneInput
                country={"mn"}
                value={number}
                onChange={(phone) => setNumber(phone)}
                className="text-dark"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Нууц үг</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                minLength={6}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              className={`${
                theme ? "bg-dark-primary text-black" : "bg-light-primary"
              } m-auto d-block`}
              disabled={loading}
              style={{ border: 0 }}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  &nbsp;Түр хүлээнэ үү...
                </>
              ) : (
                "Continue"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
