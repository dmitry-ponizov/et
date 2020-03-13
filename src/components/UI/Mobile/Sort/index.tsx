import React from 'react';
import { SortStyled, ChooseField, ChooseTitle, SelectDirection, Direction, FieldsList, SortField, FildName, ApplyBtn, ButtonSection } from './styled';
import { Props } from './types';
import { IconCheck } from '../../SvgIcons/icon-check';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import HeaderMobile from './Header/index';
import { AscSort, DescSort } from '../../../../constants/common';

const SortMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({
  direction, 
  setDirection, 
  setActiveField, 
  activeField, 
  resetHandler, 
  backHandler, 
  intl, 
  total, 
  sortHandler,
  sortFields
}) => {
  return(
      <SortStyled>
        <HeaderMobile title={intl.formatMessage({ id: `sortFields.sort_by`})} backHandler={backHandler} actionHandler={resetHandler} actiontitle={intl.formatMessage({ id: `sortFields.reset`})}  />
        <ChooseField>
          <ChooseTitle>{intl.formatMessage({ id: `sortFields.choose_field`})}</ChooseTitle>
          <SelectDirection>
            <Direction onClick={() => setDirection(AscSort)} active={direction === AscSort}>{`A-Z / 1-${total}`}</Direction>
            <Direction onClick={() => setDirection(DescSort)} active={direction === DescSort}>{`Z-A / ${total}-1`}</Direction>
          </SelectDirection>
        </ChooseField>
        <FieldsList>
          {sortFields.map((field: string) => (
            <SortField key={field} onClick={() => setActiveField(field)}>
              <FildName>{intl.formatMessage({ id: `sortFields.${field}`})}</FildName>
              {activeField === field && <IconCheck />}
            </SortField>
          ))}
        </FieldsList>
        <ButtonSection onClick={() => sortHandler(direction, activeField)}>
          <ApplyBtn>{intl.formatMessage({ id: `sortFields.apply`})}</ApplyBtn>
        </ButtonSection>
      </SortStyled>
  );
};


export default injectIntl(SortMobile);
