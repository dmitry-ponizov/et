import React, { Component } from 'react'
import { FiltersContainer, Dropdowns, Buttons } from './styled';
import { IconSearch } from '../../../components/UI/SvgIcons/icon-search';
import SearchButton from '../../../components/UI/SearchButton/index';
import FilterDatePicker from '../../../components/UI/FilterDatePicker/index';
import { formDataRequestFormat, isRtl } from '../../../utils/index';
import { connected } from './connect';
import { Props } from './types';
import FilterDropDownMultiTabled from '../../../components/UI/FilterDropdownMultiTable'
import FilterMultiDropDown from '../../../components/UI/FilterMultiDropdown/index';
import { typeRequest } from '../../Requests/NewRequest/constants';
import { employeesColumns } from '../../../constants/common';
import { injectIntl } from 'react-intl';
import { employeesRequest } from '../../Requests/constants';

class RequestAuthFilters extends Component<Props> {
    componentDidMount() {
        if (!Boolean(this.props.employees.length)) {
            this.getEmployees()
        }
        if (!Boolean(Object.keys(this.props.requestTypes).length)) {
            this.getRequestTypes()
        }

    }

    
    private getRequestTypes = () => {
        const formData = formDataRequestFormat(typeRequest, this.props.sessionId);
        this.props.getRequestTypesAction(formData);
    }

    private getEmployees = () => {
        const formData = this.createFormData()
        this.props.fetchEmployeesDataAction(formData)
    }

    private createFormData = () => {
        return formDataRequestFormat(
            employeesRequest,
            this.props.sessionId
        );
    }
    private selectEmployee = (id: string) => {
        let userIds = [...this.props.userIds];

        if (!userIds.includes(id)) {
            userIds.push(id)
        } else {
            userIds = userIds.filter((rId: string) => rId !== id)
        }
        this.props.changeFilterDataAction(userIds, 'user_id')
    }


    private checkAllEmployeesHandler = () => {
        let userIds = [...this.props.employees].map((employee: any) => employee.id);
        if (this.props.userIds.length === userIds.length) {
            userIds = [];
        }
        this.props.changeFilterDataAction(userIds, 'user_id')
    }

    
    private selectRequestType = (id: string) => {
        let requestIds = [...this.props.requestTypeIds];

        if (!requestIds.includes(id)) {
            requestIds.push(id)
        } else {
            requestIds = requestIds.filter((rId: string) => rId !== id)
        }
        this.props.changeFilterDataAction(requestIds, 'type_id')
    }
    private clearSearch = async () => {
        await this.props.clearFilterDataAction()
        // await this.props.fetchRequestAuthDataAction()
        await this.props.refreshRequestIds()
    }


    private applyFilters = () => {
        // this.props.fetchRequestAuthDataAction()
        this.props.refreshRequestIds()
    }

    private startDateHandler = (date: string) => {
        this.props.changeFilterDataAction(date, 'start_date')
    }

    private endDateHandler = (date: string) => {
        this.props.changeFilterDataAction(date, 'end_date')
   
    }
    private getTranslate = (option: string) => {
        return this.props.intl.formatMessage({ id: `requests.${option}` })
    }


    render() {
        const { 
            employees, 
            requestTypes, 
            typeRequestsLoading,
            employeeLoading, 
            userIds, 
            requestTypeIds, 
            startDate,
            endDate,
            lang
        } = this.props;
        const rtl = isRtl(lang)
        return (
            <FiltersContainer>
                <Dropdowns>
                    <FilterDropDownMultiTabled
                        selectHandler={this.selectEmployee}
                        selectedIds={userIds}
                        title={this.getTranslate('employee')}
                        data={employees}
                        columns={employeesColumns}
                        loading={employeeLoading}
                        height="623px"
                        name="employee"
                        checkAllHandler={this.checkAllEmployeesHandler}
                        left="0px"
                        checkedAll={employees.length === userIds.length}
                        rtl={rtl}
                    />
                    <FilterMultiDropDown
                        name="type"
                        loading={typeRequestsLoading}
                        title={this.getTranslate('type')}
                        clickHandler={this.selectRequestType}
                        data={requestTypes}
                        selectedIds={requestTypeIds}
                    />
                    <FilterDatePicker 
                         title={this.getTranslate('start_date')}
                        changeDateHandler={this.startDateHandler} 
                        name="start_date" 
                        selectedDay={startDate} 
                        lang={lang}
                        rtl={rtl}
                    />
                    <FilterDatePicker 
                         title={this.getTranslate('end_date')}
                        changeDateHandler={this.endDateHandler} 
                        name="end_date" 
                        selectedDay={endDate} 
                        lang={lang}
                        rtl={rtl}
                    />
                </Dropdowns>
                <Buttons>
                    <SearchButton  title={this.getTranslate('clear_search')} fillable={false} clickHandler={this.clearSearch} />
                    <SearchButton  title={this.getTranslate('search')} icon={<IconSearch />} clickHandler={this.applyFilters} fillable={true} />
                </Buttons>
            </FiltersContainer>
        )
    }
}
export default injectIntl(connected(RequestAuthFilters));