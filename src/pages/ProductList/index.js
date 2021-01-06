import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

export var itemName = "";
export var itemPrice = "";

export default class Products extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: "",
  };
  componentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.name });
    this.getProducts(category.categoryID);
  };

  getProducts = (categoryID) => {
    let url = "http://localhost:3000/products";
    if (categoryID) {
      url += "?categoryID=" + categoryID;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    itemName = product.name;
    itemPrice = product.unitPrice;
  };
  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <Container>
          <Row>
            <Col xs="3">
              <CategoryList
                title="Kategoriler"
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
              />
            </Col>

            <Col xs="9">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                title="Ürün Listesi"
                currentCategory={this.state.currentCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
