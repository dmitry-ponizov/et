import React from 'react'
import { PositionStyled, ViewProfile } from './styled'
import { IconArrowRight } from '../../../../../../components/UI/SvgIcons/icon-arrow-right'
import { Props } from './types';
import { navigate } from '@reach/router';
import { injectIntl, InjectedIntlProps } from 'react-intl';

const Position: React.FC<Props & InjectedIntlProps> = ({id, title, intl}) => {
    const viewProfile = () => {
        navigate(`/user/${id}`)
    }
    return (
        <PositionStyled>
            <div>
                {title}
            </div>
            <ViewProfile>
                <div className="viewProfile" onClick={viewProfile}>{intl.formatMessage({ id: `global.view_profile` })}</div>
                <IconArrowRight />
            </ViewProfile>
        </PositionStyled>
    )
}
export default injectIntl(Position);