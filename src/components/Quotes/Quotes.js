import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

import './Quotes.css'

import Quote from "../Quote/Quote";


const Quotes = ({quotes, token, userId}) =>{


	return (
		<Stack gap={3} className= 'quotes-container'>
			{quotes.map(quote=>{
				return(
					<Quote key = {quote._id} quote={quote} token = {token} userId = {userId}/>
				)

			})}
		</Stack>

	)
}


export default Quotes;