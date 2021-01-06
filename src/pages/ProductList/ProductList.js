import React, { Component } from "react";
import { Table } from "reactstrap";
import { ButtonLink } from "../Login/LoginElements";
import {userEmail} from '../Login/Login'
import {LogContainer, LoginText} from './ProductListElement'
import {DropdownMenu,  DropdownItem, UncontrolledDropdown,  DropdownToggle,} from 'reactstrap';
import fire from '../../config/fire'

export default class ProductList extends Component {
  
  signout(){
    fire.auth().signOut().then((u) => {
      userEmail=" ";
      }).catch((err) => {
          alert(err)
      });
      
}

  render() {
    var button;
    var girdi;
    var GirisYap;
    var Kaydol;

    if (userEmail!=="") {
      button = <ButtonLink to="/cart" >Satın Al</ButtonLink>
    } else {
      button = <ButtonLink onClick={()=>alert("ilk önce giris yapmaniz gerekmektedir")}>Satın Al</ButtonLink>
    }
    if(userEmail!==""){
      girdi = <DropdownToggle caret  style={{backgroundColor:"green"}}>
      Hoşgeldin! -{userEmail}
      </DropdownToggle>
    } else {
      GirisYap=<LoginText to="/login">Giriş Yap</LoginText>
      Kaydol=<LoginText to="/registry">Kaydol</LoginText>
    }
    
    return (
      <div>
        <LogContainer>
        {GirisYap}
        {Kaydol}
          <UncontrolledDropdown >
              {girdi}
              <DropdownMenu right>
                <DropdownItem>
                  Ayarlar
                </DropdownItem>
                <DropdownItem>
                 Güvenlik
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.signout}>
                  Çıkış Yap
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </LogContainer>
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
            {this.props.products.map((product) => (
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
  
