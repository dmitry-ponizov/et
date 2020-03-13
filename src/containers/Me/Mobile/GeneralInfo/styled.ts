import styled from 'styled-components';

export const GeneralInfoContainer = styled.div`
  flex: 1;
`;

export const AvatarWrap = styled.div`
    margin: 0 0 16px 0;
    width: 80px;
    height: 80px;
`;


export const Content = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.white};
`

export const ContactsBlock = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.contentColor};
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;


export const RightBlock = styled.div`
    padding-left: 14px;
`;

export const ContactsSection = styled.div`
  padding: 0 16px 16px 16px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 1px 0 0  ${props => props.theme.colors.btnBorder};
`
export const PagesLinksBlock = styled.div`
    padding: 15px;
    background: ${props => props.theme.colors.contentColor};
    width: 100%;
    margin-top: 1px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;