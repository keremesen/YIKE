import styled from 'styled-components'
import {Link } from 'react-router-dom'

export const CarouselBtn= styled(Link)`
font-size: 1.4rem;
padding: 1rem 4rem;
background: #e31837;
color:#fff;
transition:0.2s ease-in-out;
margin-left:7rem;
text-decoration:none;

&:hover {
    background:#e52f4b;
    transition:0.2s ease-out;
    cursor:pointer;
    color:#000;
}
`

export const CarouselH1 = styled.h1`
justify-content:center,
align-items:center;
margin-top:3rem;
margin-bottom:9rem;
`
export const CarouselContainer = styled.div`
width:98.1vw;
background-position: center;
background-size: cover;
`