import React, {useContext} from "react";
import './LoveQuotes.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

import Quote from "../../components/Quote/Quote";
import { useStateContext } from "../../context/StateContext";

const LoveQuotes = () => {

  const {quotes} = useStateContext()

  let filterQuotes

  if(quotes.length > 0){
		filterQuotes = quotes.filter((quote)=>{
      return quote.categories === 'Love'
    })
	}

  console.log(filterQuotes)
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

export default LoveQuotes;
