import styled from 'styled-components';

export const BirthCardStyled = styled.div`
    display: flex;
    padding: 12px 0;
    border-top: solid 2px ${props => props.theme.colors.contentColor};
    direction: ${(props: {rtl: boolean}) => props.rtl ? 'rtl' : 'ltr'};
    min-height: 88px;
`
export const AvatarBlock = styled.div`
    width: 56px;
    height: 56px;
`
export const RightBlock = styled.div`
    padding: 0 16px;
`
export const FullName = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small16Fs};
  font-weight: bold;
  color: ${props => props.theme.colors.titleColor};
  margin-top: 5px;
`

export const FullArabicName = styled.div`
    color: ${props => props.theme.colors.titleColor};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: bold;	
    line-height: 20px;
    margin-top: 5px;
    min-height: 20px;
`

export const TodayStyled = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small10Fs};
  font-weight: normal;
  letter-spacing: -0.21px;
  color: ${props => props.theme.colors.red};
  padding: 0 8px;
`; 
export const DateStyled = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small10Fs};
  font-weight: normal;
  letter-spacing: -0.21px;
  color: #9191af;
  padding: 0 8px;
`; 

export const BirthHeader = styled.div`
    display: flex;
    align-items: center;
`