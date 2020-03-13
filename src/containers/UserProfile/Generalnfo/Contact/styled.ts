import styled from "styled-components";
import { CommonType } from '../../../../constants/common';

type ContactStyled = {
    theme: CommonType;
    type: string;
}

export const ContactStyled = styled.div`
    padding: 16px;
    border-radius: 2px;
    background-color: ${props=> props.theme.colors.white};
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
`;

export const Label = styled.div`
  font-family: CircularStd;
  font-size: ${props=> props.theme.fontSizes.small14Fs};
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #464754; 
  white-space: nowrap;
  padding: 0 12px;
`;

export const Info = styled.div`
    /* margin-left: 12px; */
    font-family: CircularStd;
    font-size: ${props=> props.theme.fontSizes.small14Fs};
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.26px;
    ${(props: ContactStyled) => props.type === 'email' ? ({
        color: props.theme.colors.blueBtn,
        textDecoration: 'underline',
    }) : ''};
     ${(props: ContactStyled) => props.type === 'phone' ? ({
        color: props.theme.colors.grey2
    }) : ''};

`;

