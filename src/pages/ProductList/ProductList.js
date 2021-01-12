import React, { Component } from "react";
import { Table } from "reactstrap";
import { ButtonLink } from "../Login/LoginElements";
import {userEmail} from '../Login/Login'
import { LoginText} from './ProductListElement'
import swal from 'sweetalert';

export default class ProductList extends Component {
  
  constructor(){
    super();
    this.state={
      search:""
    }
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
  }


  render() {
    let filteredProducts = this.props.products.filter(
      (product) => {
        return product.name.toLowerCase().indexOf(this.state.search) !==-1
      }
    );
    
    var button;
    var girdi;
    var GirisYap;
    var Kaydol;

    if (userEmail!=="") {
      button = <ButtonLink to="/cart" >Satın Al</ButtonLink>
    } else {
      button = <ButtonLink onClick={()=>swal("Önce Giriş Yapmalısınız!")}>Satın Al</ButtonLink>
    }        
    if(userEmail!==""){
      girdi = <LoginText >
      Hoşgeldin! -{userEmail}
      </LoginText>
    } else {
      GirisYap=<LoginText to="/login">Giriş Yap</LoginText>
      Kaydol=<LoginText to="/registry">Kaydol</LoginText>
    }
    
    return (
      
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <text class="navbar-brand">{girdi}</text>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ">
    <li class="nav-item">
        <text class="nav-link">{GirisYap}</text>
      </li>
      <li class="nav-item">
        <text class="nav-link">{Kaydol}</text>
      </li>
    </ul>
    <form class="d-inline-flex p-2 bd-highlight">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
    value={this.state.search}
    onChange={this.updateSearch.bind(this)}/>
  </form>
  </div>
</nav>
        <h3>
          {this.props.title} - {this.props.currentCategory}
        </h3>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürünler</th>
              <th>Fiyat</th>
              <th>Stok Durumu</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.productID}>
                <th scope="row">{product.productID}</th>
                <td>{product.name}</td>
                <td> {product.unitPrice} </td>
                <td> {product.unitsInStock} </td>
                <td  onClick={() => this.props.addToCart(product)}>
                    {button}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  }
  
