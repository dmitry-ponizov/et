export const getUserDataRequest: any[] = [
    {
        filter_data:{
            id:[],
            company_id: ""
        }
    }
]


export const regExp = new RegExp(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i);
export const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

export const GetAvatarUrl = 'http://192.168.219.87/interface/send_file.php?object_type=user_photo&object_id='

// export const GetAvatarUrl = 'http://10.8.2.230:8085/interface/send_file.php?object_type=user_photo&object_id='

export const GetAccrualBalanceRequest: any[] = [{filter_data:{user_id:[]},filter_columns:{accrual_policy_account:true,balance:true,user_id:true}}]

export const exceptionColors: {[index: string]: string} = 
{
    SF: '#ff612d',
    SQ: '#ff612d',
    S1: '#F93139',
    S2: '#ff612d',
    S4: '#ff612d',
    S5: '#ff612d',
    M1: '#F93139',
    M2: '#F93139',
    M6: '#F93139',
    EQ: '#1ba953',
    E1: '#1ba953',
    E4: '#1ba953'
}

export const UserCrumbs = [
    {
        name: 'home',
        route: '/'
    },
    {
        name: 'team',
        route: '/team'
    }
]

export const RequestsCrumbs = [
    {
        name: 'home',
        route: '/'
    },
    {
        name: 'team',
        route: '/team'
    }
]

export const PendingRequestsCrumb = [
    {
        name: 'home',
        route: '/'
    }
]

export const PageLinks = [
    {
        name: 'extra_information', 
        route: `/extra-information`
    },
    {
        name: 'attendance', 
        route: `/attendance`
    },
    {
        name: 'attendance_kpis', 
        route: `/attendance-kpis`
    },
    {
        name: 'subordinates', 
        route: `/subordinates`
    }
];

export const windowParams = {
    top: '0',
    left: '0',
    width: '100%'
}

export const notFoundPages = {total_rows: '0'}