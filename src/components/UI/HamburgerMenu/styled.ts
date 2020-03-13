import styled from "styled-components";

export const ButtonStyled = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    height: 60px;
    width: 60px;
    align-items: center;
    @media(min-width: 1366px) {
        display: none;
    }
    .container {
        display: inline-block;
        cursor: pointer;
    }

    .bar1, .bar2, .bar3 {
        width: 25px;
        height: 2px;
        background-color: #333;
        margin: 5px 0;
        transition: 0.4s;
    }

    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
    }

    .change .bar2 {opacity: 0;}

    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
`;