import React, { useEffect } from 'react';
import { EmployeesOnVacationSection } from './styled';
import { Props } from './types';
import { useWindowSize } from '../../../hooks/index';
import { mobileResulution } from '../../../constants/common';
import EmployeesOnVacationMobile from './Mobile/index';
import { connected } from './connect';
import Header from '../../../components/Header';
import { ContentBlock } from '../../../styledTheme/globalStyles';
import { Title } from '../TotalAttendance/styled';
import { TeamListCrumbs } from '../constants';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Breadcrumbs from '../../../components/UI/Breadcrumbs';
import { employeesOnVacationColumns } from './constants';
import TableHeaderText from '../../../components/UI/Table/TableHeader/Text/index';
import TableData from '../TableData';
import MainContent from '../../../components/MainContent';


const EmployeesOnVacation: React.FunctionComponent<Props & InjectedIntlProps> = ({
    setCurrentPageAction,
    onVacation,
    getEmployeesOnVacationListAction,
    isLoading,
    error,
    sessionId,
    intl
}) => {
    const size = useWindowSize();
    const isMobile = size.width ? size.width < mobileResulution : false;

    useEffect(() => {
        setCurrentPageAction('/team')
        if (!onVacation) { getEmployeesOnVacationListAction() }
    }, [getEmployeesOnVacationListAction, onVacation, setCurrentPageAction])

    const goToUserProfile = () => { }
    
    const tableHeader = <TableHeaderText titleKey="users" columns={employeesOnVacationColumns} />
    
    let tableBody: React.ReactElement[] | null = null;
    if (onVacation) {
        tableBody = onVacation.map((row: any, index: number) => (
            <TableData
                key={index}
                cells={row}
                fields={employeesOnVacationColumns}
                clickRowHandler={goToUserProfile}
            />
        ));
    }

    return (
        <EmployeesOnVacationSection>
            {isMobile ?
                <EmployeesOnVacationMobile
                    onVacation={onVacation}
                    isLoading={isLoading}
                    error={error}
                    sessionId={sessionId}
                /> :
            <div>
                <Header isMobile={false} />
                <ContentBlock>
                    <Breadcrumbs crumbs={TeamListCrumbs} lastCrumb={intl.formatMessage({ id: `team.employees_on_vacation`})}/>
                    <Title>{intl.formatMessage({ id: `team.employees_on_vacation`})}</Title>
                    <MainContent
                        tableBody={tableBody}
                        tableHeader={tableHeader}
                        isLoading={isLoading}
                        error={error}
                        colspan={employeesOnVacationColumns.length}
                    />
                </ContentBlock>
            </div>
            }
        </EmployeesOnVacationSection>
    );
};

export default connected(injectIntl(EmployeesOnVacation));
