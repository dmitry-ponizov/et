import styled from "styled-components";

export const AttendanceContainer = styled.div`
    background: ${props => props.theme.colors.white};
    padding: 24px 40px;
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.btnBorder};
    width:100%;
    margin: 15px auto;
    min-height: 440px;
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
  justify-content: space-between;
  min-width: 455px;
`

export const ResetButton = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.colors.blueBtn};
  padding: 0 16px;
  cursor: pointer;
  user-select: none;
`;

export const CalendarContainer = styled.div`
  margin-top: 32px;
  display: flex;
  .errorCodes {
    flex: 1;
  }
`;

