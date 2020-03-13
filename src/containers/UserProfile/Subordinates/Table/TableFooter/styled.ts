import styled from "styled-components";

export const FooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ui.pagination.menu{
        border: none;
        box-shadow: none;
        background: transparent;
        padding-top: 15px;
       .active.item{
            padding: 8px;
            background: #08a5f0;
            border-radius: 50%;
            font-family: CircularStd;
            font-size: 13px;
            font-weight: normal;
            color: #ffffff;
              height:20px;
        }
        a {
            display: flex;
            justify-content: center;
            padding: 8px;
            min-width: 20px;
            height:20px;
            font-family: CircularStd;
            font-size: 13px;
            font-weight: normal;
            color: #08a5f0;
            &:before {
                background: transparent;
            }
            &:focus {
                outline: none;
            }
        }
    }
`;


export const Displaying = styled.div`
  font-family: CircularStd;
  font-size: 14px;
  font-weight: 500;
  color: #464754;
`

