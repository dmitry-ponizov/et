import React from 'react'
import { BreadcrumbsStyled, CrumbStyled, LastCrumb } from './styled';
import { Props } from './types';
import { navigate } from '@reach/router';
import { injectIntl, InjectedIntlProps } from 'react-intl';

const Breadcrumbs: React.FC<Props & InjectedIntlProps> = ({ crumbs, lastCrumb, customCrumb, intl, customCrumbRoute}) => {
    return (
        <BreadcrumbsStyled>
            {crumbs.map((crumb: {name: string, route: string}) =>  
                <CrumbStyled key={crumb.name} onClick={() => navigate(crumb.route)}>{intl.formatMessage({ id: `global.${crumb.name}`}) + ' / '}</CrumbStyled> )}
            {customCrumb && customCrumbRoute && <CrumbStyled onClick={() => navigate(customCrumbRoute)}>{ customCrumb + ' / '}</CrumbStyled>}
            <LastCrumb>{ lastCrumb }</LastCrumb>
        </BreadcrumbsStyled>
    )
}
export default injectIntl(Breadcrumbs);