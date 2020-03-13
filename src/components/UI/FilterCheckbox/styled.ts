import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  max-width: 384px;
  @media(max-width: 768px) {
    max-width: 100%;
  }
`;

export const FilterCheckboxStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%; 
    justify-content: space-between;
    margin-bottom: 12px;
`;
export const Title = styled.div`
  color: ${props => props.theme.colors.titleColor};
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
  font-weight: 500;
  line-height: 18px; 
  text-align: right; 
  margin-right: ${(props: {rtl: boolean})=> props.rtl ? '0px': '15px'};
  margin-left: ${(props: {rtl: boolean})=> props.rtl ? '15px': '0px'};
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media(max-width: 768px){
    font-size: 12px;
  }
`;

export const ErrorStyled = styled.div`
  color: ${props => props.theme.colors.coral};
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small13Fs};
`;

export const CheckboxContainer = styled.div`
  min-width: 250px;
  @media(max-width: 768px) {
    min-width: 100%;
  }

`;