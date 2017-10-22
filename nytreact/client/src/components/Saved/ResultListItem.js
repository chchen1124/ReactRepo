import React from "react";
import { Col, Row, Container } from "../Grid";

// ResultListItem renders a bootstrap list item containing data from the result api call
export const ResultListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>ArticleDate: {props.date}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.url}>Go to Article!</a>
        </Col>
      </Row>
    </Container>
  </li>
);