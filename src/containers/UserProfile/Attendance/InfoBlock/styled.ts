import styled from "styled-components";

export const InfoBlocks = styled.div`
  display: flex;
  background: #f1f3f8;
  padding: 9px 10px;
  margin-top: 10px;
`;

export const InfoBlockStyled = styled.div`
  flex: 2;
` 

export const InfoTitle = styled.div`
  font-family: CircularStd;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #9191af;
  text-transform: uppercase;
  user-select: none;
` 
export const InfoValue = styled.div`
 font-family: CircularStd;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #464754;
  user-select: none;
` 

export const RightPanel = styled.div`
  display: flex;
  min-width: 270px;
  justify-content: space-between;
  align-items: center;
`

export const Duration = styled.div`
  color: ${(props: { active: boolean}) => props.active ? '#08A5F0' : '#9191AF'};
  font-family: CircularStd;	
  font-size: 13px;	
  font-weight: ${(props: { active: boolean}) => props.active ? 600 : 300};
  letter-spacing: 0.09px;	
  line-height: 16px;	
  cursor: pointer;
`