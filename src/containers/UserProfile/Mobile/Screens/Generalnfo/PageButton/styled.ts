import styled from 'styled-components';

export const PageButtonStyled = styled.div`
    padding: 17px;
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small12Fs};
    font-weight: 500;
    color: ${props => props.theme.colors.titleColor};
    justify-content: space-between;
    display: flex;
    border-radius: 2px;
    box-shadow: 0 1px 0 0 ${props => props.theme.colors.borderColor};
    background-color: ${props => props.theme.colors.white};
    margin-top: 8px;
`;
