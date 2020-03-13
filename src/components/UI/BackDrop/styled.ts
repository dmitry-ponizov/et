import styled from "styled-components";
import { BackDropStyled } from './types';

export const BackdropStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background: ${(props: BackDropStyled) => props.transparent ? 'transparent': 'rgba(0,0,0,0.4)'};
`;