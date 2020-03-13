import styled from "styled-components";

type ErrorStyled = {
  right: string;
}

export const FilterInputStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%; 
    justify-content: space-between;
    margin-bottom: 12px;
    max-width: 384px;
    position: relative;
    div {
      @media(max-width: 768px) {
          width: 100%;
        }
    }
    .ticketIdInput{
        width: 250px;
        height: 32px;
        font-family: CircularStd;
        font-size: ${props => props.theme.fontSizes.small14Fs};
        line-height: 18px; 
        @media(max-width: 768px) {
          width: 100%;
        }
    }
    @media(max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
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
  @media(max-width: 768px) {
    justify-content: flex-start;
    padding-bottom: 5px;
  }
`;

export const ErrorStyled = styled.div`
  position: absolute;
  right: ${(props: ErrorStyled) => props.right};
  bottom: 8px;
  color: ${props => props.theme.colors.coral};
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
`;