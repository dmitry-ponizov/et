import  React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeSliderStyled, SlideStyled } from './styled';
import { Props, IUnion } from './types';
import DynamicCard from '../DynamicCard/index';


const HomeSlider: React.FunctionComponent<Props> = ({ data, sessionId, rtl, lang, type }) => {
    const settings = {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        vertical: true,
        draggable: false,
        rtl: false,
        cssEase: 'ease-in-out',
      };
      
    return (
      <HomeSliderStyled type={type}>
        <Slider {...settings}>
          {data && data.map((user: IUnion, index: number) =>  
          <SlideStyled key={index}>
            <DynamicCard tag={type} user={user} sessionId={sessionId} rtl={rtl} lang={lang} lastId={data[0]['id']} />
          </SlideStyled>)}
        </Slider>
      </HomeSliderStyled>
      );
};

export default HomeSlider;
