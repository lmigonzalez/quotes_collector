import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

import './Quotes.css'

import Quote from "../Quote/Quote";


const Quotes = () =>{


	return (
		<Stack gap={3} className= 'quotes-container'>
			<Quote/>
			<Quote/>
			<Quote/>
			<Quote/>
		</Stack>

	)
}


export default Quotes;