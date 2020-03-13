import styled from 'styled-components';

export const ExtraInfoCardStyled = styled.div`
	box-sizing: border-box;
	border: 1px solid ${props => props.theme.colors.bcgGray}; 
	border-radius: 4px;
	background-color: ${props => props.theme.colors.white}; 
    padding: 8px;
    display: flex;
    align-items: center;
    height: 94px;
    margin-top: 8px;
    &:first-child {
        margin-top: 0px;
    }
`;


export const IconContainer = styled.div`
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 16px; */
    min-width: 72px;
`;


export const ValueStyled = styled.div`
    color: ${props => props.theme.colors.titleColor};	
    font-family: CircularStd;	
    font-size: 14px;	
    font-weight: 500;	
    line-height: 20px;
    margin-top: 5px;
`;

export const TitleStyled = styled.div`
    color: ${props => props.theme.colors.grey};
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 300;	
    line-height: 15px;
`;

export const VerticalLineStyled = styled.div`
    width: 2px;
    background: ${props => props.theme.colors.borderColor};
    min-height: 100%;
`
export const RightBlock = styled.div`
    margin: 0 24px;
    padding: 8px 0;
` 