import styled from 'styled-components';
import  { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
max-width: 991px;
margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    a{
        text-decoration: none;
    }
`

export const LisItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
    cursor: pointer;
    font-family: sans-serif;
    &:hover{
        color: #000;
        background-color: #fff;
        box-shadow:0px 0px 0px 2px black inset;
    }
    &:active{
        box-shadow:0px 0px 0px 1px black inset;
    }
    
`
export const LinkHome = styled(Link)`
    display:block;
    width: 4erm;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;

`
