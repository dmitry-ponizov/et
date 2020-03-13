import styled from 'styled-components';
import { AvatarLoadType } from '../../../components/UI/Avatar/types';

export const AccountPhotoStyled = styled.div`
    background: ${props => props.theme.colors.white};
	border: 1px solid  ${props => props.theme.colors.lightGrey};
    min-height: 232px;
    display: flex;
    flex: 1;
    margin-right: 10px;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`;


export const AvatarWrapper = styled.div`
	height: 102px;
	width: 102px;
`;

export const AvatarBlock = styled.label`
    position: relative;
    cursor: pointer;
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


export const Point = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
    left: ${(props: {rtl: boolean}) => props.rtl ? '0' : '72px'}; 
    bottom: 25px;
    border-radius: 50%;
    background: ${props => props.theme.colors.white}; 
    display: flex;
    justify-content: center;
    align-items: center;

`

export const AvatarImage = styled.img`
  display: ${(props: AvatarLoadType) => props.loaded ? 'none' : 'block'};
`


export const NoAvatarStyled = styled.img`
    display: ${(props: AvatarLoadType) => props.loaded ? 'block' : 'none'};
`

export const FullName = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.medium24Fs};
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.titleColor}; 
  margin-top: 20px;
`

export const Position = styled.div`
   font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs}; 
  text-align: center;
  color: ${props => props.theme.colors.grey2};  
  margin-top: 5px;
`