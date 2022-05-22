import React from 'react'
import {useNavigate} from 'react-router-dom'

import sad from '../../img/sad.png'
import './NotFound.css'

function NotFound() {

	const navigate = useNavigate()

	const backHome = () =>{
		navigate('/')
	}
  return (
	<div className='not-found'>
		<img src={sad} alt='sad face'/>
		<h2>404</h2>
		<p>We couldn't find the page you are looking for.</p>
		<p className='back-home' onClick={backHome}>Go to home page</p>

	</div>
  )
}

export default NotFound