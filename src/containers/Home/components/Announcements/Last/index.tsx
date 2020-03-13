import * as React from 'react';
import { LastAnnouncementStyled, BannderStyled, DateStyled, TitleStyled, ShortDescStyled, BottomStyled } from './styled';
import { IconCalendar } from '../../../../../components/UI/SvgIcons/icon-calendar';


interface ILastAnnouncementProps {
}

const LastAnnouncement: React.FunctionComponent<ILastAnnouncementProps> = (props) => {
  return(
    <LastAnnouncementStyled>
      <BannderStyled >
        <img src="/images/lastAnnouncement.png" alt="last announcement" />
      </BannderStyled>
      <BottomStyled>
        <DateStyled>
          <IconCalendar />
          <span>Today, oct 8</span>
        </DateStyled>
        <TitleStyled>
          Our company is celebrating the anniversary
        </TitleStyled>
        <ShortDescStyled>
          Everybody is welcome in the main hall tomorrow at 12:00 pm for the corporate lunch… 
        </ShortDescStyled>
      </BottomStyled>
    </LastAnnouncementStyled>
  );
};

export default LastAnnouncement;
