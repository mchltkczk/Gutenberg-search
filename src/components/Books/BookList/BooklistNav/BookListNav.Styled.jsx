import styled from 'styled-components'

export const StyledNavBtn = styled.button`
    padding: 10px;
    margin: 5px;
    border: none;
    &:hover {
        cursor: pointer;
        background-color: darkgray;
        color: white;
    }
    &:active {
        cursor: pointer;
        color: inherit;
    }
`