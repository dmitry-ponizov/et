import * as React from 'react';
import { RequestRow, FirstRequestCell, RequestCell, Icon } from './styled';
import { Props } from './types';


const RowMobile: React.FunctionComponent<Props> = ({title, value, icon, alignTop}) => {
    return (
        <RequestRow>
            <FirstRequestCell>{title}</FirstRequestCell>
            <RequestCell alignTop={alignTop}>
                <Icon >
                    {icon && icon}
                </Icon>
                {value}
            </RequestCell>
        </RequestRow>
    );
};

export default RowMobile;
