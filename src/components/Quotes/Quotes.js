import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

import './Quotes.css'

import Quote from "../Quote/Quote";

import { useStateContext } from "../../context/StateContext";


const Quotes = () =>{

	const {quotes, token, userId, setLiked, liked} = useStateContext()

	return (
		<Stack gap={3} className= 'quotes-container'>
			{quotes.map(quote=>{
				return(
					<Quote key = {quote._id} quote = {quote}/>
				)

			})}
		</Stack>

	)
}


export default Quotes;