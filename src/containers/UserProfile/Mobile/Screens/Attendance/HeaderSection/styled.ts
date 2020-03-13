import styled from 'styled-components';

export const HeaderSectionStyled = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.contentColor};
    padding: 8px;
    min-height: 50px;
`;


export const Title = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  font-weight: normal;
  color: ${props => props.theme.colors.grey2};
`;

export const Value = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small16Fs};
  font-weight: normal;
  color: ${props => props.theme.colors.titleColor};
  font-weight: 500;
  margin-top: 5px;
`;