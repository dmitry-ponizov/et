import React, { Component } from 'react'
import { ProcessedDataStyled, Header, Title, RightPanel, DatePickerBlock, Label, Dash, Bars } from './styled';
import DatePickerComponent from '../../../components/UI/DatePicker';
import Bar from './Bar';
import { Props } from './types';
import LoaderComponent from '../../../components/UI/Loader/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { timeConverter } from '../../../utils/index';

class ProcessedData extends Component<Props & InjectedIntlProps> {
    
    private getTranslate = (message: string) => {
        return this.props.intl.formatMessage({ id: `global.${message}` })
    }

    render() {
        const { changeDateFrom, changeDateTo, fromDate, toDate, processedData, loading, lang } = this.props;
        return (
            <ProcessedDataStyled>
                <Header>
                    <Title>{this.getTranslate('attendance_kpis')}</Title>
                    <RightPanel>
                        <DatePickerBlock>
                            <Label>{this.getTranslate('from')}</Label>
                            <DatePickerComponent lang={lang} type="user" selectedDate={fromDate} changeDateHandler={changeDateFrom} />
                        </DatePickerBlock>
                        <Dash>-</Dash>
                        <DatePickerBlock>
                            <Label>{this.getTranslate('to')}</Label>
                            <DatePickerComponent lang={lang} type="user" selectedDate={toDate} changeDateHandler={changeDateTo} />
                        </DatePickerBlock>
                    </RightPanel>
                </Header>
                {processedData &&
                    <Bars>
                        <Bar color="#1BA953" title={this.getTranslate('working_hours')} value={timeConverter(processedData.working_seconds)} />
                        <Bar color="#FF7142" title={this.getTranslate('excuse_leaves')} value={processedData.leaves_count} />
                        <Bar color="#F93139" title={this.getTranslate('absence_days')} value={processedData.absence_count} />
                        <Bar color="#FFCA00" title={this.getTranslate('vacations')} value={processedData.vacation_count} />
                        <Bar color="#FF6D73" title={this.getTranslate('pending_requests')} value={processedData.pendingRequests} />
                    </Bars>}
                {loading ? <LoaderComponent margin="120px" /> : ''}
            </ProcessedDataStyled>
        )
    }
}

export default injectIntl(ProcessedData);

