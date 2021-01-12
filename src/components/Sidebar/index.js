import React from 'react';
import {
  SidebarContainer,
  Icon,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';
import {Link} from 'react-scroll'


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
      </Icon>
      <SidebarMenu>
        <SidebarLink><Link  to="home" spy={true}>Ana Sayfa</Link></SidebarLink>
        <SidebarLink><Link  to="about" spy={true}>İndirimdekiler</Link></SidebarLink>
        <SidebarLink><Link to="products" spy={true}>Ürünlerimiz</Link></SidebarLink>
        <SidebarLink><Link to="footer" spy={true}>İletişim</Link></SidebarLink>
      </SidebarMenu>
      
    </SidebarContainer>
  );
};

export default Sidebar;
