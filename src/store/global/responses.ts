export const getGenericDataResponse = (response: any) => {
    if (!response || !response.api_retval || !response.api_retval[0] || !response.api_retval[0]) {
        return null;
    }
    return response.api_retval[0];
};

const getSyncFlagId = (data: any) => {
    if (!data || !data.filter_data || !data.filter_data.sync_flag_id || !data.filter_data.sync_flag_id.value || !data.filter_data.sync_flag_id.value.id) {
        return null;
    }
    return data.filter_data.sync_flag_id.value.id
};

export const transformRequest = (data: any) => {
    let requestData = [];
    const filter_data = { sync_flag_id: getSyncFlagId(data) };
    const { filter_sort } = data;
    let filter_columns: any = Object.create(null);
    for (let column of data.display_columns) {
        filter_columns[column] = true;
    }
    const filter_items_per_page = 0;
    const filter_page = 1;
    filter_columns['user_id'] = true;
    requestData.push(
        { filter_data, filter_sort, filter_columns, filter_items_per_page, filter_page }
    );
    return requestData;
};

export const getPayloadFromResponse = (response: any) => {
    if (!response || !response.api_retval) {
        return null;
    }
    return response.api_retval;
};
export const getPagerData = (response: any) => {
    if (!response || !response.data || !response.data.api_details || !response.data.api_details.pager) {
        return null;
    }
    return response.data.api_details.pager;
};
export const getIdResponse = (response: any) => {
    if (!response || !response.api_retval || !response.api_retval[0] || !response.api_retval[0] || !response.api_retval[0].id) {
        return null;
    }
    return response.api_retval[0].id;
};