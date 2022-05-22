import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";

import './Profile.css'

import MyQuote from "../../components/MyQuote/MyQuote";
import Addbtn from "../../components/AddBtn/Addbtn";

import { useStateContext } from "../../context/StateContext";

const Profile = () => {
	const [updatePage, setUpdatePage] = useState(false)
	const navigate = useNavigate()
	const {userId, token, name, quoteDeletedMsg, setQuoteDeletedMsg, setNotification, setPopUpMsg, closePopUp, backendUrl} = useStateContext()

	
	const [quotes, setQuotes] = useState([])

	useEffect(()=>{
		checkIfToken()
	}, [])
	
	useEffect(()=>{
		getUser()
		getQuotesByUser()
	}, [userId, quoteDeletedMsg, updatePage])

	const getUser = () =>{

		if(userId)(
			axios.get(`${backendUrl}/api/user/userid/${userId}`)
			.then(()=>{
			
				getQuotesByUser()
			})
			.catch(err=>{
				console.log(err)
			})

		)

	
	}

	const getQuotesByUser = () =>{

		axios.get(`${backendUrl}/api/quote/quotes/${userId}`)
		.then((res)=>{
			setQuotes(res.data)
		})
		.catch(err=>{
			console.log(err)
		})
	} 

	const deleteQuote = (quoteId) =>{
		if(!token){
			console.log('no token!!!, login to get a new token')
			return
		  }
	  
		  const config = {
			headers: {
			  'Content-Type': 'application/json',
			  Authorization: `Bearer ${token}`,
			},
		  }
			
		
	  
			  axios.delete(`${backendUrl}/api/quote/deletequote/${quoteId}`, config)
			  .then(()=>{
				setPopUpMsg('quote deleted successfully')
				setNotification(true)
				closePopUp()
				})
				.catch(()=>{
					setPopUpMsg("Oops, we couldn't delete your quote")
					setNotification(true)
					closePopUp()
				})
			
	
	  }

	  const checkIfToken = () =>{
		const storedData = JSON.parse(localStorage.getItem('userData'))
		if(!storedData){
				navigate('/') 
		}

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
						<MyQuote key = {quote._id} quote={quote} deleteQuote={deleteQuote} setUpdatePage={setUpdatePage} updatePage={updatePage}/>
					)
	
				})}
		  </Stack> : <p className="no-quotes">You don't have any quotes yet.</p>
	  }
	  <Addbtn/>
      
    </section>
  );
};

export default Profile;
