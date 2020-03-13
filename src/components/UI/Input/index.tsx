import React from 'react';
import { Input } from 'semantic-ui-react';
import { Props } from './types';

const InputComponent: React.FC<Props> = ({
  placeholder,
  styleClass,
  focus,
  error,
  changeHandler,
  name,
  value,
  type,
  icon,
  iconPosition
}) => {
 
 
  const inputValue = (typeof value === 'boolean') ? '' : value
  return (
    <div>
      <Input
        focus={focus}
        placeholder={placeholder}
        className={styleClass}
        error={error}
        onChange={changeHandler}
        name={name}
        value={inputValue}
        type={type}
        required
        icon={icon}
        iconPosition={iconPosition}
      />
    </div>
  );
};
export default InputComponent;
