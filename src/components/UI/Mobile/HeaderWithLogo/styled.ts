import styled from 'styled-components';

type Header = {
  bcg: string;
}

export const HeaderMobileStyled = styled.div`
     padding: 10px 5px 10px 15px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     background: ${(props: Header) => props.bcg};
     direction: ltr;
`

export const Title = styled.div`
  font-family: CircularStd;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.39px;
  color: ${props => props.theme.colors.white};
`