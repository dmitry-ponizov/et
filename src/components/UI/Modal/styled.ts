import styled from "styled-components";
import { ModalStyledProps } from './types';

export const ModalStyled = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 90%;
    padding: 30px;
    left: 5%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    transform: ${(props:ModalStyledProps) => props.show ? 'translateY(0)' : 'translateY:(-100vh)' };
    display: ${(props:ModalStyledProps) => props.show ? 'block' : 'none'};
    border: solid 1px #e4e9ee;
    border-radius: 3px;
    @media (min-width: 600px) {
        width: 400px;
        left: calc(50% - 250px);
    }
`;



