import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units in Stock</th>
            </tr>
          </thead>
          <tbody>

            {this.props.products.map(urunler => (   //props kullanıyoruz çünkü data'yı app'de çektik ve oradaki array olan producttan gelir!!!!
              <tr key={urunler.id}>
                <th scope="row">{urunler.id}</th>
                <td>{urunler.productName}</td>
                <td> {urunler.quantityPerUnit}</td>
                <td>{urunler.unitPrice}</td>
                <td>{urunler.unitsInStock}</td>
                <td><Button color="info" onClick={()=>this.props.addToCart(urunler)}>add</Button></td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>

    )
  }
}
