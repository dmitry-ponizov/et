import styled from 'styled-components';

type AvatarLoadType = {
    loaded: boolean
}

export const GeneralInfoContainer = styled.div`
	min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
`;


export const AvatarWrap = styled.div`
    margin: 16px 0 16px 0;
    width: 80px;
    height: 80px;
`;



export const LoaderBlock = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FullName = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small16Fs};
  font-weight: bold;
  letter-spacing: -0.34px;
  text-align: center;
  color: ${props => props.theme.colors.titleColor};
`;

export const Position = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: ${props => props.theme.colors.grey};
  margin-top: 5px;
`;

export const ContactsWrap = styled.div`
    padding: 0 12px;
    width: 100%;
` 
export const ContactsBlock = styled.div`
    width: 100%;
    margin: 12px 0 8px 0px;
    background: ${props => props.theme.colors.contentColor};
    padding:11px 0;
    display: flex;
    flex-wrap: wrap;
`;


export const RightBlock = styled.div`
    padding:0 11px;
    flex: 1;
    min-width: 170px;

`;

export const LeftBlock = styled.div`
  padding:0 11px;
  min-width: 170px;
    flex: 1;
    
`;

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const PagesLinksBlock = styled.div`
    padding: 15px;
    background: ${props => props.theme.colors.contentColor};
    width: 100%;
    margin-top: 1px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Content = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.white};
`

export const AvatarImage = styled.img`
  display: ${(props: AvatarLoadType) => props.loaded ? 'none' : 'block'}
`

export const FullArabicName = styled.div`
    color: #464754;	
    font-family: CircularStd;	
    font-size: 16px;	
    font-weight: bold;	
    line-height: 20px;
    margin-top: 5px;
`