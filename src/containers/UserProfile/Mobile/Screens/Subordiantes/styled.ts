import styled from 'styled-components';

export const SubordiantesStyled = styled.div`
    background: ${props => props.theme.colors.white};
    height: 100%;
`
export const SubordinatesList = styled.div`
    padding: 16px;
`

export const SubordinatesDisplaing = styled.div`
    background: ${props => props.theme.colors.contentColor};
    color: ${props => props.theme.colors.grey};
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small12Fs};
    font-weight: normal;
    letter-spacing: -0.26px;
    text-align: center;
    padding: 10px;
`;
