import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content:center; 
  flex-direction:column;
  width: 100%;
  height: 70vh;
  margin-bottom:67px;
  margin-top:50px;
  h2 {
    font-size: 32px;
  }

  button {
    background: green;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

export const StyledInput = styled.input`

  color: palevioletred;
  font-size: 1.25rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid gray;
  border-radius: 10px;
  display: block;
`;

export const ButtonLink = styled(Link)`
 display: inline-block;
  color: palevioletred;
  font-size: 1.25rem;
  margin: 1rem;
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