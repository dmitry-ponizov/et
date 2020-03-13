import styled from 'styled-components';

export const RequestDetailsStyled = styled.div`
     border-radius: 4px;
    border-top: 2px solid ${props => props.theme.colors.blueBtn};
    background: #fff;
    border-right: 1px solid #e4e9ee;
    border-left: 1px solid #e4e9ee;
    border-bottom: 1px solid #e4e9ee;
    margin-top: 8px;
    align-items: center;
`;

export const RequestDetailsContainer = styled.div`
    padding: 16px;
    flex: 1;
`


export const ApplyBtn = styled.div`
   border-radius: 2px;
   background-color: ${props => props.theme.colors.blueBtn};
   padding: 13px;
   font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.medium18Fs};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    margin:0 10px;
  }
  svg {

    path {
      fill:${props => props.theme.colors.white};
    }
  }
`; 


export const ButtonSection = styled.div`
  padding: 16px;
`

export const RequestDetailsSection = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
`