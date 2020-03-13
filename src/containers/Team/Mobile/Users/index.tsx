import React, { useEffect, Fragment, useState } from 'react';
import { Props } from './types';
import { UsersStyled, UsersList } from './styled';
import HeaderMobile from '../../../../components/UI/Mobile/Header/index';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connected } from './connect';
import LoaderComponent from '../../../../components/UI/Loader/index';
import User from '../../../../components/UI/Mobile/User/index';
import NoSearchResults from '../../../../components/UI/Mobile/NoSearchResults';
import { AscSort, elementsAmount } from '../../../../constants/common';
import SortMobile from '../../../../components/UI/Mobile/Sort/index';
import { sortFields, defaultSortField } from '../../constants';
import TotalMobile from '../../../../components/UI/Mobile/Total'
import ShowMore from '../../../../components/UI/ShowMore';
import ErrorComponent from '../../../../components/UI/Error/index';

const UsersMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({
    members,
    getTeamMembersAction,
    membersLoad,
    sessionId,
    membersError,
    intl
}) => {

    const [showSortScreen, setShowSortScreen] = useState(false)
    const [direction, setDirection] = useState(AscSort)
    const [activeField, setActiveField] = useState(defaultSortField);
    const [query, setQuery] = useState('')
    const [showElements, showElementsHandler] = useState(elementsAmount)

    useEffect(() => {
        if (!members && !membersError) { getTeamMembersAction('') }
    }, [getTeamMembersAction, members, membersError])

    const showSortHandler = () => {
        setShowSortScreen(!showSortScreen)
    }
    const findQuery = (query: string) => {
        setQuery(query)
        findHandler(query)
    }

    const findHandler = (query: string) => {
        getTeamMembersAction(`&search=${query}`);
    }

    const onCancel = () => {
        getTeamMembersAction('')
        setQuery('')
    }

    const sort = (direction: string, field: string) => {
        setShowSortScreen(false)
        sortHandlerMobile(direction, field)
    }

    const sortHandlerMobile = (direction: string, field: string) => {
        getTeamMembersAction(`&filter_sort=${field}&filter_sort_dir=${direction}`)
    }
    const resetHandler = () => {
        setActiveField(defaultSortField)
        setDirection(AscSort)
    }

    const showMoreHandler = () => {
        showElementsHandler((prevShowElements) => prevShowElements + elementsAmount)
    } 
    
    const isShowMore = members && members.length > elementsAmount && showElements < members.length;

    const getTranslate = (key: string) => {
        return intl.formatMessage({ id: `users.${key}`})
    }
    return (
        <UsersStyled>
           {!showSortScreen && <HeaderMobile
                title={getTranslate('users')}
                sortHandler={showSortHandler}
                findHandler={findQuery}
                placeholder={getTranslate('find_employee')}
                withSearch={true}
                onCancel={onCancel}
            />}
            {!showSortScreen && !membersLoad && members &&
                <Fragment>
                    <TotalMobile showElements={showElements}  total={members.length} content={getTranslate('users')} />
                    <UsersList>
                        {members.slice(0, showElements).map((member: any) => (
                            <User key={member.id} user={member} sessionId={sessionId} />))}
                    </UsersList>
                    {isShowMore && <ShowMore clickHandler={showMoreHandler} />}
                </Fragment>}
            {showSortScreen &&
                <SortMobile
                    backHandler={showSortHandler}
                    total={members ? members.length : 0}
                    sortHandler={sort}
                    direction={direction}
                    activeField={activeField}
                    setDirection={setDirection}
                    setActiveField={setActiveField}
                    resetHandler={resetHandler}
                    sortFields={sortFields}
                />}
            {membersLoad ? <LoaderComponent margin="200px" /> : ''}
            {membersError && !membersLoad && !query && <ErrorComponent error={membersError} />}
            {membersError && !membersLoad && query &&
                <NoSearchResults query={query} />}
        </UsersStyled>
    );
};

export default connected(injectIntl(UsersMobile));
