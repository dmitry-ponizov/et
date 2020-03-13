import React, { useEffect } from 'react';
import { Props } from './types';
import { useWindowSize } from '../../../hooks/index';
import { mobileResulution } from '../../../constants/common';
import { connected } from './connect';
import AbsentEmployeesMobile from './Mobile/index';
import Header from '../../../components/Header';
import { ContentBlock } from '../../../styledTheme/globalStyles';
import Breadcrumbs from '../../../components/UI/Breadcrumbs';
import { TeamListCrumbs } from '../constants';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Title } from './styled';
import { absentEmployeesColumns } from './constants';
import TableHeaderText from '../../../components/UI/Table/TableHeader/Text/index';
import TableData from '../TableData';
import MainContent from '../../../components/MainContent';



const AbsentEmployees: React.FunctionComponent<Props & InjectedIntlProps> = ({
    setCurrentPageAction,
    absentEmployees,
    getAbsentEmployeesListAction,
    isLoading,
    error,
    sessionId,
    intl
}) => {

    const size = useWindowSize();
    const isMobile = size.width ? size.width < mobileResulution : false;

    useEffect(() => {
        setCurrentPageAction('/team')
        if (!absentEmployees) { getAbsentEmployeesListAction() }
    }, [getAbsentEmployeesListAction, absentEmployees, setCurrentPageAction])

    const goToUserProfile = () => { }

    const tableHeader = <TableHeaderText titleKey="users" columns={absentEmployeesColumns} />

    let tableBody: React.ReactElement[] | null = null;
    if (absentEmployees) {
        tableBody = absentEmployees.map((row: any, index: number) => (
            <TableData
                key={index}
                cells={row}
                fields={absentEmployeesColumns}
                clickRowHandler={goToUserProfile}
            />
        ));
    }
 
    return (
        <div>
            {isMobile ?
                <AbsentEmployeesMobile
                    absentEmployees={absentEmployees}
                    isLoading={isLoading}
                    error={error}
                    sessionId={sessionId}
                /> :
                <div>
                    <Header  isMobile={false} />
                    <ContentBlock>
                        <Breadcrumbs crumbs={TeamListCrumbs} lastCrumb={intl.formatMessage({ id: `team.absent_employees_today` })} />
                        <Title>{intl.formatMessage({ id: `team.absent_employees_today` })}</Title>
                        <MainContent
                            tableBody={tableBody}
                            tableHeader={tableHeader}
                            isLoading={isLoading}
                            error={error}
                            colspan={absentEmployeesColumns.length}
                        />
                    </ContentBlock>
                </div>
            }
        </div>
    );
};

export default connected(injectIntl(AbsentEmployees));
