import React from 'react';
import { Col, Row, UncontrolledCarousel } from 'reactstrap';
import ImgBg4 from '../../images/2.jpg'
import ImgBg5 from '../../images/3.png'
import ImgBg6 from '../../images/4.jpg'
import {CarouselBtn, CarouselContainer, CarouselH1} from './CarouselElements'

const items = [
  {
    src: ImgBg4 ,
    altText: 'Slide 1',
    caption: '%20 ye varan indirimler',
    header: 'Telefonlarda',
    key: '1'
    
  },
  {
    src: ImgBg5 , 
    altText: 'Slide 2',
    caption: '%25 e varan indirimler',
    header: 'Laptoplarda',
    key: '2'
  },
  {
    src: ImgBg6 ,
    altText: 'Slide 3',
    caption: '%30 a varan indirimler',
    header: 'Bluetooth Kulaklıklarda',
    key: '3'
  }
];

const Example = () => (
  <CarouselContainer>
    <Row id="about" >
    <Col md="8" style={{backgroundColor:'black'}}>
      
      <UncontrolledCarousel items={items} />
     
    </Col>
    <Col style={{backgroundColor:'black', color:'white'}}>
    <CarouselH1>MUHTEŞEM YILBAŞI İNDİRİMLERİMİZDEN YARARLANABİLMEK İÇİN SON GÜN 31 ARALIK</CarouselH1>
    <CarouselBtn to='/products'>Satın Al</CarouselBtn>
    </Col>
  </Row>
  </CarouselContainer>
  
);
export default Example;