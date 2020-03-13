import styled from 'styled-components';
import { CommonType } from '../../../../constants/common';

type BtnTypes = {
  filled: boolean;
  theme: CommonType;
  rtl: boolean;
}

export const MakeRequestStyled = styled.div`
  height: 36px;
  border-radius: 4px;
  background-color: ${(props: BtnTypes) => props.filled ? props.theme.colors.blueBtn : props.theme.colors.white};
  padding: 8px 25px;
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs}; 
  font-weight: bold;
  line-height: 1.29;
  color: ${(props: BtnTypes) => props.filled ? props.theme.colors.white : props.theme.colors.grey2};
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid  ${(props: BtnTypes) => props.filled ? 'none' : '#D5D5E5'};
  margin-right: ${(props: BtnTypes) => props.rtl ? '16px' : '0px'}; 
  margin-left: ${(props: BtnTypes) => props.rtl ? '0px' : '16px'};
  &:nth-child(1) {
    margin-right: 0px;
  }
`;