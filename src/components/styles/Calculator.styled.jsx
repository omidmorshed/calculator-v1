import styled from 'styled-components'

export const StyledCalculator = styled.div`
    width:320px;
    margin:100px auto;
`

export const StyledAnswer = styled.input`
    background-color: #e2e2e2;
    padding: 10px;
    font-size: 35px;
    width: 295px;
    height: 45px;
    text-align: right;
    border: 3px solid #333;
`
export const StyledButton = styled.input`
    background: #333;
    height: 80px;
    width: 80px;
    color: white;
    font-size: 30px;
    border: 1px solid black;

    &:active{
        transform: scale(0.99);
    }
    &:hover{
        opacity: 0.8;
    }

    &.last-button{
    width: 160px;
    background-color: green;
    }

    &.clear{
        background-color: red;
    }
`