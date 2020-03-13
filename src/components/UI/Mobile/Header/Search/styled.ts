import styled from "styled-components";

export const SearchStyled = styled.div`
    /* margin-top: 8px; */
    /* background: #08a5f0; */
   
`;
export const InputBlock = styled.div`
    display: flex;
`
export const Section = styled.div`
    border-radius: 4px;
    display: flex;
    align-items: center;
    background: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid #E3E5E9;
`

export const InputStyled = styled.input`
    border: 1px solid transparent;
    font-family: CircularStd;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.38;
    letter-spacing: normal;
    height: 36px;
    min-width: 250px;
    &:focus {
        outline: none;
    }
`


export const IconStyled = styled.div`
   padding: 8px 8px 8px 12px;
    svg {
        g {
            stroke: #BDC1C9;
        }
    }
`

export const IconClose = styled.div`
       padding: 8px 12px 8px 8px;
`;