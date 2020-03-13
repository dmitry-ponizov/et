import * as React from 'react';
import { TitleWithSearchStyled, Title, SearchContainer } from './styled';
import Search from '../../../components/UI/Mobile/Header/Search/index';
import { Props } from './types';


const TitleWithSearch: React.FunctionComponent<Props> = ({title, placeholder, findHandler, onCancel }) => {
    return (
        <TitleWithSearchStyled>
            <Title>{title}</Title>
            <SearchContainer>
                <Search placeholder={placeholder} findHandler={findHandler} onCancel={onCancel} />
            </SearchContainer>
        </TitleWithSearchStyled>
    );
};

export default TitleWithSearch;
