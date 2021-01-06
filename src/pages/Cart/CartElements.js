import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CartContainer = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
flex-direction:column;
width:100%;
height:100vh;
margin-top:100px;
`
export const ButtonLink = styled(Link)`
 display: inline-block;
  color: palevioletred;
  font-size: 1.25rem;
  margin-top:20px;
  margin-right:20px;
  margin-left:20px;
  padding: 0.25rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 10px;
  text-decoration:none;
  max-width:200px;

&:hover {
    background:#DB1858;
    transition:0.2s ease-out;
    cursor:pointer;
    color:#000;
    
}

`

export const ButtonLink2 = styled(Link)`
 display: inline-block;
  color: gray;
  font-size: 1.25rem;
  margin-top:20px;
  margin-right:20px;
  margin-left:20px;
  padding: 0.25rem 1rem;
  border: 2px solid gray;
  border-radius: 10px;
  text-decoration:none;
  max-width:200px;

&:hover {
    background:#DB1858;
    transition:0.2s ease-out;
    cursor:pointer;
    color:#000;
    
}
`
