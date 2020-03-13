export type Props = Readonly<IHierarchySearch>

interface IHierarchySearch {
    divisionName: string;
    findHandler: (query: string) => void;
    cancelSearch: () => void;
    departmentName: string;
}