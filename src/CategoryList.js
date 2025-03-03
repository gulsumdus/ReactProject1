import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []  // empty array { id: 1, categoryName: "Beverages" }, { id: 2, categoryName: "Condiments" }


    }
  }
  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
    fetch("http://localhost:3000/categories")  //api'ye bağlanıp veri çekme
      .then(response => response.json()) //gelen response'u json formatına döndür
      .then(data => this.setState({ categories: data })); // daha sonra, json formatlı datalar ile categories array deki verilerle yer değiştiriyoruz
  }


  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map(kategori => (
            <ListGroupItem
             active={kategori.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(kategori)}
              key={kategori.id}>
              {kategori.categoryName}
            </ListGroupItem>
          ))}

        </ListGroup>

        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}

//map: dizinin her elemanını tek tek işler.map ARRAY FUNCTION'dır yani ARRAY'ler ile çalışır!!!
//Yeni bir dizi döndürür (ancak burada JSX render edildiği için bir bileşen listesi üretiliyor).
//React'te, her eleman için unique bir key (key) verilmesi önerilir (bu, performansı artırır).