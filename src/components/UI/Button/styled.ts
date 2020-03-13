import styled from 'styled-components';
import { ButtonStyledProps } from './types';

export const ButtonStyled = styled.div`
    border-radius: 4px;
    background-color: #08a5f0;
    color: ${(props: ButtonStyledProps)  => props.color};
    width: 100%;
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small14Fs};
    color: ${props => props.theme.colors.white};
    text-align: center;
    padding: 13px 0;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    line-height: 1.29;
    &:hover {
        background: ${(props: ButtonStyledProps) => props.hoverBackground}
    }
`;