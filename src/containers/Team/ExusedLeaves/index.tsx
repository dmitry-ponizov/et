import React, { useEffect } from 'react';
import { Props } from './types';
import { useWindowSize } from '../../../hooks/index';
import { mobileResulution } from '../../../constants/common';
import { connected } from './connect';
import ExusedLeavesMobile from './Mobile/index';
import { ExusedLeavesStyled, Title } from './styled';
import Header from '../../../components/Header';
import { exusedLeavesColumns } from './constants';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import TableHeaderText from '../../../components/UI/Table/TableHeader/Text/index';
import TableData from '../TableData';
import { ContentBlock } from '../../../styledTheme/globalStyles';
import Breadcrumbs from '../../../components/UI/Breadcrumbs';
import { TeamListCrumbs } from '../constants';
import MainContent from '../../../components/MainContent';

const ExusedLeaves: React.FunctionComponent<Props & InjectedIntlProps> = ({
    setCurrentPageAction,
    exusedLeaves,
    getExusedLeavesListAction,
    isLoading,
    error,
    sessionId,
    intl
}) => {

    const size = useWindowSize();
    const isMobile = size.width ? size.width < mobileResulution : false;

    useEffect(() => {
        setCurrentPageAction('/team')
        if (!exusedLeaves) { getExusedLeavesListAction() }
    }, [getExusedLeavesListAction, exusedLeaves, setCurrentPageAction])

    const goToUserProfile = () => { }
    

    const tableHeader = <TableHeaderText titleKey="users" columns={exusedLeavesColumns} />
    let tableBody: React.ReactElement[] | null = null;
    if (exusedLeaves) {
        tableBody = exusedLeaves.map((row: any, index: number) => (
            <TableData
                key={index}
                cells={row}
                fields={exusedLeavesColumns}
                clickRowHandler={goToUserProfile}
            />
        ));
    }
    return (
        <ExusedLeavesStyled>
            {isMobile ?
                <ExusedLeavesMobile
                    exusedLeaves={exusedLeaves}
                    isLoading={isLoading}
                    error={error}
                    sessionId={sessionId}
                /> : 
                <div>
                    <Header isMobile={false}  />
                    <ContentBlock>
                        <Breadcrumbs crumbs={TeamListCrumbs} lastCrumb={intl.formatMessage({ id: `team.exused_leaves_today`})}/>
                        <Title>{intl.formatMessage({ id: `team.exused_leaves_today`})}</Title>
                        <MainContent
                            tableBody={tableBody}
                            tableHeader={tableHeader}
                            isLoading={isLoading}
                            error={error}
                            colspan={exusedLeavesColumns.length}
                        />
                </ContentBlock>
                </div>
                }
        </ExusedLeavesStyled>
    );
};

export default connected(injectIntl(ExusedLeaves));
