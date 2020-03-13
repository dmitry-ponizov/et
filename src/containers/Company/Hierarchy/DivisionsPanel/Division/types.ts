import { IDivision } from "../../../../../store/company/types";

export type Props = Readonly<IDivisionItem>


interface IDivisionItem {
    division: IDivision;
    activeDivision: IDivision;
    selectDivision: (division: IDivision) => void
}