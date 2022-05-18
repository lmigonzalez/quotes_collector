import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";

import './Profile.css'

import MyQuote from "../../components/MyQuote/MyQuote";

const Profile = ({userId, setQuoteToUpdate}) => {
	const params = useParams()
	// console.log(userId)
	const [quotes, setQuotes] = useState([])
	const [userInf, setUserInf] = useState({})

	useEffect(()=>{
		getUser()
	}, [userId])

	const getUser = () =>{

		if(userId)(
			axios.get(`http://localhost:3000/api/user/userid/${userId}`)
			.then((res)=>{
				// console.log(res)
				getQuotesByUser()
			})
			.catch(err=>{
				console.log(err)
			})
		)

	
	}

	const getQuotesByUser = () =>{

		axios.get(`http://localhost:3000/api/quote/quotes/${userId}`)
		.then((res)=>{
			// console.log(res)
			setQuotes(res.data)
		})
		.catch(err=>{
			console.log(err)
		})
	} 



  return (
    <section className="profile">
      <div className="profile-inf">
        <p>Luis</p>
        <p>13 Quotes</p>
      </div>
	  {
		  quotes.length > 0? <Stack gap={3} className="quotes-container">
		  {quotes.map(quote=>{
					return(
						<MyQuote key = {quote._id} quote={quote} setQuoteToUpdate={setQuoteToUpdate}/>
					)
	
				})}
		  </Stack> : <p>No quotes</p>
	  }
      
    </section>
  );
};

export default Profile;
