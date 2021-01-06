import React, { Component } from 'react'
import { CartContainer } from './CartElements'
import {itemPrice, itemName} from '../ProductList/index'
import {ButtonLink, ButtonLink2} from './CartElements'
import {GlobalStlye} from '../../globalStyles'
import { Col, Row,  Form, FormGroup, Label, Input } from 'reactstrap'


export default class Cart extends Component {
    render() {
        return (
            <CartContainer>
                <GlobalStlye/>
                <h1>SATIN AL</h1>
                <h3>{itemName} </h3>
                <h5>{itemPrice} TL</h5>
                <Form>
      <Row form>
        <Col>
          <FormGroup>
            <Label >Kart No</Label>
            <Input  placeholder="1234-1234-1234-1234" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label >Kart Üzerindeki İsim</Label>
            <Input  placeholder="İSİM SOYİSİM" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label>CVC2</Label>
        <Input/>
      </FormGroup>
      <FormGroup>
        <Label>Adres</Label>
        <Input/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label >İl</Label>
            <Input/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label >İlçe</Label>
            <Input/>
          </FormGroup>
        </Col>
        <Col md={2}>
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>3D Secure Kullanmak İstiyorum</Label>
      </FormGroup>
    </Form>
                
                <div>
                <ButtonLink>Satın Al</ButtonLink>
                <ButtonLink2 to="/products">Vazgeç</ButtonLink2>
                </div>
               
            </CartContainer>

            
        )
    }
}
