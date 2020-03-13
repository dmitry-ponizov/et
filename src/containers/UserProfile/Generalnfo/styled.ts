import styled from 'styled-components';


export const GeneralInfoContainer = styled.div`
    background: ${props => props.theme.colors.white};
    padding: 24px 40px;
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.btnBorder};
    display: flex;
    width:100%;
    margin: 15px auto;
    position: relative;
`;

export const AvatarWrap = styled.div`
    width: 104px;
    height: 104px;
`;


export const MainBlock = styled.div`
    padding: 0 24px;
    flex: 2;
`;

export const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;
export const FullName = styled.div`
    color: ${props => props.theme.colors.titleColor}; 
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.medium24Fs};
    font-weight: bold;	
    line-height: 30px;
`;
export const Position = styled.div`
	color: ${props => props.theme.colors.grey2};
    font-family: CircularStd;		
    font-size: ${props => props.theme.fontSizes.small14Fs};	
    font-weight: 300;	
    line-height: 18px;
    margin-top: 5px;
`;
export const ContactsBlock = styled.div`
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.btnBorder};
    background-color: ${props => props.theme.colors.white}; 
    margin-top: 28px;
    display: flex;
`;

export const VerticalLineStyled = styled.div`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    /* margin: 5px 0; */
`;

export const RequestButtons = styled.div`
    display: flex;   
    
`

export const FullArabicName = styled.div`
    color: #464754;	
    font-family: CircularStd;	
    font-size: 16px;	
    font-weight: bold;	
    line-height: 20px;
    margin-top: 5px;
`