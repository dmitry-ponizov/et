import styled from "styled-components";

export const Title = styled.div`
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: 500;
    color: ${props => props.theme.colors.titleColor};
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    img {
        height: 8px;
        width: 12px;
        margin-left: 10px;
    }
`;