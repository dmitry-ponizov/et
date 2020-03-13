import styled from 'styled-components';

export const BackButtonStyled = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    min-height: 39px;
    @media(max-width: 768px) {
      svg {
        polyline { 
          stroke: #fff;
        }
      }
    }
`;

export const Title = styled.div`
  font-family: CircularStd;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  color: ${props => props.theme.colors.sideBarColor};
  padding: 0 8px;
  text-transform: capitalize;
  @media(max-width: 768px) {
    display: none;   
  }
`;