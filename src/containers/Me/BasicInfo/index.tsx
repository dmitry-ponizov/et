import React from 'react';
import { Props } from './types';
import { BasicInfoStyled, Title, Field, Label, FormStyled, ValueStyled } from './styled';
import { InjectedIntlProps, injectIntl } from 'react-intl';


const BasicInfo: React.FunctionComponent<Props & InjectedIntlProps> = ({ user, editUser, intl }) => {
    return (
        <BasicInfoStyled>
            <Title>{intl.formatMessage({ id: `global.basic_info`})}:</Title>
            <FormStyled>
                <Field>
                    <Label>{intl.formatMessage({ id: `global.email` })}:</Label>
                    <ValueStyled>{user.work_email}</ValueStyled>
                </Field>
                <Field>
                    <Label>{intl.formatMessage({ id: `global.work_phone` })}:</Label>
                    <ValueStyled>{user.work_phone}</ValueStyled>
                </Field>
                <Field>
                    <Label>{intl.formatMessage({ id: `global.mobile_number` })}:</Label>
                    <ValueStyled>{user.mobile_phone}</ValueStyled>
                </Field>
            </FormStyled>
        </BasicInfoStyled>
    );
};

export default injectIntl(BasicInfo);
