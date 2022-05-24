import React from 'react'

import { useStateContext } from '../../context/StateContext' 

import {IoMdNotifications} from "react-icons/io"
import './NotifMsg.css'

function NotifMsg() {

	const {popUpMsg} = useStateContext()
  return (
	  
	<div className='notification-container'>
		<div className='notification-icon'><IoMdNotifications/></div>
		<p className='notification-msg'>{popUpMsg}</p>
	</div>
  )
}

export default NotifMsg