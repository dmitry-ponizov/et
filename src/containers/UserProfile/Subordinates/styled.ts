import styled from "styled-components";

export const SubordinatesStyled = styled.div`
    background: ${props => props.theme.colors.white};
    padding: 24px 40px;
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.btnBorder};
    width:100%;
    margin: 15px auto;
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