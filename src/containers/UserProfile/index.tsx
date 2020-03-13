import React, { Component } from 'react';
import { Props, State } from './types';
import { connected } from './connect';
import { regExp, UserCrumbs, GetAccrualBalanceRequest, windowParams, getUserDataRequest } from './constants';
import { formDataRequestFormat, isObject, formatMonthTitle, firstDayForMonth, isRtl } from '../../utils/index';
import { navigate } from '@reach/router';
import Header from '../../components/Header';
import {  HomePath } from '../../routes/constants';
import { ContentBlock } from '../../styledTheme/globalStyles';
import Breadcrumbs from '../../components/UI/Breadcrumbs/index';
import GeneralInfo from './Generalnfo/index';
import LoaderComponent from '../../components/UI/Loader/index';
import ExtraInfo from './ExtraInfo/index';
import Attendance from './Attendance/index';
import ProcessedData from './ProcessedData/index';
import Subordinates from './Subordinates';
import ErrorComponent from '../../components/UI/Error/index';
import { ModalContainer, UserStyled, UserContentBlock } from './styled';
import NewRequest from '../Requests/NewRequest';
import { mobileResulution } from '../../constants/common';
import GeneralInfoMobile from './Mobile/Screens/Generalnfo/index';

class User extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            newRequestShow: false,
            fromDate: firstDayForMonth(),
            toDate: formatMonthTitle(new Date()),
            width: window.innerWidth
        };
    }
    
    componentDidMount() {
        const id = this.checkId();
        if (this.props.user.id !== this.props.id && id && !(this.state.width <= mobileResulution)) {
            this.getUserData(id)
        }
        if(id && this.props.userIdAttendance !== this.props.id) {
            this.props.changeUserIdAttendanceAction(id)
            this.props.getTimeSheetForMonthAction(id)
        }
        this.props.setCurrentPageAction(this.props.path);
    }


    public componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    public componentDidUpdate(prevProps: Props, prevState: State) {
        if (prevProps.id !== this.props.id) {
            this.getUserData(this.props.id)
            this.props.getTimeSheetForMonthAction(this.props.id)
        }

        if(this.props.id && this.props.userIdAttendance !== this.props.id) {
            this.props.changeUserIdAttendanceAction(this.props.id)
        }
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    public handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    private checkId = () => {
        const { id } = this.props
        if (id && regExp.test(id)) {
            return id;
        } else {
            navigate(HomePath)
        }
    }
    private getBalance = () => {
        let requestData = GetAccrualBalanceRequest;
        const userId = this.props.id
        requestData[0]['filter_data']['user_id'] = userId;
        const formData = formDataRequestFormat(requestData, this.props.sessionId);
        this.props.getAvailableBalanceAction(formData)
    }

    private getUserData = async (id: string) => {
        let userRequest: any[] = [...getUserDataRequest];
        userRequest[0]['filter_data']['id'] = id
        const formData = formDataRequestFormat(userRequest, this.props.sessionId);
        await this.props.getUserDataAction(formData);
        this.getUserDetails(id)
    }

    private getUserDetails = async (id: string)  => {
        const { fromDate, toDate } = this.state;
        await this.getBalance();
        // await this.props.getTimeSheetForMonthAction(id)
        await this.props.getProcessedDataAction({ from: fromDate, to: toDate, userId: id, sessionId: this.props.sessionId })
        await this.props.getSubordinatesAction(id, '1', 10)
    }

    private newRequestHandler = () => {
        if(this.state.width <= mobileResulution) {
            navigate(`/user/${this.props.authUserId}/new-request`)
        }
        // if (this.props.successNewRequestValidation) {
            this.props.resetValidateRequest()
        // }
        this.setState({ newRequestShow: true })
    }

    private makeNewRequestHandler = () => {
        this.props.setUserIdAction(this.props.user.id)
        this.newRequestHandler()
    }


    private goToUserRequestHandler = async () => {
        await this.props.changeFilterDataAction([this.props.user.id], 'user_id')
        await navigate(`/user/${this.props.id}/pending-requests`)
    }
    

    private newRequestCancel = () => {
        this.setState({ newRequestShow: false })
    }

    private sendRequestHandler = () => {
        if (this.state.newRequestShow && this.props.successNewRequestValidation) {
            this.props.setNewRequestAction()
            this.newRequestCancel()
        }
    }
    

    private changeDateFromHandler = (date: any) => {
        this.setState({ fromDate: date })
        const { user, sessionId, getProcessedDataAction } = this.props;
        const { toDate } = this.state;
        getProcessedDataAction({ from: date, to: toDate, userId: user.id, sessionId })
    }

    private changeDateToHandler = (date: any) => {
        this.setState({ toDate: date })
        const { user, sessionId, getProcessedDataAction } = this.props;
        const { fromDate } = this.state;
        getProcessedDataAction({ from: fromDate, to: date, userId: user.id, sessionId })
    }

    private paginationHandler = (e: any, data: any) => {
        this.props.getSubordinatesAction(this.props.id, data.activePage, 10)
    }
    render() {
        const {
            path,
            user,
            isLoading,
            sessionId,
            error,
            getAvailableBalanceAction,
            availableBalance,
            processedData,
            loadingProcessedData,
            lang,
            subordinates,
            subordinatesLoading,
            subordinatesError,
            isLoadingAvailableBalance,
            errorAvailableBalance,
            id,
            totalRows,
            currentPage,
        } = this.props;
        const { newRequestShow, fromDate, toDate, width } = this.state;
        const isMobile = width <= mobileResulution;

        return (
            <UserStyled>
                <Header isMobile={isMobile}  mobileTitle={user.full_name} />
                {isObject(user) && !isMobile &&
                    <ContentBlock>
                        <UserContentBlock>               
                            <Breadcrumbs crumbs={UserCrumbs} lastCrumb={user.full_name} />
                            <ModalContainer>
                                {newRequestShow &&
                                    <NewRequest
                                        user={user}
                                        windowParams={windowParams}
                                        isMobile={false}
                                        cancelHandler={this.newRequestCancel}
                                        sendRequest={this.sendRequestHandler}
                                        path={path} />
                                }
                            </ModalContainer>
                            <GeneralInfo
                                user={user}
                                makeNewRequestHandler={this.makeNewRequestHandler}
                                sessionId={sessionId}
                                goToUserRequests={this.goToUserRequestHandler}
                                rtl={isRtl(lang)}
                            />
                            <ExtraInfo
                                user={user}
                                getAvailableBalance={getAvailableBalanceAction}
                                sessionId={sessionId}
                                availableBalance={availableBalance}
                                isLoading={isLoadingAvailableBalance}
                                error={errorAvailableBalance}
                            />
                            <Attendance />
                            <ProcessedData
                                changeDateFrom={this.changeDateFromHandler}
                                changeDateTo={this.changeDateToHandler}
                                fromDate={fromDate}
                                toDate={toDate}
                                sessionId={sessionId}
                                processedData={processedData}
                                loading={loadingProcessedData}
                                lang={lang}
                            />
                            <Subordinates
                                userId={user.id}
                                subordinates={subordinates}
                                loading={subordinatesLoading}
                                error={subordinatesError}
                                sessionId={sessionId}
                                totalRows={totalRows}
                                currentPage={currentPage}
                                paginationHandler={this.paginationHandler}
                                rtl={isRtl(lang)}
                            />
                            </UserContentBlock>
                        </ContentBlock>}
                    {isMobile  && <GeneralInfoMobile user={user} userId={id} sessionId={sessionId} />}
                    {isLoading ? <LoaderComponent margin="200px" /> : ''}
                    {error && !isLoading ? <ErrorComponent error={error} /> : ''}
            </UserStyled>
        )
    }
}


export default connected(User);