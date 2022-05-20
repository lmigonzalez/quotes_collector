import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

import './Quotes.css'

import Quote from "../Quote/Quote";
import Addbtn from "../AddBtn/Addbtn";

import { useStateContext } from "../../context/StateContext";


const Quotes = () =>{

	const {quotes, token, userId, setLiked, liked} = useStateContext()
	let reverseQuotes
	if(quotes.length > 0){
		reverseQuotes = ([...quotes].reverse())
	}
	return (
		<>
		<Stack gap={3} className= 'quotes-container'>
			{reverseQuotes && reverseQuotes.map(quote=>{
				return(
					<Quote key = {quote._id} quote = {quote}/>
				)

			})}
		</Stack>
		<Addbtn/>
		</>

	)
}


export default Quotes;