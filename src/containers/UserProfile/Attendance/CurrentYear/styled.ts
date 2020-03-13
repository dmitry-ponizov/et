import styled from 'styled-components';

export const CurrentYearContainer = styled.div`
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.blueBtn};
    background-color: ${props => props.theme.colors.bcgBlue};
    display: flex;
    align-items: center;
    width: 154px;
    min-height: 40px;
    padding: 8px 12px;
    justify-content: space-between;
    /* margin-left: 16px; */
`;

export const YearStyled = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.colors.titleColor};
  width: 32px;
  user-select: none;
`;

export const Buttons = styled.div`
    display: flex;
    direction: ltr;
`;

export const Button = styled.div`
    cursor: pointer;
    &:nth-child(2) {
        margin-left: 8px;
    }
`;