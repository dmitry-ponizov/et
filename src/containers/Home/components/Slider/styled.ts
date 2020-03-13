import styled from 'styled-components';

export const HomeSliderStyled = styled.div`
   padding: 0px 16px 40px 16px;
    .slick-slider  {
        .slick-dots{
            bottom: -35px;
            li {
                width: 16px;
                height: 3px;
                border-radius: 3px;	
                background-color:  ${props => props.theme.colors.greyBorder};
                button {
                    &::before {content: ''}
                }
                &:hover {
                    background-color: ${(props: {type: string, theme: any}) => props.type === 'birthdays' ? props.theme.colors.red : props.theme.colors.blueBtn};
                }
            }
            .slick-active {
                background-color: ${(props: {type: string, theme: any}) => props.type === 'birthdays' ? props.theme.colors.red : props.theme.colors.blueBtn};
            }
        }
    }
`;


export const SlideStyled = styled.div`
 &:focus {
      outline: none;
  }
`;