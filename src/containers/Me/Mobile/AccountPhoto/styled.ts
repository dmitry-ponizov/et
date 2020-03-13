import styled from 'styled-components';
import { AvatarLoadType } from '../../../../components/UI/Avatar/types';


export const AvatarImage = styled.img`
  display: ${(props: AvatarLoadType) => props.loaded ? 'none' : 'block'};
`

export const AvatarWrap = styled.div`
    width: 84px;
    height: 84px;
    margin-top: 7px;
    /* position: relative; */
`

export const AvatarBlock = styled.label`
    position: relative;
    input {
        display: none;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const NoAvatarStyled = styled.img`
    display: ${(props: AvatarLoadType) => props.loaded ? 'block' : 'none'};
`

export const AccountPhotoSection = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background:  ${props => props.theme.colors.white};
`

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
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

export const AccountPhotoStyled = styled.div`
    color: ${props => props.theme.colors.titleColor};
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 500;	
    line-height: 15px;	
    text-align: center;
`


export const Point = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
    left: ${(props: {rtl: boolean}) => props.rtl ? '0px' : '59px'};
    bottom: 25px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`