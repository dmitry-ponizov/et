import styled from "styled-components";

export const ContainerStyled = styled.div`
	box-sizing: border-box;
	border: 1px solid ${props => props.theme.colors.bcgGray}; 
	border-radius: 4px;
	background-color: ${props => props.theme.colors.white}; 
    padding: 8px;
    display: flex;
    align-items: center;
    margin-top: 8px;
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 72px;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    padding-bottom: 2px;
`
export const RightBlock = styled.div`
    padding: 0 12px; 
`
export const TitleStyled = styled.div`
   color: ${props => props.theme.colors.grey};
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 300;	
    line-height: 15px;
`
export const ValueStyled = styled.div`
    color: ${props => props.theme.colors.titleColor};	
    font-family: CircularStd;	
    font-size: 14px;	
    font-weight: 500;	
    line-height: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    &:first-child {
        margin-top: 0px;
    }
    span {
        color: #08a5f0;
        margin: 0 8px;
        font-size: 16px;
    }
`

export const BalancesStyled = styled.div`
    display: flex;
    padding-top: 12px;
`
export const LeftBlock = styled.div`
    padding: 0 12px 5px 12px;
`
export const RightBalancesBlock = styled.div`
    padding-left: 12px;
    padding-bottom: 5px;
`