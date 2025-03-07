import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge, NavLink, NavItem
} from 'reactstrap';
export default class CartSummary extends Component {
    renderSummary() {
        return(<UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                My Cart - {this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
                {this.props.cart.map(cartItem => (
                    <DropdownItem key={cartItem.product.id}>
                        <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
                        {cartItem.product.productName}
                        <Badge color="success">{cartItem.quantity}</Badge>
                    </DropdownItem>
                ))}


                <DropdownItem divider />
                <DropdownItem>
                    <Link to="cart">Go to Card</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        ); 
    }
    renderEmptyCart(){
        return(
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }
    render() {
        return <div>{this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}</div>// ürünleri sepete eklerken eğer bir şeye tıklanmadıysa gizler, eğer tıklanıra seilen sayısını gösterir.
        
    }
    }
