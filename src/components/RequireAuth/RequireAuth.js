import React from 'react';
import {Navigate} from 'react-router-dom'

import {useStateContext} from '../../context/StateContext'

function RequireAuth({ children, redirectTo }) {

	const {quoteToUpdate} = useStateContext()

  return (
	quoteToUpdate ? children : <Navigate to={redirectTo}/>
  )
}

export default RequireAuth
