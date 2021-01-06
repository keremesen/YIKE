import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer id="home">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
              
                <HeroItems>
                
                    <HeroH1>TÜRKİYENİN EN KAPSAMLI ELEKTRONİK MAĞAZASI</HeroH1> 
                    <HeroP> EN UCUZ ÜRÜNLERE SAHİP OLABİLMEK İÇİN </HeroP>
                    <HeroBtn to="/products">Hemen Satın Al</HeroBtn>
                   
                    
                </HeroItems>
  
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
