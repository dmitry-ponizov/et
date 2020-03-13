import { CommonType } from '../../../../constants/common';
export type Props = Readonly<ISortPendingRequestsProps>

interface ISortPendingRequestsProps {
    backHandler: () => void;
    total: number
    sortHandler: (direction: string, field: string) => void;
    direction: string;
    setDirection: (direction: string) => void
    setActiveField: (field: string) => void
    activeField: string;
    resetHandler: () => void;
    sortFields: string[]
}

export type DirectionStyled = {
    active: boolean;
    theme: CommonType;
}