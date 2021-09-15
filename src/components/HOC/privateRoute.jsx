import React from 'react';
import { Route, useHistory } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let history = useHistory();
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem('token') ? (
            <Component {...props}></Component>
          ) : (
            history.push('/signin')
          )
        }
      ></Route>
    </>
  );
};

export default PrivateRoute;
