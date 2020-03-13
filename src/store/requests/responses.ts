import { slugifySettings } from '../../constants/common';
import { isObject } from 'util';
const slugify = require('slugify');

const getSyncFlagId = (data: any) => {
    if (!data || !data.filter_data || !data.filter_data.sync_flag_id || !data.filter_data.sync_flag_id.value || !data.filter_data.sync_flag_id.value.id) {
        return null;
    }
    return data.filter_data.sync_flag_id.value.id
};

export const transformRequestRequests = (data: any) => {
    let requestData = [];
    const filter_data = { sync_flag_id: getSyncFlagId(data) };
    const { filter_sort } = data;
    let filter_columns: any = Object.create(null);
    for (let column of data.display_columns) {
        filter_columns[column] = true;
    }
    filter_columns.in_use = true;
    const filter_items_per_page = 0;
    const filter_page = 1;
    filter_columns['id'] = true;
    requestData.push(
        { filter_data, filter_sort, filter_columns, filter_items_per_page, filter_page }
    );
    return requestData;
};

export const transformTypeRequests = (data: any) => {
    if(!data || !isObject(data)) return []
    return Object.keys(data).map((number: string) => slugify(data[number], slugifySettings));
}

export const validateResponse = (response: any) => {
    if (!response || !response.data || !response.data.api_retval){
        return false;
    }
    return true;
}

export const getErrorValidateRequest = (response: any) => {
    if (!response || 
        !response.data || 
        !response.data.api_details || 
        !response.data.api_details.details || 
        !response.data.api_details.details[0] ||
        !response.data.api_details.details[0].error
        ){
            return null
        }
    return response.data.api_details.details[0].error;
}

export const authRequestDataResponse = (response: any) => {
    return [{
        filter_data: {
          object_id:[response.id],
          object_type_id: response.hierarchy_type_id
        },
        filter_columns: {
          created_by: true,
          created_date :true,
          authorized:true
        }
      }
    ]
} 