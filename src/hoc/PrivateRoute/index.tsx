import React from 'react';
import { Props } from './types';
import { Redirect } from '@reach/router';
import { connected } from './connect';

const PrivateRoute: React.FC<Props> = ({
  path,
  component: Component,
  isAuth,
  setCurrentPageAction,
  id
}) => {
  if (!isAuth) setCurrentPageAction('/login');
  return (
    <div className="private-route">
      {isAuth ? <Component path={path} id={id}/> : <Redirect to='/login' noThrow />}
    </div>
  );
};
export default connected(PrivateRoute);
