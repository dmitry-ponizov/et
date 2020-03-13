import React, { Fragment, useState } from 'react';
import { Props } from './types';
import HeaderMobile from '../../../../components/UI/Mobile/Sort/Header/index';
import { navigate } from '@reach/router';
import { TeamPath } from '../../../../routes/constants';
import LoaderComponent from '../../../../components/UI/Loader/index';
import ErrorComponent from '../../../../components/UI/Error/index';
import UserCard from './User/index';
import { UsersList } from '../../../../styledTheme/globalStyles';
import TotalMobile from '../../../../components/UI/Mobile/Total'
import ShowMore from '../../../../components/UI/ShowMore';
import { elementsAmount } from '../../../../constants/common';
import { InjectedIntlProps, injectIntl } from 'react-intl';


const TotalAttendanceMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({ totalAttendance, isLoading, error, sessionId, intl }) => {
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
    
    const isShowMore = totalAttendance && totalAttendance.length > elementsAmount && showElements < totalAttendance.length;
    return (
        <div>
            <HeaderMobile
                title={intl.formatMessage({ id: `team.total_attendance_today` })}
                backHandler={backHandler}
            />
            {totalAttendance && <Fragment>
                <TotalMobile showElements={showElements} total={totalAttendance.length} content={intl.formatMessage({ id: `users.users`})} />
                <UsersList>
                    {totalAttendance.slice(0, showElements).map((user: any) => (
                        <UserCard clickHandler={goToUserProfile} user={user} key={user.employee_number} sessionId={sessionId} />
                    ))}
                 {isShowMore && <ShowMore clickHandler={showMoreHandler} />}
                </UsersList>
            </Fragment>}
            {isLoading ? <LoaderComponent margin="200px" /> : ''}
            {error && !isLoading ? <ErrorComponent error={error} /> : ''}
        </div>
    );
};

export default injectIntl(TotalAttendanceMobile);
