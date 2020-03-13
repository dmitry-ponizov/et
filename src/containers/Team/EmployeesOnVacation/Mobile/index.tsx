import React, { Fragment, useState } from 'react';
import { EmployeesOnVacationMobileSection } from './styled';
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
const uuidv4 = require('uuid/v4');

const EmployeesOnVacationMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({
    onVacation,
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
    const isShowMore = onVacation && onVacation.length > elementsAmount && showElements < onVacation.length;
    
    return (
        <EmployeesOnVacationMobileSection>
            <HeaderMobile
                title={intl.formatMessage({ id: `team.employees_on_vacation` })}
                backHandler={backHandler}
            />
            {onVacation &&
                <Fragment>
                    <TotalMobile showElements={showElements}  total={onVacation.length} content={intl.formatMessage({ id: `users.users`})} />
                    <UsersList>
                        {onVacation.slice(0, showElements).map((user: any) => (
                            <UserCard clickHandler={goToUserProfile} user={user} key={uuidv4()} sessionId={sessionId} />
                        ))}
                    {isShowMore && <ShowMore clickHandler={showMoreHandler} /> }
                    </UsersList>
                </Fragment>}
            {isLoading ? <LoaderComponent margin="200px" /> : ''}
            {error && !isLoading ? <ErrorComponent error={error} /> : ''}
        </EmployeesOnVacationMobileSection>
    );
};

export default injectIntl(EmployeesOnVacationMobile);
