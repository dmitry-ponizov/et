import  React from 'react';
import { Props } from './types';
import { NoSearchResultsStyled, IconBlock, Title, Description } from './styled';
import { IconSearch } from '../../SvgIcons/icon-search';
import { InjectedIntlProps, injectIntl } from 'react-intl';

const NoSearchResults: React.FunctionComponent<Props & InjectedIntlProps> = ({query, intl}) => {

  return (
    <NoSearchResultsStyled>
        <div>
            <IconBlock>
                <IconSearch />
            </IconBlock>
            <Title>{intl.formatMessage({ id: `global.no_results`})} "{query}"</Title>
            <Description>{intl.formatMessage({ id: `global.try_different_keywords`})}</Description>
        </div>
    </NoSearchResultsStyled>
  );
};

export default injectIntl(NoSearchResults);
