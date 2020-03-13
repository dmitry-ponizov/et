import { CommonType } from '../../constants/common';
export const showPunchPermission = (permissions: CommonType | null) => {
    if(!permissions || !permissions.punch || !permissions.punch.punch_in_out) return false
    return true
}