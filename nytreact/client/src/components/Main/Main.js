import React, {Component} from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import Searcharticles from "../Search"
import Saved from "../Saved"
import "./Main.css";

class Main extends Component {

  render() {
    return (
      <div>
        <Searcharticles/>
        <Saved/>
      </div>
    );
  }

};

export default Main;