import styled from 'styled-components';

export const Title = styled.div`
  font-family: CircularStd;
  font-size: 22px;
  font-weight: bold;
  color: #464754;
  margin-top: 16px;
`
export const SettingsContainer = styled.div`
  border-radius: 2px;
  border: solid 1px #e3e5e9;
  background-color: #ffffff;
  margin-top: 12px;
  padding: 24px 40px;
`

export const LangTitle = styled.div`
  font-family: CircularStd;
  font-size: 16px;
  font-weight: normal;
  color: #9191af;
  text-transform: uppercase;
`

export const LangDesc = styled.div`
  font-family: CircularStd;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.93;
  color: #464754;
  margin-top: 8px;
`
export const BtnStyled = styled.div`
  height: 36px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.blueBtn};
  padding: 8px 25px;
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs}; 
  font-weight: bold;
  line-height: 1.29;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  white-space: nowrap;
  max-width: 180px;
  margin-top: 10px;
`
