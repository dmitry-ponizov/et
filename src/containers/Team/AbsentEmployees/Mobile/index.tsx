import React, { Fragment, useState } from 'react';
import { Props } from './types';
import { navigate } from '@reach/router';
import { TeamPath } from '../../../../routes/constants';
import HeaderMobile from '../../../../components/UI/Mobile/Sort/Header/index';
import { UsersList } from '../../../../styledTheme/globalStyles';
import UserCard from './User/index';
import LoaderComponent from '../../../../components/UI/Loader/index';
import ErrorComponent from '../../../../components/UI/Error/index';
import TotalMobile from '../../../../components/UI/Mobile/Total'
import ShowMore from '../../../../components/UI/ShowMore';
import { elementsAmount } from '../../../../constants/common';
import { InjectedIntlProps, injectIntl } from 'react-intl';


const AbsentEmployeesMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({
    absentEmployees,
    sessionId,
    isLoading,
    error,
    intl
}) => {
    const [showElements, showElementsHandler] = useState(elementsAmount)
    const backHandler = () => {
        navigate(TeamPath)
    }
    const goToUserProfile = (userId: string) => {
        navigate(`/user/${userId}`)
    }
    const showMoreHandler = () => {
        showElementsHandler((prevShowElements) => prevShowElements + elementsAmount)
    }
    const isShowMore = absentEmployees && absentEmployees.length > elementsAmount && showElements < absentEmployees.length;
    return (
        <div>
            <HeaderMobile
                title={intl.formatMessage({ id: `team.absent_employees_today`})}
                backHandler={backHandler}
            />
            {absentEmployees &&
                <Fragment>
                    <TotalMobile showElements={showElements} total={absentEmployees.length} content={intl.formatMessage({ id: `users.users`})} />
                    <UsersList>
                        {absentEmployees.slice(0, showElements).map((user: any) => (
                            <UserCard clickHandler={goToUserProfile} user={user} key={user.employee_number} sessionId={sessionId} />
                        ))}
                    {isShowMore && <ShowMore clickHandler={showMoreHandler} /> }
                    </UsersList>
                </Fragment>}
            {isLoading ? <LoaderComponent margin="200px" /> : ''}
            {error && !isLoading ? <ErrorComponent error={error} /> : ''}
        </div>
    );
};

export default injectIntl(AbsentEmployeesMobile);
