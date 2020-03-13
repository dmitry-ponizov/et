import styled from "styled-components";

export const ButtonStyled = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.btnBorder};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.white};
    cursor: pointer;
    i {
        color:${props => props.theme.colors.subMenuColor};
        font-size: ${props => props.theme.fontSizes.small14Fs};
        margin: 0;
    }
    &:hover {
        border-color: rgba(34,36,38,.35);
    }
`;