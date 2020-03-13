import React from 'react'
import { InfoBlockStyled, Title, Value } from './styled';
import { Props } from './types';
import LoaderComponent from '../../../../components/UI/Loader/index';

const InfoBlock: React.FC<Props> = ({title, value, isLoading, error }) => {
    return (
        <InfoBlockStyled>
            <Title>{title}</Title>
            {value ?  <Value>{value}</Value> : ''}
            {isLoading && <LoaderComponent margin="30px" /> }
            {error && !isLoading && !Boolean(value) ? <Value>{error}</Value> : ''}
        </InfoBlockStyled>
    )
}

export default InfoBlock;