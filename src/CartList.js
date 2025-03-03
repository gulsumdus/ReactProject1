import React, { Component } from 'react'
import { Table } from "reactstrap"

export default class CartList extends Component {
    renderCart() {
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category Id</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

