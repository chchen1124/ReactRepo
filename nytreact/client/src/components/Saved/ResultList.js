import React from "react";
import { Col, Row, Container } from "../Grid";

// RecipeList renders a bootstrap list item
export const ResultList = props => <ul className="list-group">{props.children}</ul>;