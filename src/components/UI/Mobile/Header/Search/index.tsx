import React, { useState } from 'react';
import { SearchStyled, InputStyled, IconStyled, Section, IconClose, InputBlock } from './styled';
import { IconSearch } from '../../../SvgIcons/icon-search';
import { IconCloseSearch } from '../../../SvgIcons/icon-close-search';
import { Props } from './types';

const Search: React.FunctionComponent<Props> = ({placeholder, findHandler, onCancel}) => {
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState(false)
  const findQuery = (e: any) => {
    if (e.key === 'Enter') {
      findHandler(e.target.value)
      setSearch(true)
    }
  }

  const changeHandler = (e: any) => {
    setQuery(e.target.value)
  }

  const cancelHandler = () => {
    setQuery('')
    if(search) {
      onCancel()
      setSearch(false)
    }
  }


  return (
      <SearchStyled>
          <Section>
            <InputBlock>
              <IconStyled>
                  <IconSearch />
              </IconStyled>
              <InputStyled type="text" value={query} onChange={changeHandler} placeholder={placeholder} onKeyDown={findQuery} />
            </InputBlock>
            {(query || search) && 
            <IconClose onClick={cancelHandler} >
              <IconCloseSearch />
            </IconClose>}
          </Section>
      </SearchStyled>
  );
};

export default Search;
