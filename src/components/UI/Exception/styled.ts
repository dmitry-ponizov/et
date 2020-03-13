import styled from "styled-components";

type ExceptionCode = {
    color: string | undefined
}

export const ExceptionStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 15px;
`;

export const Code = styled.div`
    color: ${(props: ExceptionCode) => props.color ? props.color : '#FF612D'};	
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: bold;	
    line-height: 15px;
    padding: 0 5px;
`;

export const Desc = styled.div`
  font-family: CircularStd;
  font-size: 12px;
  font-weight: normal;
  color: #464754;
  white-space: nowrap;
`