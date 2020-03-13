import React from 'react'
import { InfoBlocks, InfoValue, InfoTitle, InfoErrorBlock, InfoBlockStyled } from './styled';
import { Props } from './types';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { codesHandler } from '../../../../../../utils/index';

const InfoBlock: React.FC<Props> = ({selectedDate, codes, lang}) => {
    return (
        <InfoBlocks>
            <InfoBlockStyled>
                <InfoTitle><FormattedMessage id={`global.today`} /></InfoTitle>
                <InfoValue>{moment().locale(lang).format('dddd, ll')}</InfoValue>
            </InfoBlockStyled>
            <InfoBlockStyled>
                <InfoTitle><FormattedMessage id={`global.selected_date`} /></InfoTitle>
                <InfoValue>{ selectedDate && moment(selectedDate).locale(lang).format('dddd, ll')  }</InfoValue>
            </InfoBlockStyled>
            <InfoErrorBlock>
                <InfoTitle><FormattedMessage id={`global.errors_codes`} /></InfoTitle>
                <InfoValue>{codesHandler(codes)}</InfoValue>
            </InfoErrorBlock>
        </InfoBlocks>
    )
}

export default InfoBlock;