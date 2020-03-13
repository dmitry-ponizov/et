import styled from "styled-components";

export const LastAnnouncementStyled = styled.div`
    margin-top: 12px;
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.greyBorder}; 
    background-color: ${props => props.theme.colors.white};
`
export const BannderStyled = styled.div`
    max-width: 970px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
export const DateStyled = styled.div`
    display: flex;
    align-items: center;
    font-family: CircularStd;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: -0.26px;
    color: ${props => props.theme.colors.grey3};

    span {
        padding: 0 10px;
    }
    svg {
        width: 14px;
        height: 14px;
        path {
            stroke: ${props => props.theme.colors.grey3};
        }
    }
`

export const TitleStyled = styled.div`
  font-family: CircularStd;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.34px;
  color: ${props => props.theme.colors.titleColor};
  margin-top: 7px;
`
export const ShortDescStyled = styled.div`
  font-family: CircularStd;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: ${props => props.theme.colors.titleColor};
  margin-top: 7px;
`
export const BottomStyled = styled.div`
    padding: 16px;
`
