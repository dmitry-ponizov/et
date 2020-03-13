import styled from 'styled-components';


export const Title = styled.div`
    color: ${props => props.theme.colors.titleColor};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.medium22Fs};	
    font-weight: bold;	
    line-height: 28px;
    margin-top: 15px;
`;

export const SearchContainer = styled.div`
   min-width: 372px;
`

export const TitleWithSearchStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`