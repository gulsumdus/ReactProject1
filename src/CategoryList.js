import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" }]
        
    }
  }


  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map(kategori => (
            <ListGroupItem onClick={() => this.props.changeCategory(kategori)} key={kategori.categoryId}>
              {kategori.categoryName}
            </ListGroupItem>
          ))}

        </ListGroup>

        <h4>{this.props.currentCategory}</h4>
      </div>
    )
  }
}

//map: dizinin her elemanını tek tek işler.
//Yeni bir dizi döndürür (ancak burada JSX render edildiği için bir bileşen listesi üretiliyor).
//React'te, her eleman için unique bir key (key) verilmesi önerilir (bu, performansı artırır).