import styled from "styled-components";

export const InfoBlockStyled = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 16px 24px;
    border-top: 2px solid ${props => props.color};
    border-radius: 2px;
    background: ${props => props.theme.colors.white};
    min-width: 354px;
    border-right: 1px solid #E3E5E9;
    border-left: 1px solid #E3E5E9;
    border-bottom: 1px solid #E3E5E9;
    max-height: 120px;
    margin-top: 16px;
    margin-right: 16px;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 8px 80px 0 rgba(0, 0, 0, 0.1);
        border-right: 1px solid transparent;
        border-left: 1px solid transparent;
        border-bottom: 1px solid transparent;
    }
`;

export const Title = styled.div`
    color: #464754;	
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 500;	
    line-height: 15px;
`

export const Value = styled.div`
    font-family: CircularStd;	
    font-size: 40px;	
    font-weight: 500;
    line-height: 51px;
    color: ${props => props.color};
`