export type Props = Readonly<BreadcrumbsProps>;

interface BreadcrumbsProps {
  crumbs: {name: string, route: string}[];
  customCrumb?: string
  lastCrumb: string;
  customCrumbRoute?: string
}
