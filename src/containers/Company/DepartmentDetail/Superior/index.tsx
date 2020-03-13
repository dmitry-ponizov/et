import React from 'react'
import { Container, Avatar, FullName, Position, Contacts, Contact, Icon, Value, Label } from './styled'
import { Props } from './types'
import { AvatarExample } from '../../../../constants/images'
import { IconDepartmentEmail } from '../../../../components/UI/SvgIcons/icon-department-email'
import { IconDepartmentPhone } from '../../../../components/UI/SvgIcons/icon-department-phone'

const Superior: React.FC<Props> = () => {
    return(
        <Container>
            <Avatar>
                <img src={AvatarExample} alt="avatar"/>
            </Avatar>
            <FullName>Qussay Khateeb</FullName>
            <Position>Department head – Technology Design & Development, CTO (Chief Technology Officer)</Position>
            <Contacts>
                <Contact>
                    <Icon><IconDepartmentEmail /></Icon>
                    <Label>Email:</Label> <Value isEmail>department@gmail.com</Value>
                </Contact>
                <Contact>
                    <Icon><IconDepartmentPhone /></Icon>
                    <Label>Phone:</Label> <Value isEmail={false}>+ 1-777-132-1090</Value>
                </Contact>
            </Contacts>
        </Container>
    )
}

export default Superior;