import  React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MonthSliderStyled, SlideStyled, SlideContent } from './styled';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Props } from './types';
import { months } from '../../../../../../constants/common';

const MonthSlider: React.FunctionComponent<Props & InjectedIntlProps> = ({intl, isRtl, initialSlide, changeMonth}) => {
   
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        beforeChange: (current: number, next: number) => {
          changeMonth(next + 1);
        },
        rtl: false,
        initialSlide,
        draggable: false,
        swipeToSlide: true
      };

    return (
      <MonthSliderStyled>
        <Slider {...settings}>
          {months.map((month: string) =>  
          <SlideStyled key={month}>
            <SlideContent>{intl.formatMessage({ id: `months.${month}`})}</SlideContent>
          </SlideStyled>)}
        </Slider>
      </MonthSliderStyled>
      );
};

export default injectIntl(MonthSlider);
