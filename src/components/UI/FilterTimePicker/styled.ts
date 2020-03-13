import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  max-width: 384px;
  
`;


export const FilterTimePickerContainer = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    /* justify-content: space-between; */
    margin-bottom: 5px;
    position: relative;
    @media(max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .DayPickerInput input {
        width: 250px;
    }
`;


export const LabelFilterTimePicker = styled.div`
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
      font-size: 12px;
    }
`;


export const ErrorStyled = styled.div`
  color: ${props => props.theme.colors.coral};
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  align-self: center;
  text-align: right;
`;