import * as React from 'react';
import { Props } from './types';
import { AnnouncementsHeader, SearchContainer } from './styled';
import Search from '../../../../../components/UI/Mobile/Header/Search/index';
import { TitleUI } from '../../../../../styledTheme/globalStyles';
import { InjectedIntlProps, injectIntl } from 'react-intl';

const AnnouncemetsSearch: React.FunctionComponent<Props & InjectedIntlProps> = ({intl}) => {
    return (
        <AnnouncementsHeader>
            <TitleUI>
            {intl.formatMessage({ id: `home.company_announcement`})}
            </TitleUI>
            <SearchContainer>
                <Search placeholder={intl.formatMessage({ id: `home.find_news`})} findHandler={() => { }} onCancel={() => { }} />
            </SearchContainer>
        </AnnouncementsHeader>
    );
};

export default injectIntl(AnnouncemetsSearch);
