export const transformAuthRequest = (data: any) => {
    let requestData = [];
    const filter_data = { authorization_requests: true};
    const  filter_sort = {}
    let filter_columns: any = Object.create(null);
    for (let column of data) {
        filter_columns[column] = true;
    }
    const filter_items_per_page = 0;
    const filter_page = 1;
    filter_columns['id'] = true;
    requestData.push(
        { filter_data, filter_sort, filter_columns, filter_items_per_page, filter_page }
    );
    return requestData;
};