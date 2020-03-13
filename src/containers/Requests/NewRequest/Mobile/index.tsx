import React, { useEffect } from 'react';
import NewRequest from '..';
import { Props } from './types';
import { NewRequestSection } from './styled';
import HeaderMobile from '../../../../components/UI/Mobile/Sort/Header/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { mobileResulution } from '../../../../constants/common';
import { connected } from './connect';
import { navigate } from '@reach/router';
import { windowParams } from '../constants';

const NewRequestMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({
    intl,
    id,
    successNewRequestValidation,
    setNewRequestAction,
    setUserIdAction,
    currentUser,
    user
}) => {

    useEffect(() => {
        if (window.innerWidth >= mobileResulution) {
            navigate(`/user/${id}`)
        }
        setUserIdAction(id)
    }, [id, setUserIdAction])

    const sendRequestHandler = () => {
        if (successNewRequestValidation) {
            setNewRequestAction()
            window.history.go(-1)
        }
    }
    const backHandler = () => {
        window.history.go(-1)
    }
    const isMobile = window.innerWidth <= mobileResulution;

    const userTitleCreator = () => {
        const user = getUser()
        return  `${intl.formatMessage({ id: `sortFields.new_request` })} as ${user.full_name}`
    }
    const getUser = () => {
        return currentUser.id === id ? currentUser : user
    }

    return (
        <NewRequestSection>
            <HeaderMobile title={userTitleCreator()} backHandler={backHandler} />
            <NewRequest
                cancelHandler={() => { }}
                sendRequest={sendRequestHandler}
                path={'/'}
                isMobile={isMobile}
                windowParams={windowParams}
                user={getUser()}
            />
        </NewRequestSection>
    );
};

export default connected(injectIntl(NewRequestMobile));
