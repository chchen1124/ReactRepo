import React, {Component} from "react";
import "./Saved.css";
import { Col, Row, Container } from "../Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron";
import {Input} from "../Form";
import {ResultList,ResultListItem} from "../Saved";
import axios from "axios";

class Saved extends Component {

  state = {
    newArticles: [],
    title: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    console.log("AJAX RETURN DATA=========", this.state)
    this.scrapeArticles();
  };

  scrapeArticles = () => {

    var key = "49aa8d89e7ce4b03940699b7e364e50d"
    var url = "https:api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key;

    axios.get(url)
    .then(res => {
      console.log("RES===", res)
      this.setState({
        newArticles: res.data.response.docs,
        title: "",
        date:"",
        url:""
        // title: this.newArticles[0].headline.main
      })
    })
  };


render() {
    console.log("AJAX RETURN DATA=========", this.state)
    let articles = this.state.newArticles;
  return (
    <div>
      <ul>
        <Container>
          {articles.map( (article, index) =>  <h3 key={index}>  {article.headline.main} </h3> ) }
        </Container>
      </ul>
    </div>
  );
}


};
export default Saved;