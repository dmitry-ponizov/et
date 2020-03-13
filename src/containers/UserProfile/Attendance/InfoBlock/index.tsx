import React from 'react'
import { InfoBlocks, InfoValue, InfoTitle, InfoBlockStyled } from './styled';
import { Props } from './types';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';


const InfoBlock: React.FC<Props> = ({lang}) => {
  
    return (
        <InfoBlocks>
            <InfoBlockStyled>
                <InfoTitle><FormattedMessage id={`global.today`} /></InfoTitle>
                <InfoValue>{moment().locale(lang).format('dddd, ll')}</InfoValue>
            </InfoBlockStyled>
        </InfoBlocks>
    )
}

export default InfoBlock;