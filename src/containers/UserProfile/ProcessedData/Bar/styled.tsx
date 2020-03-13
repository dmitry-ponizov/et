import styled from "styled-components";

type BarType = {
    color: string;
    theme: any;
}

export const BarStyled = styled.div`
    padding: 16px;
    border: 1px solid #d5d5e5;
    border-top:2px solid ${props => props.color};
    margin-right: 16px;
    flex:1;

`

export const Title = styled.div`
    color: #464754;
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 500;	
    line-height: 15px;
`

export const Value = styled.div`
  	color: ${props => props.color};	
    font-family: CircularStd;	
    font-size: 40px;	
    font-weight: 500;	
    line-height: 51px;
`