export const genericDataParams = ["default_display_columns"]
export const authorizeRequest: any[] = [[{request_id:[], authorized: true}]]

export const requestAuthData = 
[
    {filter_data:
    {user_id: [], authorization_requests:true,type_id:[-1]},
    filter_sort:[],
    filter_columns:
    {
        is_owner:true,
        id:true,
        is_child:true,
        in_use:true,
        first_name:true,
        last_name:true,
        user_id:true,
        status_id:true,
        cb:true,
        employee_number:true,
        full_name:true,
        type:true,
        status:true,
        date_stamp1:true,
        duration:true,
        absence_policy:true,
        shift:true,
        shift2:true,
        fill_in_user:true,
        message:true,
        current_authorization_user:true,
        approvals_display:true},
        filter_items_per_page:0,
        filter_page:1}
]



  export const displayColumns = [
    "employee_number",
    "full_name",
    "type",
    "status",
    "date_stamp1",
    "duration",
    "absence_policy",
    "shift",
    "shift2",
    "fill_in_user",
    "message",
    "current_authorization_user",
    "approvals_display",
  ]
  

export const SortFieldsMobile = ['employee_number', 'full_name', 'type', 'date_stamp1']