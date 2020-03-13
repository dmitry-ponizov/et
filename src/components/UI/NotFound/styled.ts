import styled from "styled-components";

export const NotFoundStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.large34Fs};
    font-weight: bold;
    color: ${props => props.theme.colors.titleColor};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`;

export const CodeStyled = styled.div`
    font-size: ${props => props.theme.fontSizes.large54Fs};
`;