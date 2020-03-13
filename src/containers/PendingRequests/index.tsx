import React, { Component } from 'react';
import { ContentBlock } from '../../styledTheme/globalStyles';
import { Props, State } from './types';
import { connected } from './connect';
import ActionsPanel from './ActionsPanel/index';
import { ModalContainer, PendingRequestsStyled, PendingRequestsSection} from './styled';
import { authorizeRequest, displayColumns } from './constants';
import { formDataRequestFormat } from '../../utils/index';
import MainContent from '../../components/MainContent/index';
import TableHeaderText from '../../components/UI/Table/TableHeader/Text/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import TableData from './TableData';
import ViewRequest from './ViewRequest/index';
import { isObject } from 'util';
import { RequestsCrumbs, PendingRequestsCrumb } from '../UserProfile/constants';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import { PendingRequestsPath } from '../../routes/constants';
import { mobileResulution, DescSort, AscSort } from '../../constants/common';
import PendingRequestsMobile from './Mobile';
import Modal from '../../components/UI/Modal/index';
import ModalContent from '../../components/UI/ModalContent';
import { IconApproveModal } from '../../components/UI/SvgIcons/icon-approve-modal';
import { IconDeclineModal } from '../../components/UI/SvgIcons/icon-decline-modal';
import { IconError } from '../../components/UI/SvgIcons/icon-error';
import TitleWithSearch from '../Team/TitleWithSearch/index';
import PendingRequestHeader from './Header'

class RequestAuthorizations extends Component<Props & InjectedIntlProps, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            sortField: {
                name: '',
                order: ''
            },
            requestIds: [],
            viewRequest: false,
            width: window.innerWidth
        };
    }
    public componentDidMount() {
        const { pendingRequestUserId, data, setCurrentPageAction, path } = this.props;
        const id = this.checkUserId()
        setCurrentPageAction(path)
        if(!data.length || pendingRequestUserId !== id){
            this.requestsAuthData()
        }
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    public componentDidUpdate(prevProps: Props, prevState: State) {
        if(prevProps.authUserId !== this.props.authUserId && !this.props.id){
            this.props.changeUserIdPendingRequestsAction(this.props.authUserId)
            this.props.fetchRequestAuthDataAction(`&SessionID=${this.props.sessionId}&userId=${this.props.authUserId}`);
        }
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    public handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    private requestsAuthData = () => {
        let userId = this.checkUserId();
        if (userId) {
            this.props.changeUserIdPendingRequestsAction(userId)
            this.props.fetchRequestAuthDataAction(`&SessionID=${this.props.sessionId}&userId=${userId}`);
        }
    };

    private checkUserId = () => {
        let userId = this.props.id
        if (!userId) {
            userId = this.props.authUserId
        }
        return userId;
    }

    private authtorizeDeclineRequest = async (authorized: boolean) => {
        if (this.state.requestIds.length) {
            let request = authorizeRequest;
            request[0][0]['request_id'] = this.state.requestIds
            request[0][0]['authorized'] = authorized
            const formData = formDataRequestFormat(request, this.props.sessionId);
            await this.props.authtorizeRequestAction(formData, authorized);
            await this.refreshRequestIds()
        }
    }
    public refreshHandler = async () => {
        await this.props.refreshAuthRequest(true);
        await this.props.changePageNumberAuthRequestAction(1);
        await this.refreshRequestIds()
    }

    private sortHandler = async (fieldName: string) => {
        const userId = this.checkUserId()
        const { sortField } = this.state;
        let sort = DescSort;
        if (sortField && sortField.name === fieldName && sortField.order === DescSort) {
            sort = AscSort;
        }
        this.props.fetchRequestAuthDataAction(`&SessionID=${this.props.sessionId}&userId=${userId}&filter_sort=${fieldName}&filter_sort_dir=${sort}`);
        await this.setState({ sortField: { name: fieldName, order: sort } });
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

    private checkMobileRequestHandler = (id: string) => {
        this.setState({ requestIds: [id] })
    }

    private paginationHandler = async (e: any, data: any) => {
        const userId = this.checkUserId()
        if (this.props.refreshLoading)
            await this.props.refreshAuthRequest(false);
        this.props.fetchRequestAuthDataAction(`&SessionID=${this.props.sessionId}&userId=${userId}&filter_page${data.activePage}`);
    }

    private checkAllHandler = () => {
        let requestIds = [...this.props.data].map((request: any) => request.id);
        if (this.state.requestIds.length === requestIds.length) {
            requestIds = [];
        }
        this.setState({ requestIds })
    }

    private viewRequestCancel = () => {
        this.setState({ viewRequest: false });
    }

    private selectRequest = (request: any) => {
        const formData = formDataRequestFormat([{ filter_data: { id: request.id } }], this.props.sessionId);
        this.props.getRequestAction(formData)
    }

    private refreshRequestIds = () => {
        this.setState({ requestIds: [] })
    }
    private viewRequestHandler = () => {
        if (this.state.requestIds.length === 1) {
            this.setState({
                viewRequest: true,
            })
            const formData = formDataRequestFormat([{ filter_data: { id: this.state.requestIds } }], this.props.sessionId);
            this.props.getRequestAction(formData)
        }
    }

    private findHandler = (query: string) => {
        const userId = this.checkUserId()
        this.props.fetchRequestAuthDataAction(`&SessionID=${this.props.sessionId}&userId=${userId}&search=${query}`);
    }

    private cancelSearchHandler = () => {
        const userId = this.checkUserId()
        this.props.fetchRequestAuthDataAction(`&SessionID=${this.props.sessionId}&userId=${userId}`);
    }

    private resetAutorizeHandler = () => {
        const userId = this.checkUserId()
        this.props.resetAutorizeAction()
        this.props.fetchRequestAuthDataAction(`&SessionID=${this.props.sessionId}&userId=${userId}`);
    }

    private sortHandlerMobile = (direction: string, field: string) => {
        const userId = this.checkUserId()
        this.props.fetchRequestAuthDataAction(`&SessionID=${this.props.sessionId}&userId=${userId}&filter_sort=${field}&filter_sort_dir=${direction}`);
    }
    

    render() {
        const {
            data,
            sessionId,
            request,
            isLoading,
            error,
            pager,
            requestError,
            requestLoading,
            requestData,
            authtorizationLoading,
            user,
            approved,
            declined,
            approveDeclineError,
            lang,
            intl
        } = this.props;
        const { sortField, requestIds, viewRequest, width } = this.state;
        const actionsPanel = <ActionsPanel
            cancelSelection={this.viewRequestCancel}
            viewRequestHandler={this.viewRequestHandler}
            cancel={this.state.viewRequest}
            view={requestIds.length === 1}
            sessionId={sessionId}
            requestData={requestData}
            authorize={Boolean(requestIds.length)}
            authHandler={() => this.authtorizeDeclineRequest(true)}
            decline={Boolean(requestIds.length)}
            declineHandler={() => this.authtorizeDeclineRequest(false)}
        />
        const tableHeader = <TableHeaderText sortField={sortField} titleKey="authRequests"  sortHandler={this.sortHandler} columns={displayColumns}  />

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
        const isMobile = width <= mobileResulution;
        let modalProps: { [index: string]: any } = {}
        if (approved) {
            modalProps.icon = <IconApproveModal />
            modalProps.status = intl.formatMessage({ id: `requests.approved`})
            modalProps.message = intl.formatMessage({ id: `requests.approved_message`})
        } else if (declined) {
            modalProps.icon = <IconDeclineModal />
            modalProps.status = intl.formatMessage({ id: `requests.declined`})
            modalProps.message = intl.formatMessage({ id: `requests.declined_message`})
        } else if (Boolean(approveDeclineError)) {
            modalProps.icon = <IconError />
            modalProps.status = intl.formatMessage({ id: `requests.failed`})
            modalProps.message = intl.formatMessage({ id: `requests.failed_message`})
        }

        let breadCrumbs: object = {}
        if(isObject(user) && this.props.path !== PendingRequestsPath) {
            breadCrumbs = <Breadcrumbs crumbs={RequestsCrumbs} customCrumb={user.full_name} customCrumbRoute={`/user/${user.id}`} lastCrumb={intl.formatMessage({ id: `global.pending_requests`})} />
        } else {
            breadCrumbs = <Breadcrumbs crumbs={PendingRequestsCrumb} lastCrumb={intl.formatMessage({ id: `global.pending_requests`})} />
        }

        return (
            <PendingRequestsStyled>
                {!isMobile && <PendingRequestHeader icons={actionsPanel} isMobile={isMobile} mobileTitle={intl.formatMessage({ id: `global.pending_requests`})} />}
                {!isMobile &&
                    <ContentBlock>
                        <PendingRequestsSection>
                        <Modal show={approved || Boolean(approveDeclineError) || declined} modalClosed={() => { }} >
                            <ModalContent
                                accept={this.resetAutorizeHandler}
                                icon={modalProps.icon}
                                status={modalProps.status}
                                message={modalProps.message}
                            />
                        </Modal>
                        { breadCrumbs }
                        <TitleWithSearch title={intl.formatMessage({ id: `global.pending_requests`})} placeholder={intl.formatMessage({ id: `users.find_employee`})} findHandler={this.findHandler} onCancel={this.cancelSearchHandler}  />
                        <ModalContainer>
                            {viewRequest &&
                                <ViewRequest
                                    request={request}
                                    cancelHandler={this.viewRequestCancel}
                                    requestLoading={requestLoading}
                                    requestError={requestError}
                                    selectRequest={this.selectRequest}
                                    requests={data}
                                    lang={lang}
                                />}
                        </ModalContainer>
                        <MainContent
                            tableBody={tableBody}
                            tableHeader={tableHeader}
                            isLoading={isLoading || authtorizationLoading}
                            error={error}
                            paginationHandler={this.paginationHandler}
                            pager={pager}
                            selected={true}
                            checkAllHandler={this.checkAllHandler}
                            checked={data.length === requestIds.length}
                            colspan={displayColumns.length + 1}
                        />
                        </PendingRequestsSection>
                    </ContentBlock>}
                {isMobile &&
                    <PendingRequestsMobile
                        requests={data}
                        findHandler={this.findHandler}
                        isLoading={isLoading || authtorizationLoading}
                        onCancel={this.cancelSearchHandler}
                        approveDecline={this.authtorizeDeclineRequest}
                        selectRequestHandler={this.checkMobileRequestHandler}
                        approved={approved}
                        declined={declined}
                        approveDeclineError={approveDeclineError}
                        resetAutorizeAction={this.resetAutorizeHandler}
                        modalProps={modalProps} 
                        sortHandler={this.sortHandlerMobile}
                        error={error}
                    />
                }
            </PendingRequestsStyled>
        )
    }
}


export default injectIntl(connected(RequestAuthorizations));