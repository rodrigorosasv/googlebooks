import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function PageNotFound() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Sorry, we cannot found this page</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
