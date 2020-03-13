export const menu = [
    {
        name: 'home',
        defaultCategory: 'home',
        categories: [],
        route: '/'
    },

    {
        name: 'team',
        defaultCategory: 'team',
        categories: [],
        route: '/team'
    },
    {
        name: 'company',
        defaultCategory: 'hierarchy',
        route: '/hierarchy',
        categories: [
            {name: 'hierarchy', route: '/hierarchy'},
            {name: 'elteam journal', route: '/elteam_journal'},
            {name: 'blog', route: '/blog'},
            {name: 'internal vacancies', route: '/internal_vacancies'},
            {name: 'about elteam', route: '/about_elteam'},
        ]
    },
    {
        name: 'me',
        defaultCategory: 'me',
        categories: [],
        route: '/me'
    },
    {
        name: 'settings',
        defaultCategory: 'settings',
        categories: [],
        route: '/settings'
    },
    {
        name: 'help',
        defaultCategory: 'help',
        categories: [],
        route: '/help'
    },
    {
        name: 'logout',
        defaultCategory: 'logout',
        categories: [],
        route: '/logout'
    },
];

export const MainCategoryName = '/';
export const CompanyCategories = ['/hierarchy', '/elteam_journal', '/blog', '/internal_vacancies', '/about_elteam'];



export const categories = [
    {name: 'TimeSheet', routeName: '/timesheet'},
    {name: 'Punches', routeName: '/punches'},
    {name: 'Actual Punches', routeName: '/actual-punches'},
    {name: 'Exceptions', routeName: '/exceptions'},
    {name: 'Accrual Balances', routeName: '/accrual-balances'},
    {name: 'Accrual Schedule', routeName: '/accrual-schedule'},
    {name: 'Schedules', routeName: '/schedules'},
    {name: 'Recurring Schedules', routeName: '/recurring-schedules'},
    {name: 'Recurring Templates', routeName: '/recurring-templates'},
    {name: 'Custom Schedules', routeName: '/custom-schedules'},
    {name: 'Requests', routeName: '/requests'},
    {name: 'Messages', routeName: '/messages'},
    {name: 'Preferences', routeName: '/preferences'},
    {name: 'Request authorizations', routeName: '/request-authorizations'},
    {name: 'Logout', routeName: '/logout'}
];