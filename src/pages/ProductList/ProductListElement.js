import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const LoginText =styled(Link) `
color:green;
text-decoration:none;
margin-right:20px;

&:hover{
    transition:0.2s ease-out;
    cursor:pointer;
    color:#000;
    
}
`