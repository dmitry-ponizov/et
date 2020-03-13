import styled from 'styled-components';

export const BasicInfoStyled = styled.div`
    background: ${props => props.theme.colors.white};
	border: 1px solid #E3E5E9;
    min-height: 232px;
    display: flex;
    flex: 2;
    padding: 32px 40px;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Title = styled.div`
    font-family: CircularStd;
    font-size: 16px;
    text-align: center;
    color: ${props => props.theme.colors.grey2};
    text-transform: uppercase;
`
export const Field = styled.div`
    display: flex;
    margin-top: 24px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    .EditBasicInfo {
        min-width: 546px;
    }
`


export const Label = styled.div`
    font-family: CircularStd;
    font-size: 14px;
    text-align: right;
    color: #333333;
    margin:0 16px;
`

export const FormStyled = styled.div`
    min-width: 300px;
    justify-content: space-between;
    margin-top: 10px;
`


export const ValueStyled = styled.div`
   color: #464754;	
   font-family: CircularStd;	
   font-size: 16px;	
   font-weight: 300;	
   line-height: 20px; 
`