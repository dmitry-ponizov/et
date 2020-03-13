import styled from 'styled-components';


export const SubordinateStyled = styled.div`
    padding: 16px 16px 16px 0;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
        width: 7px;
        height: 12px;
    }
`;

export const AvatarWrap = styled.div`
    width: 48px;
    height: 48px;
`;



export const InfoBlock = styled.div`
    margin:0 16px;
`;

export const EmployeeNumber = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  letter-spacing: -0.29px;
  color: ${props => props.theme.colors.grey};
`;

export const Fullname = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  font-weight: 500;
  letter-spacing: -0.34px;
  color: ${props => props.theme.colors.titleColor};
  margin-top: 5px;
`;
export const Position = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  font-weight: 500;
  letter-spacing: -0.29px;
  color: ${props => props.theme.colors.greyValue};
  margin-top: 5px;
`;

export const LoaderStyled = styled.div`
   margin-right: 10px;
`;
export const InfoSection = styled.div`
   display: flex;
`;
