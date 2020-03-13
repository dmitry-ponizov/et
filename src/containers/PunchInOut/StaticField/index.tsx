import * as React from 'react';
import { Props } from './types';
import { Field, ValueField, TitleField } from './styled';


const StaticField: React.FunctionComponent<Props> = ({title, value}) => {
    return (
        <Field>
            <TitleField>{title}:</TitleField>
            <ValueField>{value}</ValueField>
        </Field>
    );
};

export default StaticField;
