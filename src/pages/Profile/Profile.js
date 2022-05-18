import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";

import './Profile.css'

import MyQuote from "../../components/MyQuote/MyQuote";

const Profile = ({userId, setQuoteToUpdate, token, name}) => {

	const params = useParams()
	const [quotes, setQuotes] = useState([])
	const [userInf, setUserInf] = useState({})
	const [deleteMessage, setDeleteMessage] = useState(null)


	useEffect(()=>{
		getUser()
		getQuotesByUser()
	}, [userId, deleteMessage])

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

	const deleteQuote = (quoteId) =>{
		if(!token){
			console.log('no token!!!, login to get a new token')
		  }
	  
		  const config = {
			headers: {
			  'Content-Type': 'application/json',
			  Authorization: `Bearer ${token}`,
			},
		  }
			
		
	  
			  axios.delete(`http://localhost:3000/api/quote/deletequote/${quoteId}`, config)
			  .then(res=>{
				  setDeleteMessage('Quote deleted successfully')
				  console.log(deleteMessage)
				})
				.catch(err=>{
					console.log(err)
				})
				.finally(()=>{
					
					setDeleteMessage(null)
			  	})
	
	  }



  return (
    <section className="profile">
      <div className="profile-inf">
        <p>{name}</p>
        <p>{quotes.length} {quotes.length <=1? 'Quote': 'Quotes'}</p>
      </div>
	  {
		  quotes.length > 0? <Stack gap={3} className="quotes-container">
		  {quotes.map(quote=>{
					return(
						<MyQuote key = {quote._id} quote={quote} setQuoteToUpdate={setQuoteToUpdate} token = {token} deleteQuote={deleteQuote}/>
					)
	
				})}
		  </Stack> : <p>No quotes</p>
	  }
      
    </section>
  );
};

export default Profile;
