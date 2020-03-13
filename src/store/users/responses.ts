export const getHourlyAccrualBalance = (response: any) => {
    if(!response || !response[0] || !response[0].balance) return false;
    return response[0].balance;
}