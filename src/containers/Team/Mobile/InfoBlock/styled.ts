import styled from 'styled-components';
import { CommonType } from '../../../../constants/common';

type CircleType = {
  color: string;
  theme: CommonType;
}

export const InfoBlockBlock = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    background: ${props => props.theme.colors.white};
    min-width: 109px;
    height: 216px;
    margin-top: 8px;
    margin-right: 8px;
    border-radius: 4px;
    box-shadow: -0.5px 0 0 0 ${props => props.theme.colors.greyBorder2}, 0.5px 0 0 0 ${props => props.theme.colors.greyBorder2}, 0 1px 4px 0 ${props => props.theme.colors.greyBorder2};
    padding: 28px 8px;
`

export const Circle = styled.div`
  border-radius: 50%;
  border: solid 4px ${(props: CircleType) => props.color};
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  color: ${props => props.theme.colors.titleColor};
`
export const Value = styled.div`
 color: ${props => props.theme.colors.titleColor};
 font-family: CircularStd;	
 font-size: 28px;	
 font-weight: bold;	
 line-height: 18px;	
 text-align: center;
`