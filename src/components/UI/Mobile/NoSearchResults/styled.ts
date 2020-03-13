import styled from 'styled-components';

export const NoSearchResultsStyled = styled.div`
    display: flex;
    min-height: 60vh;
    justify-content: center;
    align-items: center;
`
export const IconBlock = styled.div`
    display: flex;
    height: 125px;
    width: 125px;
    border-radius: 50%;
    background: ${props => props.theme.colors.bcgGray};
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    svg {
        width: 34px;
        height: 34px;
        g {
            stroke: ${props => props.theme.colors.iconGrey};
        }
    }
`
export const Title = styled.div`
    color: ${props => props.theme.colors.titleColor};	
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.medium18Fs};
    font-weight: 500;	
    letter-spacing: -0.43px;	
    line-height: 23px;	
    text-align: center;
    margin-top: 16px;
`
export const Description = styled.div`
   	color: ${props => props.theme.colors.grey};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small12Fs};	
    font-weight: 500;	
    letter-spacing: -0.29px;	
    line-height: 15px;	
    text-align: center;
    margin-top: 5px;
`