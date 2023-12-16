import React from 'react'
import { useRouteError } from 'react-router';
const ErrorRoute = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h4>Oops.. something went wrong </h4>
        <h4>{error.status} : {error.statusText} </h4>
    </div>
  )
}

export default ErrorRoute;