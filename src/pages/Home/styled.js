import styled from 'styled-components';


export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p{
        color: darkgray;
        font-family: sans-serif;
        margin-bottom: -1px;
    }

`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 1.5rem;
    padding: 0 .5rem;
    width: 50%;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button`
    height: 1.6rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    cursor: pointer;
    font-family: sans-serif;

    &:hover{
        color: #000;
        background-color: #fff ;
        border: 2px solid #000;
    }
    &:active{
        font-size: 13px;
    }

`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`

