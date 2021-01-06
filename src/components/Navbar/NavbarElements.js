import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'
import { FaUserAstronaut } from 'react-icons/fa'

export const Nav = styled.nav`
background:black ;
height: 80px;
display:flex;
justify-content: center;
font-weight: 700;
z-index: 10000;
position: fixed;
top: 0px;
width: 100%;
`
export const NavLink = styled(Link)`
color: #fff;
font-size:2rem;
display:flex;
align-items:center;
cursor:pointer;
text-decoration:none;

@media screen and (max-width: 400px){
    position:absolute;
    top:10px;
    left:25px;

}
`
export const NavIcon = styled.div`
display:block;
position:absolute;
top:0;
right:0;
cursor:pointer;
color:#fff;

p{
    transform:translate(-200%,140%);
    font-weight:bold;
}
`

export const Bars = styled(FaUserAstronaut)`
font-size:2rem;
transform:translate(-50%,-50%);
right:0;
`