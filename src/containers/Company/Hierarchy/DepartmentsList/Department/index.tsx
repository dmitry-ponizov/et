import * as React from 'react';
import { Container, Title, Avatars, Avatar, Amount, ContactBtn, Users, Row, TitleBtn } from './styled'
import { Props } from './types'
import { AvatarExample } from '../../../../../constants/images';
import { IconUsers } from '../../../../../components/UI/SvgIcons/icon-users';
import { IconDepartmentArrow } from '../../../../../components/UI/SvgIcons/icon-department-arrow';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { isRtl } from '../../../../../utils/index';
import { navigate } from '@reach/router';

const Department: React.FunctionComponent<Props & InjectedIntlProps> = ({ 
  total, 
  itemIndex, 
  department, 
  activeDeparment, 
  selectDepartment,
  intl,
  lang,
 }) => {
  const rtl = isRtl(lang)
  const lenthHandler = () => {
    if (itemIndex <= 4 && total > 4) {
      return 218 * 2
    } else {
      return 218
    }
  }
  const active = activeDeparment === department.name
  return (
    <Container
      heightLine={lenthHandler()}
      onClick={() => selectDepartment(department.name)}
      active={active}
    >
      <Title active={active}>{department.name}</Title>
      <Row>
        <Avatars>
          <Avatar rtl={rtl}>
            <img src={AvatarExample} alt="avatar" />
          </Avatar>
          <Avatar rtl={rtl}>
            <img src={AvatarExample} alt="avatar" />
          </Avatar>
          <Avatar rtl={rtl}>
            <img src={AvatarExample} alt="avatar" />
          </Avatar>
          <Users rtl={rtl}>+9</Users>
        </Avatars>
        <Amount>
          <IconUsers />
          <span>40</span>
        </Amount>
      </Row>
      <ContactBtn onClick={() => navigate(`/department/${department.id}`)}>
        <TitleBtn>{intl.formatMessage({ id: `company.contact_info` })}</TitleBtn>
        <IconDepartmentArrow />
      </ContactBtn>
    </Container>
  );
};

export default injectIntl(Department);
