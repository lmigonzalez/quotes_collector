import React from "react";
import './MotivationalQuotes.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

import Quote from "../../components/Quote/Quote";
import { useStateContext } from "../../context/StateContext";

const MotivationalQuotes = () => {

  const {quotes} = useStateContext()

  let filterQuotes

  if(quotes.length > 0){
		filterQuotes = quotes.filter((quote)=>{
      return quote.categories === 'Motivational'
    })
	}

  return (
    <Stack gap={3} className="quotes-container">
     	{filterQuotes && filterQuotes.map(quote=>{
				return(
					<Quote key = {quote._id} quote = {quote}/>
				)

			})}
    </Stack>
  );
};

export default MotivationalQuotes;