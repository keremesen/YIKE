import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div style={{ marginBottom: 250 }}>
        <h3>{this.props.title}</h3>

        <ListGroup style={{ width: 225, cursor: "pointer" }}>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={
                category.name === this.props.currentCategory ? true : false
              }
              key={category.categoryID}
              onClick={() => this.props.changeCategory(category)}
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
