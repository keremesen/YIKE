import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LogContainer = styled.div`
display:flex;
width:900px;
background-color: lightgray;
justify-content:flex-end
`

export const LoginText =styled(Link) `
color:green;
text-decoration:none;
margin-right:20px;

&:hover{
    color:white;
}
`