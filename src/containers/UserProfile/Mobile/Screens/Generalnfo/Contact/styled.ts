import styled from "styled-components";

export const ContactMobileStyled = styled.div`
    padding: 8px 15px 8px 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
`;


export const IconStyled = styled.div`

    svg { 
        width: 20px;
        height: 20px;
    }
`;

export const ValueStyled = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  font-weight: normal;
  letter-spacing: -0.26px;
  color: ${props => props.theme.colors.titleColor};
  margin-bottom: 5px;
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin:0 8px;
`

export const DescStyled = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small10Fs};
  font-weight: normal;
  letter-spacing: -0.21px;
  color: ${props => props.theme.colors.grey};
  margin-left: 28px;
`;