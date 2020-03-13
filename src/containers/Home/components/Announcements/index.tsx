import * as React from 'react';
import { Props } from './types';
import AnnouncemetsSearch from './Search'
import LastAnnouncement from './Last';

const Announcements: React.FunctionComponent<Props> = (props) => {
  return(
      <div>
          <AnnouncemetsSearch />
          <LastAnnouncement />
      </div>
  );
};

export default Announcements;
