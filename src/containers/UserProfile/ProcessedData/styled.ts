import styled from "styled-components";

export const ProcessedDataStyled = styled.div`
    background: ${props => props.theme.colors.white};
    padding: 24px 40px;
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.btnBorder};
    width:100%;
    margin: 15px auto;
    position: relative;
`;


export const Title = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small16Fs};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.colors.grey2};
  text-transform: uppercase;
  user-select: none;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RightPanel = styled.div`
  display: flex;
  align-items: center;
`
export const DatePickerBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  color: #464754;	
  font-family: CircularStd;	
  font-size: 14px;	
  font-weight: 300;	
  line-height: 18px;
  padding: 0 8px;
`;

export const Dash = styled.div`
  margin: 0 8px;
`;

export const Bars = styled.div`
  display: flex;
  border-top:  1px solid #E4E9EE;
  margin-top: 10px;
  padding-top: 24px;
  padding-bottom: 30px;
`;