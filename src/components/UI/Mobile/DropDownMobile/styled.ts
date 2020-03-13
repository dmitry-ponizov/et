import styled from 'styled-components';

export const DropDownMobileStyled = styled.div`
  position: relative;
`;

export const MobileMenuStyled = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 46px;
  right: 12px;
  z-index: 2;
  padding: 20px 20px 10px 20px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.colors.white};
`;