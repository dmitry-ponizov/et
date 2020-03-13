import styled from 'styled-components';

type SelectedDayType = {
    isSunday: boolean;
    rtl: boolean;
}

export const SelectedDateStyled = styled.div`
    position: absolute;
    background: #fff;
    right: ${(props: SelectedDayType) => props.isSunday ? '183px' : '-265px'};
    ${(props: SelectedDayType) => props.rtl && {
        right: '-265px'
    }};
    z-index: 2;
    top: -64px;
    width: 250px;
    box-shadow: 0 8px 80px 0 rgba(0, 0, 0, 0.1);
    padding: 24px;
`;
export const Triangle = styled.div`
  width: 0; 
  height: 0; 
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent; 

  ${(props: SelectedDayType) => props.isSunday ? {
      borderLeft: `20px solid #fff`,
      right: '-20px'
  } : {
      borderRight: `20px solid #fff`,
      left: '-20px'
  }};

  ${(props: SelectedDayType) => props.rtl && {
        left: '-20px',
        borderLeft: 'none',
        borderRight: `20px solid #fff`,
        right: 'auto'
  }};
  
  position: absolute;
  top: 54px;
`;

export const LeavesIcon = styled.div`
    background: ${props => props.theme.colors.orangeStr};
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const AbsenceIcon = styled.div`
    background: ${props => props.theme.colors.darkOrange};
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const ExceptionIcon = styled.div`
    background: ${props => props.theme.colors.purple};
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const Title = styled.div`
  font-family: CircularStd;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  color: #9191af;
  text-transform: uppercase;
  text-align: ${(props: { rtl: boolean}) => props.rtl ? 'right' : 'left'};
  padding-bottom: 3px;
`

export const DateInfo = styled.div`
  font-family: CircularStd;
  font-size: 16px;
  font-weight: 500;
  text-align: ${(props: { rtl: boolean}) => props.rtl ? 'right' : 'left'};
  color: #08a5f0;
  padding-bottom: 16px;
`
