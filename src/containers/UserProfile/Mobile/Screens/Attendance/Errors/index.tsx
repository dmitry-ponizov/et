import React from 'react'
import { ErrorsContainer } from './styled';
import Exception from '../../../../../../components/UI/Exception';
import ErrorField from './ErrorField';
import { Props } from './types';
import DynamicIcon from '../SelectedDate/DynamicIcon/index';


const Errors: React.FC<Props> = ({ selectedDayInfo }) => {
  return (
    <ErrorsContainer>
      {selectedDayInfo.exceptions && selectedDayInfo.exceptions.map((exception: { code: string, description: string }, index: number) =>
        <ErrorField
          key={index}
          exception={
            <Exception
              icon={<DynamicIcon tag={exception.code} />}
              code={exception.code} />}
          desc={exception.description}
        />
      )}
    </ErrorsContainer>
  )
}
export default Errors