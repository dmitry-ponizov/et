import styled from 'styled-components';

export const MonthSliderStyled = styled.div`
    .slick-center{
        div{
            font-family: CircularStd;
            font-size: ${props => props.theme.fontSizes.small16Fs};
            font-weight: 500;
            color: ${props => props.theme.colors.blueBtn};
        }
    }
`;


export const SlideStyled = styled.div`
 &:focus {
      outline: none;
  }
`;


export const SlideContent = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  font-weight: 500;
  line-height: normal;
  color: ${props => props.theme.colors.grey};
  text-align: center;
  &:focus {
      outline: none;
  }
  
`;
