import React from 'react';
import { TotalSection } from './styled';
import { Props } from './types';
import { InjectedIntlProps, injectIntl } from 'react-intl';

const TotalMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({ showElements, total, content, intl }) => {
    return <TotalSection>
        {showElements < total ?
            <div>{showElements} {content} {intl.formatMessage({ id: `articles.of`})} {total} {intl.formatMessage({ id: `users.total`})}</div> :
            <div>{total} {content} {intl.formatMessage({ id: `articles.in`})} {intl.formatMessage({ id: `users.total`})}</div>}
    </TotalSection>;
};

export default injectIntl(TotalMobile);
