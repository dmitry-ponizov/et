import React from 'react'
import { Props } from './types';
import { ExceptionsList } from './styled';
import Exception from '../../../../../../../components/UI/Exception/index';
import DynamicIcon from '../DynamicIcon';

const Exceptions: React.FC<Props> = ({ exceptions }) => {
    
    const exceptionsList = () => {
        if (exceptions.length) {
            return exceptions.map((exception: { code: string, description: string }, index: number) =>
                <Exception key={index} icon={<DynamicIcon tag={exception.code} />} code={exception.code} />)

        }
        return '-'
    }
    return (
        <ExceptionsList>
            {exceptionsList()}
        </ExceptionsList>
    )
}
export default Exceptions;