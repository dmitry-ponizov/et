import styled from "styled-components";

export const PunchInTimeContainer = styled.div`
    display: flex;
    align-items: center;
`
export const Value = styled.div`
    color:  ${props => props.theme.colors.greyValue};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small14Fs};	
    font-weight: 300;	
    line-height: 18px;
    margin-left: 16px;
`