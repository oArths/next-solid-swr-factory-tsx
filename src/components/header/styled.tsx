'use client'
import Link from "next/link";
import styled from "styled-components";
import * as I from "react-icons/lu"

export const Header = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100vw;
height: 60px;
background-color: ${({theme}) =>theme.colors.primary};
`;
export const SpanBack = styled.span`
font-size: 20px;
font-weight: 600;
transition: all 0.3s ease;
color: ${({theme}) =>theme.colors.secondary};

`; 
export const Back = styled(I.LuChevronLeft )`
color: ${({theme}) =>theme.colors.secondary};
transition: all 0.3s ease;

`; 
export const Nav = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: none;
transition: all 0.3s ease;
&:hover > ${Back}, &:hover > ${SpanBack}{
    color: ${({theme}) => theme.colors.destac};

}
`; 