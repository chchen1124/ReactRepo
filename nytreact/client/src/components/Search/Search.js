import React, {Component} from "react";
import "./Search.css";
import axios from "axios";
import DeleteBtn from "../DeleteBtn";
import Button from "../Button";
import {FormBtn,TextArea,Input} from "../Form";
import {Col,Row,Container} from "../Grid";
import Jumbotron from "../Jumbotron";
import {List,ListItem} from "../List";
import Nav from "../Nav";
import Saved from "../Saved";

class Searcharticles extends Component {

  state = {

  };


render() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1 className="text-center">Search</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Topic: </label>
                        <Input
                            value={this.state.topic}
                            onChange={this.handleInputChange}
                            name="topic"
                            placeholder="Topic (required)"/>

                        <input type="submit" value="Search"/>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

};
export default Searcharticles;