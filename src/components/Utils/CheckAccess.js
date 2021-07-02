import React from 'react';
import { Redirect } from 'react-router-dom';
import { USER_TOKEN } from '../../storageKeys';

const CheckAccess = (props) => {
  const token = localStorage.getItem(USER_TOKEN);

  return (
    <div>
      {token ? props.children
        : (
          <Redirect to={{
            pathname: '/login',
          }}
          />
        )}
    </div>
  );
};

export default CheckAccess;
