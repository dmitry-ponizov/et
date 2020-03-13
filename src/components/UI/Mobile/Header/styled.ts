import styled from 'styled-components';

export const HeaderStyled = styled.div`
    padding: 9px 16px;
    background: ${props => props.theme.colors.blueBtn};
    flex-direction: column;
`;
export const TopSection = styled.div`
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;
`;
export const Title = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.medium18Fs};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  line-height: normal;
  text-transform: capitalize;
  white-space: nowrap;
`;
export const Sort = styled.div`

`;