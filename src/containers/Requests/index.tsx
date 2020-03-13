import React, { Component } from 'react';
import { Props, State } from './types';
import Header from '../../components/Header';
import { ContentBlock } from '../../styledTheme/globalStyles';
import { connected } from './connect';
// import { Icon } from 'semantic-ui-react';
// import IconButtonUI from '../../components/UI/IconButton/index';
import { displayColumns } from './constants';
import { formDataRequestFormat, getKeySortFieldHelper, getValueSortFieldHelper } from '../../utils/index';
import { injectIntl } from 'react-intl';
import TableHeaderText from '../../components/UI/Table/TableHeader/Text/index';
import TableData from './TableData/index';
import MainContent from '../../components/MainContent/index';
import {  ModalContainer } from './styled';
import ViewRequest from './ViewRequest/index';
import ErrorComponent from '../../components/UI/Error/index';
import { DescSort, AscSort } from '../../constants/common';


class Requests extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            sortField: {
                name: getKeySortFieldHelper(props.requestData),
                order: getValueSortFieldHelper(props.requestData)
            },
            width: window.innerWidth,
            viewRequest: false,
            requestIds: [],
        };
    }


    public componentDidMount() {
        if (!this.props.data.length) {
            // this.props.fetchRequestsDataAction();
        }
        this.props.setCurrentPageAction(this.props.path);
    }
    public static getDerivedStateFromProps:
        React.GetDerivedStateFromProps<Props, State> = (props, state) => {
            if (props.requestData.length) {
                return {
                    sortField: {
                        name: getKeySortFieldHelper(props.requestData),
                        order: getValueSortFieldHelper(props.requestData)
                    }
                };
            }
            return { sortField: null };
        }
    

    private viewRequestCancel = () => {
        this.setState({ viewRequest: false});
    }

    public refreshHandler = async () => {
        await this.props.refreshRequests(true);
        await this.props.changePageNumberRequestsAction(1);
        // this.props.fetchRequestsDataAction();
        await this.refreshRequestIds()
    }
    private sortHandler = async (fieldName: string) => {
        const { sortField } = this.state;
        let sort = DescSort;
        if (
            sortField &&
            sortField.name === fieldName &&
            sortField.order === DescSort
        ) {
            sort = AscSort;
        }
        await this.props.sortRequests([{ [fieldName]: sort }]);
        // await this.props.fetchRequestsDataAction();
        await this.setState({ sortField: { name: fieldName, order: sort } });
    };
    private paginationHandler = async (e: any, data: any) => {
        if (this.props.refreshLoading)
            await this.props.refreshRequests(false);
        await this.props.changePageNumberRequestsAction(data.activePage);
        // await this.props.fetchRequestsDataAction();
    }

    private checkRequestHandler = (id: string) => {
        let requestIds = [...this.state.requestIds];
        if (!requestIds.includes(id)) {
            requestIds.push(id)
        } else {
            requestIds = requestIds.filter((rId: string) => rId !== id)
        }
        this.setState({ requestIds })
    }

    private checkAllHandler = () => {
        let requestIds = [...this.props.data].map((request: any) => request.id);
        if (this.state.requestIds.length === requestIds.length) {
            requestIds = [];
        }
        this.setState({ requestIds })
    }

    private selectRequest = (request: any) => {
        const formData = formDataRequestFormat([{ filter_data: { id: request.id } }], this.props.sessionId);
        this.props.getRequestAction(formData)
    }

    private refreshRequestIds = () => {
        this.setState({ requestIds: []})
    }

    
    render() {
        const {
            data,
            isLoading,
            // refreshLoading,
            error,
            pager,
            cancelRequestError,
            cancelRequestLoading,
            setNewRequestLoading,
            request,
            requestLoading,
            requestError,
            authHistory,
            authHistoryLoading,
            authHistoryError,
            lang
        } = this.props;

        const { sortField, viewRequest, requestIds } = this.state;
        
        const tableHeader = <TableHeaderText titleKey="requests" sortField={sortField} sortHandler={this.sortHandler} columns={displayColumns}  />
        let tableBody: React.ReactElement[] | null = null;
        if (data) {
            tableBody = data.map((row: any) => (
                <TableData
                    key={row.id}
                    cells={row}
                    fields={displayColumns}
                    onChangeHandler={this.checkRequestHandler}
                    checked={this.state.requestIds.includes(row.id)}
                />
            ));
        }
        return (
            <div>
                <Header isMobile={false} />
                <ContentBlock>
                    <ModalContainer>
                        {viewRequest && <ViewRequest 
                            request={request} 
                            cancelHandler={this.viewRequestCancel}
                            requestLoading={requestLoading}
                            requestError={requestError}
                            selectRequest={this.selectRequest} 
                            requests={data} 
                            authHistory={authHistory}
                            authHistoryLoading={authHistoryLoading}
                            authHistoryError={authHistoryError}
                            lang={lang}

                   />}
                    </ModalContainer>
                    
                    {/* <Search actions={actions} filters={filters} /> */}
                    {cancelRequestError ? <ErrorComponent error={cancelRequestError} /> : ''}
                    <MainContent
                        tableBody={tableBody}
                        tableHeader={tableHeader}
                        isLoading={isLoading || cancelRequestLoading || setNewRequestLoading}
                        error={error}
                        paginationHandler={this.paginationHandler}
                        pager={pager}
                        selected={true}
                        checkAllHandler={this.checkAllHandler}
                        checked={data.length === requestIds.length}
                        colspan={displayColumns.length}
                    />
                </ContentBlock>
            </div>
        )
    }
}
export default injectIntl(connected(Requests));