import React, { useEffect } from 'react'
import { Props } from './types';
import { connected } from './connect';
import Header from '../../components/Header';
import { ContentBlock } from '../../styledTheme/globalStyles';
import { isMobile } from '../../utils/index';
import { useWindowSize } from '../../hooks/index';
import HomeMobile from './mobile/index';

const Home: React.FC<Props> = ({
    path,
    setCurrentPageAction,
    fetchUsersWithBirthdayAction,
    birthdays,
    lang,
    newMembers,
    fetchNewMembersAction,
}) => {
    const size = useWindowSize();
    const mobile = isMobile(size);
    useEffect(() => {
        setCurrentPageAction(path);
    }, [setCurrentPageAction, path])


    useEffect(() => {
        if (!birthdays) {
            fetchUsersWithBirthdayAction()
        }
    }, [fetchUsersWithBirthdayAction, birthdays])

    useEffect(() => {
        if (!newMembers) {
            fetchNewMembersAction()
        }
    }, [fetchNewMembersAction, newMembers])

    return (
        <>
            {!mobile ? <div>
                <Header isMobile={false} />
                <ContentBlock>
                  Home page
                </ContentBlock>
            </div> :
                <HomeMobile />}
        </>
    )
}

export default connected(Home);