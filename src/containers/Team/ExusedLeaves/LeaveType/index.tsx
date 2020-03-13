import * as React from 'react';
import { IconExusedLeavesMobile } from '../../../../components/UI/SvgIcons/Team/icon-exused-leaves-mobile';
import { LeaveTypeStyled, Type } from './styled';

interface ILeaveTypeProps {
    type: string;
}

const LeaveType: React.FunctionComponent<ILeaveTypeProps> = ({ type }) => {
    return (
        <LeaveTypeStyled>
            <IconExusedLeavesMobile />
            <Type>{type}</Type>
        </LeaveTypeStyled>);
};

export default LeaveType;
