import React, { Component } from 'react';
import { NewRequestStyled, Title, SelectsBlock, Header, Dropdowns, RightDropdowns, DateTimeFields, Buttons } from './styled';
import { IconClose } from '../../../components/UI/SvgIcons/icon-close';
import FilterDropDown from '../../../components/UI/FilterDropdown/index';
import FilterDatePicker from '../../../components/UI/FilterDatePicker/index';
import { Props, State } from './types';
import { typeRequest, typesExtraDay, shiftRequest, shiftTableColumns, typesExtraDayWithTicket, withAbsencePolicy, withPlaceType, withDateTo, withShift, withUserShift, withTimePicker, punchStatuses, withPunchStatus, withTimePicker2, withUsers, defaultVacationAbsencePolicy, defaultHourlyAbsencePolicy, withSchedules, withAnotherEmployee, withFillInUsers, withDatepicker, withSchedules2 } from './constants';
import { formDataRequestFormat, formatMonthTitle, isRtl } from '../../../utils/index';
import { connected } from './connect';
import FilterDropDownTabled from '../../../components/UI/FilterDropdownTabled/index';
import FilterInput from '../../../components/UI/FilterInput/index';
import produce, { Draft } from 'immer';
import LoaderComponent from '../../../components/UI/Loader/index';
import { absencePoliciesRequest, hourlyAbsencePoliciesRequest, fillInUserRequest, approvalDelegationUser, employeesRequest } from '../constants';
import FilterTimePicker from '../../../components/UI/FilterTimePicker/index';
import FilterDropDownMultiTabled from '../../../components/UI/FilterDropdownMultiTable'
import moment from 'moment';
import FilterCheckbox from '../../../components/UI/FilterCheckbox/index';
import { getDatePickerTitle, getTimePickerTitle, getSecondTimePickerTitle } from './helpers';
import { employeesColumns, CommonType } from '../../../constants/common';
import { injectIntl } from 'react-intl';
import SearchButton from '../../../components/UI/SearchButton/index';
import { IconCancelFilterBtn } from '../../../components/UI/SvgIcons/icon-cancel-filter-btn';
import { IconSendFilters } from '../../../components/UI/SvgIcons/icon-send-filters';
import { RequestsPath } from '../../../routes/constants';
import Backdrop from '../../../components/UI/BackDrop/index';
import FilterTextarea from '../../../components/UI/FilterTextarea';


class NewRequest extends Component<Props, State > {
    constructor(props: Props) {
        super(props);
        this.state = {
            formData: {
                type_id: '30',
                apply_for_user_id: '',
                shift_id: '',
                shift2_id: false,
                ticket_id: false,
                date_stamp1: formatMonthTitle(new Date()),
                date_stamp2: formatMonthTitle(new Date()),
                message: false,
                job_location_id: '10',
                absence_policy_id2: defaultVacationAbsencePolicy,
                time_stamp1: moment().format('HH:mm'),
                time_stamp2: moment().format('HH:mm'),
                punch_status_id: '10',
                users: [],
                user_id: false,
                schedule: '',
                another_employee: false,
                fill_in_user_id: '',
                schedule2: ''
            },
            selectedDirectManager: '',
        };
    }

    componentDidMount() {
        if (!Boolean(Object.keys(this.props.requestTypes).length)) {
            this.getRequestTypes()
        }
        if (!Boolean(this.props.employees.length)) {
            this.getEmployees()
        }

        this.getDirectManager()

        if (!Boolean(this.props.shifts.length)) {
            this.getShifts()
        }
        if (!Boolean(Object.keys(this.props.absencePolicies).length)) {
            this.getAbsencePolicies()
        }
        if (!Boolean(Object.keys(this.props.hourlyAbsencePolicies).length)) {
            this.getHourlyAbsencePolicies()
        }
    }


    private getHourlyAbsencePolicies = () => {
        const formData = formDataRequestFormat(hourlyAbsencePoliciesRequest, this.props.sessionId);
        this.props.getHourlyAbsencePoliciesAction(formData)
    }

    private getAbsencePolicies = () => {
        const formData = formDataRequestFormat(absencePoliciesRequest, this.props.sessionId);
        this.props.getAbsencePoliciesAction(formData)
    }


    public getDirectManager = () => {
        if(this.state.formData.apply_for_user_id) {
            this.reportToUser(this.state.formData.apply_for_user_id);
        }
    }
    
    public reportToUser = (id: string) => {
        const formData = formDataRequestFormat([{ filter_data: { id } }], this.props.sessionId);
        this.props.getRequestDirectManager(formData, 'report');
    }
    public static getDerivedStateFromProps: React.GetDerivedStateFromProps<Props, State> = (props, state) => {
        let newState = {
            formData: {
                ...state.formData,
                apply_for_user_id: state.formData.apply_for_user_id,
                user_id: state.formData.user_id,
            },
            selectedDirectManager: state.selectedDirectManager,

        }
        if (props.userId !== state.formData.apply_for_user_id) {
            newState = {
                formData: {
                    ...state.formData,
                    apply_for_user_id: props.userId,
                    user_id: props.userId,
                },
                selectedDirectManager: Object.keys(props.directManager)[0]
            }
            return newState;
        }
        return newState;
    };


    public createFormData = () => {
        return formDataRequestFormat(
            employeesRequest,
            this.props.sessionId
        );
    }
    private getEmployees = () => {
        const formData = this.createFormData()
        this.props.fetchEmployeesDataAction(formData)
    }
    private getRequestTypes = () => {
        const formData = formDataRequestFormat(typeRequest, this.props.sessionId);
        this.props.getRequestTypesAction(formData);
    }

    private getShifts = () => {
        const formData = formDataRequestFormat(shiftRequest, this.props.sessionId);
        this.props.getRequestShiftsAction(formData);
    }
    private selectEmployee = (employee: CommonType) => {
        if (this.state.formData.type_id === '45') {
            this.getUserSchedules(this.state.formData.type_id, employee.id);
        }
        const apply_for_user_id = produce(this.state, (draft: Draft<State>) => {
            draft.formData.apply_for_user_id = employee.id;
        });
        this.setState(apply_for_user_id, () => {
            this.validateFormData()
        });
        this.props.setUserIdAction(employee.id);
        this.reportToUser(employee.id)
    }
    private getUserSchedules = (typeId: string, userId: string | boolean) => {
        const formData = formDataRequestFormat([{ user_id: userId, type_id: typeId }], this.props.sessionId);
        this.props.getUserSchedulesByRequestTypeAction(formData)
    }
    private requestTypeHandler = (typeId: string) => {
        let absence_policy_id2 = defaultVacationAbsencePolicy;
        switch (typeId) {
            case '45':
                if (!Boolean(this.props.userSchedules.length)) {
                    this.getUserSchedules(typeId, this.state.formData.apply_for_user_id)
                }
                break;
            case '35':
                absence_policy_id2 = defaultHourlyAbsencePolicy
                break;
            case '50':
                this.getAnotherUsers()
                break;
            case '55':
                this.getUserSchedules(typeId, this.state.formData.apply_for_user_id);
                break;
            case '90':
                this.getEmployeesForApprovalDelecationType()
                break;
        }

        const type_id = produce(this.state, (draft: Draft<State>) => {
            draft.formData.type_id = typeId
            draft.formData.absence_policy_id2 = absence_policy_id2
        });

        this.setState(type_id, () => {
            this.validateFormData()
        });
    }
    private selectTypeExtraDay = (jobLocationId: string) => {
        const job_location_id = produce(this.state, (draft: Draft<State>) => {
            draft.formData.job_location_id = jobLocationId
        });
        this.setState(job_location_id, () => {
            this.validateFormData()
        });
    }


    private shiftHandler = (shift: any) => {
        const shift2_id = produce(this.state, (draft: Draft<State>) => {
            draft.formData.shift2_id = shift.id
        });
        this.setState(shift2_id, () => {
            this.validateFormData()
        });
    }

    private ticketIdHandler = (event: any) => {
        const ticket_id = produce(this.state, (draft: Draft<State>) => {
            draft.formData.ticket_id = event.target.value
        });
        this.setState(ticket_id, () => {
            this.validateFormData()
        })
    }
    private createUserTitle = (userId: string | boolean) => {
        const employee: any = this.props.employees.find((employee: any) => employee.id === userId)
        if (employee) {
            return `${employee.employee_number} | ${employee.full_name}`
        }
        return `${this.props.user.employee_number} | ${this.props.user.full_name}`
        
    }

    private createShiftTitle = (shiftId: string | boolean) => {
        const shift: any = this.props.shifts.find((shift: any) => shift.id === shiftId)
        if (shift) {
            return shift.name;
        }
    }
    private changeDateHandler = (date: any) => {
        const date_stamp1 = produce(this.state, (draft: Draft<State>) => {
            draft.formData.date_stamp1 = date
        });
        this.setState(date_stamp1, () => {
            this.validateFormData()
        })
    }
    private messageHandler = (event: any) => {
        const message = produce(this.state, (draft: Draft<State>) => {
            draft.formData.message = event.target.value
        });
        this.setState(message)
    }

    private validateFormData = () => {
        const formData = formDataRequestFormat([{ ...this.state.formData }], this.props.sessionId);
        this.props.validateRequestAction(formData)
        this.props.setNewRequestRequestDataAction([{ ...this.state.formData }])
        if (this.state.formData.type_id === '30') {
            const shiftsFormData = formDataRequestFormat([{ filter_data: { user_id: this.state.formData.apply_for_user_id } }], this.props.sessionId);
            this.props.getUserShiftsForVacationAction(shiftsFormData);
        }
    }

    private selectAbsencePolicy = (absencePolicyId: string) => {
        const absence_policy_id2 = produce(this.state, (draft: Draft<State>) => {
            draft.formData.absence_policy_id2 = absencePolicyId
        });
        this.setState(absence_policy_id2, () => {
            this.validateFormData()
        });
    }

    private changeDateToHandler = (date: any) => {
        const date_stamp2 = produce(this.state, (draft: Draft<State>) => {
            draft.formData.date_stamp2 = date
        });
        this.setState(date_stamp2, () => {
            this.validateFormData()
        })
    }

    private changeTimeHandler = (time: string) => {
        const time_stamp1 = produce(this.state, (draft: Draft<State>) => {
            draft.formData.time_stamp1 = time
        });
        this.setState(time_stamp1, () => {
            this.validateFormData()
        })
    }

    private punchStatusHandler = (statusId: string) => {
        const punch_status_id = produce(this.state, (draft: Draft<State>) => {
            draft.formData.punch_status_id = statusId
        });

        this.setState(punch_status_id, () => {
            this.validateFormData()
        })
    }

    private changeSecondTimeHandler = (time: string) => {
        const time_stamp2 = produce(this.state, (draft: Draft<State>) => {
            draft.formData.time_stamp2 = time
        });
        this.setState(time_stamp2, () => {
            this.validateFormData()
        })
    }

    private selectUserHandler = (id: string) => {
        let userIds = [...this.state.formData.users];

        if (!userIds.includes(id)) {
            userIds.push(id)
        } else {
            userIds = userIds.filter((rId: string) => rId !== id)
        }
        const users = produce(this.state, (draft: Draft<State>) => {
            draft.formData.users = userIds
        });
        this.setState(users, () => {
            this.validateFormData()
        })
    }


    private checkAllUsersHandler = () => {
        let userIds = [...this.props.employees].map((employee: any) => employee.id);
        if (this.state.formData.users.length === userIds.length) {
            userIds = [];
        }
        const users = produce(this.state, (draft: Draft<State>) => {
            draft.formData.users = userIds
        });
        this.setState(users, () => {
            this.validateFormData()
        })
    }

    private anotherEmployeeHandler = (checked: boolean) => {
        const another_employee = produce(this.state, (draft: Draft<State>) => {
            draft.formData.another_employee = checked
        });
        this.setState(another_employee, () => {
            this.validateFormData()
        })
        if (!Boolean(Object.keys(this.props.anotherUsers).length)) {
            this.getAnotherUsers()
        }
    }

    private getAnotherUsers = () => {
        const formData = formDataRequestFormat(fillInUserRequest, this.props.sessionId);
        this.props.getAnotherUsersRequestAction(formData)
    }

    private getEmployeesForApprovalDelecationType = () => {
        const formData = formDataRequestFormat(approvalDelegationUser, this.props.sessionId);
        this.props.getAnotherUsersRequestAction(formData)
    }

    private changeShiftUserHandler = (userId: string) => {
        this.getUserSchedules(this.state.formData.type_id, userId);

        const fill_in_user_id = produce(this.state, (draft: Draft<State>) => {
            draft.formData.fill_in_user_id = userId;
        });
        this.setState(fill_in_user_id, () => {
            this.validateFormData()
        });
    }

    private selectShiftHandler = (shiftId: string) => {
        const shift_id = produce(this.state, (draft: Draft<State>) => {
            draft.formData.shift_id = shiftId;
        });
        this.setState(shift_id, () => {
            this.validateFormData()
        });
    }

    private scheduleHandler = (scheduleId: string) => {
        const schedule = produce(this.state, (draft: Draft<State>) => {
            draft.formData.schedule = scheduleId;
        });
        this.setState(schedule, () => {
            this.validateFormData()
        });
    }
    private schedule2Handler = (scheduleId: string) => {
        const schedule2 = produce(this.state, (draft: Draft<State>) => {
            draft.formData.schedule2 = scheduleId;
        });
        this.setState(schedule2, () => {
            this.validateFormData()
        });
    }

    private changeDirectManager = (userId: string) => {
        this.setState({ selectedDirectManager: userId })
    }

    private getTranslate = (option: string) => {
        return this.props.intl.formatMessage({ id: `requests.${option}` })
    }

    private paginationHandler = (e: any, data: any) => {
        let request: any = {...employeesRequest};
        request[0]['filter_page'] = data.activePage;
        const formData = formDataRequestFormat(request, this.props.sessionId);
        this.props.fetchEmployeesDataAction(formData)
    }
    

    render() {
        const {
            cancelHandler,
            requestTypes,
            employees,
            userId,
            typeRequestsLoading,
            employeeLoading,
            directManager,
            directManagerLoading,
            shifts,
            shiftsLoading,
            validateError,
            validateLoading,
            absencePolicies,
            absencePoliciesLoading,
            userShifts,
            hourlyAbsencePolicies,
            userSchedules,
            userScheduleLoading,
            anotherUsers,
            anotherUsersLoading,
            userShiftsLoading,
            lang,
            sendRequest,
            path,
            successNewRequestValidation,
            isMobile,
            windowParams,
            user,
            employeesPager,
            authUserId
        } = this.props;
        const { formData:
            { apply_for_user_id,
                type_id,
                shift2_id,
                ticket_id,
                message,
                date_stamp1,
                job_location_id,
                absence_policy_id2,
                date_stamp2,
                shift_id,
                time_stamp1,
                punch_status_id,
                time_stamp2,
                users,
                schedule,
                another_employee,
                fill_in_user_id,
                schedule2
            } } = this.state;
        const userTitle = this.createUserTitle(apply_for_user_id)
        const shift2Title = this.createShiftTitle(shift2_id)
        const isApplyFor = user.id === authUserId
        const rtl = isRtl(lang)
        return (
            <>
                {!isMobile && <Backdrop transparent={false} clicked={cancelHandler} show={true} />}
                <NewRequestStyled windowParams={windowParams}>
                    <Header>
                        <Title>{this.getTranslate('new_request')} {user && `as ${user.full_name}`}</Title>
                        <div onClick={cancelHandler}>
                            <IconClose />
                        </div>
                    </Header>
                    <SelectsBlock>
                        <Dropdowns>
                            <FilterDropDown
                                title={this.getTranslate('request_type')}
                                selected={type_id}
                                clickHandler={this.requestTypeHandler}
                                data={requestTypes}
                                loading={typeRequestsLoading}
                                name="type_id"
                                error={validateError}
                                rtl={rtl}
                            />
                            {isApplyFor && <FilterDropDownTabled
                                selectHandler={this.selectEmployee}
                                selectedId={userId}
                                selected={userTitle}
                                title={this.getTranslate('apply_for')}
                                data={employees}
                                columns={employeesColumns}
                                loading={employeeLoading}
                                height="550px"
                                error={validateError}
                                name="apply_for_user_id"
                                pager={employeesPager}
                                paginationHandler={this.paginationHandler}
                                rtl={rtl}
                            />}
                            <FilterDropDown
                                loading={directManagerLoading}
                                clickHandler={this.changeDirectManager}
                                selected={Object.keys(directManager)[0]}
                                title={this.getTranslate('direct_manager')}
                                data={directManager}
                                name="direct_manager"
                                error={validateError}
                                rtl={rtl}
                            />
                            {(withFillInUsers.includes(type_id) || another_employee) &&
                                <FilterDropDown
                                    title={this.getTranslate('employee')}
                                    selected={fill_in_user_id}
                                    clickHandler={this.changeShiftUserHandler}
                                    data={anotherUsers}
                                    loading={anotherUsersLoading}
                                    name="fill_in_user_id"
                                    error={validateError}
                                    rtl={rtl}
                                />}
                            {withUsers.includes(type_id) &&
                                <FilterDropDownMultiTabled
                                    selectHandler={this.selectUserHandler}
                                    selectedIds={users}
                                    title={this.getTranslate('users')}
                                    data={employees}
                                    columns={employeesColumns}
                                    loading={employeeLoading}
                                    height="623px"
                                    name="users"
                                    checkAllHandler={this.checkAllUsersHandler}
                                    left="0px"
                                    error={validateError}
                                    checkedAll={employees.length === users.length}
                                    rtl={rtl}
                                />}
                            {withPunchStatus.includes(type_id) &&
                                <FilterDropDown
                                    loading={false}
                                    clickHandler={this.punchStatusHandler}
                                    selected={punch_status_id}
                                    title={this.getTranslate('punch_status')}
                                    data={punchStatuses}
                                    error={validateError}
                                    name="punch_status_id"
                                    rtl={rtl}
                                />}
                            {withPlaceType.includes(type_id) &&
                                <FilterDropDown
                                    loading={false}
                                    clickHandler={this.selectTypeExtraDay}
                                    selected={job_location_id}
                                    title={this.getTranslate('type')}
                                    data={typesExtraDay}
                                    name="job_location_id"
                                    error={validateError}
                                    rtl={rtl}
                                />}
                            {withAbsencePolicy.includes(type_id) &&
                                <FilterDropDown
                                    loading={absencePoliciesLoading}
                                    clickHandler={this.selectAbsencePolicy}
                                    selected={absence_policy_id2}
                                    title={this.getTranslate('type')}
                                    data={type_id === '35' ? hourlyAbsencePolicies : absencePolicies}
                                    name="absence_policy_id2"
                                    error={validateError}
                                    rtl={rtl}
                                />}

                            {withSchedules.includes(type_id) &&
                                <FilterDropDown
                                    loading={userScheduleLoading}
                                    clickHandler={this.scheduleHandler}
                                    selected={schedule}
                                    title={this.getTranslate('schedule')}
                                    data={userSchedules}
                                    name="schedule"
                                    error={validateError}
                                    rtl={rtl}
                                />}
                            {withSchedules2.includes(type_id) && another_employee &&
                                <FilterDropDown
                                    loading={userScheduleLoading}
                                    clickHandler={this.schedule2Handler}
                                    selected={schedule2}
                                    title={this.getTranslate('employee_shift')}
                                    data={userSchedules}
                                    name="schedule2"
                                    error={validateError}
                                    rtl={rtl}
                                />}
                            {withUserShift.includes(type_id) &&
                                <FilterDropDown
                                    loading={userShiftsLoading}
                                    clickHandler={this.selectShiftHandler}
                                    selected={shift_id}
                                    title={this.getTranslate('shift')}
                                    data={userShifts}
                                    name="shift_id"
                                    error={validateError}
                                    rtl={rtl}
                                />}
                            {withShift.includes(type_id) && !another_employee &&
                                <FilterDropDownTabled
                                    loading={shiftsLoading}
                                    selectHandler={this.shiftHandler}
                                    selectedId={shift2_id}
                                    selected={shift2Title}
                                    title={this.getTranslate('shift')}
                                    data={shifts}
                                    columns={shiftTableColumns}
                                    width="360px"
                                    height="520px"
                                    name="shift2_id"
                                    error={validateError}
                                    rtl={rtl}
                                />}
                        </Dropdowns>
                        <RightDropdowns rtl={rtl}>
                            {(!another_employee && withDatepicker.includes(type_id)) &&
                                <DateTimeFields>
                                    <FilterDatePicker
                                        title={this.getTranslate(getDatePickerTitle(type_id))}
                                        changeDateHandler={this.changeDateHandler}
                                        name="date_stamp1"
                                        error={validateError}
                                        selectedDay={date_stamp1}
                                        lang={lang}
                                        rtl={rtl}
                                    />
                                </DateTimeFields>}
                            {withDateTo.includes(type_id) && <DateTimeFields>
                                <FilterDatePicker
                                    title={this.getTranslate('date_to')}
                                    changeDateHandler={this.changeDateToHandler}
                                    name="date_stamp2"
                                    error={validateError}
                                    selectedDay={date_stamp2}
                                    lang={lang}
                                    rtl={rtl}
                                />
                            </DateTimeFields>}
                            {withTimePicker.includes(type_id) &&
                                <FilterTimePicker
                                    title={this.getTranslate(getTimePickerTitle(type_id))}
                                    selectedTime={time_stamp1}
                                    changeTimeHandler={this.changeTimeHandler}
                                    name="time_stamp1"
                                    error={validateError}
                                    rtl={rtl}
                                />}
                            {withTimePicker2.includes(type_id) &&
                                <FilterTimePicker
                                    title={this.getTranslate(getSecondTimePickerTitle(type_id))}
                                    selectedTime={time_stamp2}
                                    changeTimeHandler={this.changeSecondTimeHandler}
                                    name="time_stamp2"
                                    error={validateError}
                                    rtl={rtl}
                                />}
                            {typesExtraDayWithTicket.includes(job_location_id) ||
                                typesExtraDayWithTicket.includes(absence_policy_id2) ?
                                <FilterInput
                                    changeHandler={this.ticketIdHandler}
                                    title={this.getTranslate('ticket_id')}
                                    value={ticket_id}
                                    name="ticket_id"
                                    error={validateError}
                                    rtl={rtl}
                                />
                                : ''}
                            {withAnotherEmployee.includes(type_id) &&
                                <FilterCheckbox
                                    checked={another_employee}
                                    title={this.getTranslate('another_employee')}
                                    changeHandler={this.anotherEmployeeHandler}
                                    name="another_employee"
                                    error={validateError}
                                    rtl={rtl}
                                />}

                            <FilterTextarea
                                messageHandler={this.messageHandler}
                                title={this.getTranslate('reason_message')}
                                placeholder={this.getTranslate('reason_message')}
                                value={message}
                                validateHandler={this.validateFormData}
                                rtl={rtl}
                            />
                            {path !== RequestsPath &&
                                <Buttons>
                                    {!isMobile &&
                                        <SearchButton title={this.getTranslate('cancel')} icon={<IconCancelFilterBtn />} fillable={false} clickHandler={cancelHandler} />}
                                    <SearchButton title={this.getTranslate('send')} icon={<IconSendFilters active={successNewRequestValidation} />} clickHandler={sendRequest} fillable={successNewRequestValidation} />
                                </Buttons>}
                        </RightDropdowns>
                    </SelectsBlock>
                    {validateLoading ? <LoaderComponent /> : ''}
                </NewRequestStyled>
            </>
        )
    }
}

export default injectIntl(connected(NewRequest));