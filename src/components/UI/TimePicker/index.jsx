import React from 'react'
import TimePicker from 'rc-time-picker';
import { TimePickerStyled, IconContainer } from './styled';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import { IconTimePicker } from '../../UI/SvgIcons/icon-time-picker';


const TimePickerComponent = ({changeTimeHandler, selectedTime, error}) => {
    const icon = <IconContainer><IconTimePicker /></IconContainer>
    return (
        <TimePickerStyled error={error}>
            <TimePicker 
                showSecond={false} 
                onChange={(time) => changeTimeHandler(time.format('HH:mm'))} 
                value={moment(selectedTime,'HH:mm')} 
                inputIcon={icon} 
                clearIcon={<></>}/>
        </TimePickerStyled>
    )
}

export default TimePickerComponent