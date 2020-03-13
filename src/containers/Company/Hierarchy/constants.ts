export const HierarchyCrumbs = [
    {
        name: 'home',
        route: '/'
    },
    {
        name: 'company_hierarchy',
        route: '/hierarchy'
    }
]


export const DEPARTMENTS_REQUEST = [
    {
        filter_data:{},
        filter_sort:[],
        filter_columns:{
            is_owner:true,
            id:true,
            is_child:true,
            in_use:true,
            first_name:true,
            last_name:true,
            manual_id:true,
            name:true,
            short_name:true,
            status:true,
            tag:true
        },
        filter_items_per_page:999,
        filter_page:1
    }
]