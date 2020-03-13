export const getDatePickerTitle = (typeId: string) => {
    switch (typeId) {
        case '10':
            return 'punch_date'
        case '30':
            return 'date_from'
        case '55':
            return 'off_day'
        case '100':
            return 'punch_date'
        default: 
            return 'date'
    }
}

export const getTimePickerTitle = (typeId: string) => {
    switch (typeId) {
        case '10':
            return 'punch_time'
        case '100':
            return 'punch_in_time'
        default: 
            return 'start_time'
    }
}

export const getSecondTimePickerTitle = (typeId: string) => {
    switch (typeId) {
        case '100':
            return 'punch_out_time'
        default: 
            return 'end_time'
    }
}
