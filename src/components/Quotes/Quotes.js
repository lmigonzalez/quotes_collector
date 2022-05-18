import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

import './Quotes.css'

import Quote from "../Quote/Quote";


const Quotes = ({quotes, token, userId, setLiked, liked}) =>{


	return (
		<Stack gap={3} className= 'quotes-container'>
			{quotes.map(quote=>{
				return(
					<Quote key = {quote._id} quote={quote} token = {token} userId = {userId} setLiked = {setLiked} liked = {liked}/>
				)

			})}
		</Stack>

	)
}


export default Quotes;