export const options = [
    {
      key: 'Default view',
      text: 'Default view',
      value: 'Default view'
    }
  ];

export const genericDataParams = [
    { filter_data: { script: 'RequestView', deleted: false } }
];

export const cancelRequest: any[] = [
  [{
    authorized: false,
    request_id: []
  }]]


export const requestDropDownFields = ["employee_number", "full_name", "type", "status", "date_stamp1", "duration", "absence_policy", "shift", "shift2"]
export const withoutDateStamp = ['Missed Punch', 'Hourly', 'add punch'];
export const withShift = ['Vacation', 'Change Shift', 'Fill in', 'Swap Off Day'];
export const fixedWidthColumns = ['full_name']
export const authHistoryColumns = ['created_by', 'created_date', 'authorized'];
export const absencePoliciesRequest = ["vacation_absence_policies"]
export const hourlyAbsencePoliciesRequest = ["hourly_absence_policies"] 
export const fillInUserRequest = ["fill_in_user"] 
export const approvalDelegationUser = ["approval_delegation_user"] 

export const requestData = 
[
  {
    filter_data:{user_id: []},
    filter_sort:[],
    filter_columns:{
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
      approvals_display:true,
      created_date:true,
      in_use:true,
      id:true
    },
      filter_items_per_page:0,
      filter_page:1
    }
  ]

export const displayColumns = [
  "employee_number",
  "full_name",
  "type",
  "status",
  "date_stamp1",
  "duration",
  "absence_policy",
  "message",
  "approvals_display",
  "created_date"
]



export const employeesRequest = [
  {
    filter_data:{},
    filter_columns:{
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
      pay_period_schedule_id:true,
      policy_group_id:true,
      hire_date:true,
      termination_date:true,
      employee_number:true,
      full_arabic_name:true,
      default_department:true,
      status:true,
      full_name:true,
      report_to_user:true,
      default_branch_id:true,
      default_department_id:true,
      default_job_id:true,
      default_job_item_id:true
    },
    filter_items_per_page:"0",
    permission_section:"punch"
  }
]