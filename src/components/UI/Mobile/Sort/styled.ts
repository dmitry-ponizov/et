import styled from 'styled-components';
import { DirectionStyled } from './types';


export const SortStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const ChooseField = styled.div`
    padding: 16px;
    background-color: ${props => props.theme.colors.contentColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.btnBorder};
`
export const ChooseTitle = styled.div`
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small12Fs};
    font-weight: 500;
    color: ${props => props.theme.colors.greyValue};
`
export const SelectDirection = styled.div`
  border:  1px solid ${props => props.theme.colors.blueBtn};
  border-radius: 2px;
  display: flex;
`
export const Direction = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  font-weight: normal;
  padding: 8px 16px;
  color: ${(props: DirectionStyled) => props.active ? props.theme.colors.white : props.theme.colors.blueBtn};
  background: ${(props: DirectionStyled) => props.active ? props.theme.colors.blueBtn : props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FieldsList = styled.div`
    padding: 10px 15px;
    background: ${props => props.theme.colors.white};
    flex: 1;
`

export const SortField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px ${props => props.theme.colors.btnBorder};
    padding: 15px 0;
`
export const FildName = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small16Fs};
  font-weight: normal;
  color: ${props => props.theme.colors.titleColor};
`

export const ApplyBtn = styled.div`
   border-radius: 2px;
   background-color: ${props => props.theme.colors.blueBtn};
   padding: 13px;
   font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.medium18Fs};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`; 


export const ButtonSection = styled.div`
  padding: 16px;
  background: ${props => props.theme.colors.white};
`