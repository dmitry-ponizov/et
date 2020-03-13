export const typeRequest = ['type'];
export const statusesRequest = ['status'];
export const directManagerRequest = ['send_to_user'];
export const typesExtraDay = {'10': 'Office', '20':'Home', '30': 'Out Office'};
export const shiftRequest = [
    {
        filter_data:{},
        filter_columns:
        {
            is_owner:true,
            id:true,
            is_child:true,
            user_id:true,
            first_name:true,
            last_name:true,
            object_type_id:true,
            manual_id:true,
            default_item_id:true,
            accrual_policy_id:true,
            pay_code_id:true,
            start_date:true,
            end_date:true,
            pay_period_id:true,
            name:true
        },
        filter_items_per_page:0,
        filter_sort:{}
    }
]



export const defaultVacationAbsencePolicy = '6f7ce8ab-86e8-9c2b-3832-000000000006'
export const defaultHourlyAbsencePolicy = '6f7ce8ab-86e8-9c2b-3832-000000000005'

export const punchStatuses = {10: 'In', 20: 'Out'};

export const typesExtraDayWithTicket = ['20', '30', '6f7ce8ab-86e8-9c2b-3832-000000000025', '6f7ce8ab-86e8-9c2b-3832-000000000019'];
export const shiftTableColumns = ['name'];
export const withDatepicker = ['30', '35', '60', '45', '36', '10', '55', '70', '90', '100']
export const withAbsencePolicy = ['30', '35'];
export const withPlaceType = ['60', '70']
export const withDateTo = ['30', '90']
export const withShift = ['60', '45']
export const withUserShift = ['30']
export const withTimePicker = ['10', '35', '36', '70','100']
export const withTimePicker2 = ['35', '36', '70', '100']
export const withPunchStatus = ['10']
export const withUsers = ['36']
export const withSchedules = ['45', '50', '55']
export const withSchedules2 = ['45']
export const withAnotherEmployee = ['45']
export const withFillInUsers = ['50', '90']
export const windowParams = {
    top: '114px',
    left: '12%',
    width: '79%'
}