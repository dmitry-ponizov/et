import { IDivision } from '../../../../store/company/types';
export type Props = Readonly<IDivisionsPanel>

interface IDivisionsPanel {
    divisions: IDivision[];
    activeDivision: IDivision;
    selectDivision: (division: IDivision) => void
}