import styled from 'styled-components';

export const UserStyled = styled.div`
    display: flex;
    align-items: center;
    @media(max-width: 768px) {
        display: none;
    }
`
export const FullNameStyled = styled.div`
    color: ${props => props.theme.colors.titleColor};
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 500;	
    line-height: 15px;
    margin: 0 8px;
`
export const AvatarWrap = styled.div`
    width: 32px;
    height: 32px;
    margin: ${(props: {rtl: boolean}) => props.rtl ? '0 24px 0 0' : '0 0 0 24px'};
`


export const Status = styled.div`
    display: inline-block;
    padding: 0 3px;
    min-width: 40px;
    margin-top: 3px;
    color: #fff;
    font-family: CircularStd;	
    font-size: 10px;	
    background: ${(props: {color?: string}) => props.color};
    border-radius: 5px;
    text-align: center;
`