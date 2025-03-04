import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Col, Container, Row } from 'reactstrap';// reactstrap paketini yükledik
import alertify from "alertifyjs"
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';



export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] }

  changeCategory = ctgry => {                              //fonksiyonlar değişken gibi kullanılır
    this.setState({ currentCategory: ctgry.categoryName });
    console.log(ctgry);
    this.getProducts(ctgry.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)  //api'ye bağlanıp http://localhost:3000/products/categoryId?"ye göreveri çekme
      .then(response => response.json()) //gelen response'u json formatına döndür
      .then(data => this.setState({ products: data })); // daha sonra, json formatlı datalar ile products array deki verilerle yer değiştiriyoruz
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id)
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    console.log("Updated Cart:", this.state.cart);
    alertify.success(product.productName + "added to cart!", 2);//2 sn kalır
  }

  componentDidMount() {
    this.getProducts();
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + "removed from cart!", 2);//2 sn kalır
  }

  render() {
    let productInfo = { title: "Product List" }// Encapsulation
    let categoryInfo = { title: "Category List" }
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route path="/" element={<ProductList info={productInfo} currentCategory={this.state.currentCategory} products={this.state.products} addToCart={this.addToCart} />} />
                <Route path="/cart" element={<CartList cart={this.state.cart} removeFromCart={this.removeFromCart} />} />
                <Route path="/form1" Component={FormDemo1} />
                <Route path="/form2" Component={FormDemo2} />

              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );

  }
}


//<switch>: route'ları gezmeye işe yarar.
//render: propları router ile ilgili yere gönderir.
//{...props}: ile propların kopyası alınır.