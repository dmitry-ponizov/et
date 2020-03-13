import  React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { connected } from './connect'
import MainContent from '../../../components/MainContent';
import { Props } from './types';
import { displayColumns } from '../../Requests/constants';
import TableHeaderText from '../../../components/UI/Table/TableHeader/Text/index';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import TableData from './TableData';
import { ContentBlock } from '../../../styledTheme/globalStyles';
import Breadcrumbs from '../../../components/UI/Breadcrumbs';
import { RequestsCrumbs, getUserDataRequest } from '../constants';
import { PageTitle } from './styled';
import {  isObject, formDataRequestFormat } from '../../../utils/index';
import { DescSort, AscSort } from '../../../constants/common';


const UserRequests: React.FunctionComponent<Props & InjectedIntlProps> = ({
    path,
    id,
    data,
    intl,
    fetchRequestsDataAction,
    changeFilterDataAction,
    user,
    sessionId,
    getUserDataAction,
    isLoading,
    pager,
    error,
    changePageNumberRequestsAction,
    sortRequests
}) => {
    const [sortField, setSortField] = useState({name: '', order: ''})
    useEffect(() => {
        getUserData(id)
        changeFilterDataAction([id], 'user_id')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, fetchRequestsDataAction, changeFilterDataAction])

    const getUserData = async (id: string) => {
        let userRequest: any[] = [...getUserDataRequest];
        userRequest[0]['filter_data']['id'] = id
        const formData = formDataRequestFormat(userRequest, sessionId);
        getUserDataAction(formData);

    } 
    const paginationHandler = async (e: any, data: any) => {
        await changePageNumberRequestsAction(data.activePage);
    }

    const checkAllHandler = () => {}
    const  sortHandler = async (fieldName: string) => {
        let sort = DescSort;
        if (
            sortField &&
            sortField.name === fieldName &&
            sortField.order === DescSort
        ) {
            sort = AscSort;
        }
        await sortRequests([{ [fieldName]: sort }]);
        await setSortField({ name: fieldName, order: sort })
    };
    
    let tableBody: React.ReactElement[] | null = null;
    if (data) {
        tableBody = data.map((row: any) => (
            <TableData
                key={row.id}
                cells={row}
                fields={displayColumns}
            />
        ));
    }

    const tableHeader = <TableHeaderText titleKey="requests" columns={displayColumns}  sortHandler={sortHandler} />

    return (
        <div>
            <Header isMobile={false} />
            <ContentBlock>
            {isObject(user) && 
                <Breadcrumbs crumbs={RequestsCrumbs} customCrumb={user.full_name} customCrumbRoute={`/user/${user.id}`} lastCrumb={'Requests by User'} />
            }
                <PageTitle>Requests by User</PageTitle>
                <MainContent
                    tableBody={tableBody}
                    tableHeader={tableHeader}
                    isLoading={isLoading}
                    error={error}
                    paginationHandler={paginationHandler}
                    checkAllHandler={checkAllHandler}
                    pager={pager}
                    colspan={displayColumns.length}
                />
            </ContentBlock>
        </div>
    );
};

export default injectIntl(connected(UserRequests));
