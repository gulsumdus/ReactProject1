import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Col, Container, Row } from 'reactstrap';// reactstrap paketini yükledik



export default class App extends Component {

  state={currentCategory:""}

  changeCategory = ctgry=> {                              //fonksiyonlar değişken gibi kullanılır
    this.setState({ currentCategory: ctgry.categoryName });
  };

  render() {
    let productInfo = { title: "Product List" }// Encapsulation
    let categoryInfo = { title: "Category List" }
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList info={productInfo} /> 
            </Col>
          </Row>
        </Container>
      </div>
    );

  }
}




