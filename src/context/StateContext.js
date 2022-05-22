import React, {createContext, useContext, useState, useEffect} from "react";

const Context = createContext()

export const StateContext = ({children}) =>{

	const [token, setToken] = useState(null)
	const [userId, setUserId] = useState(null)
	const [quotes, setQuotes] = useState([])
	const [quoteToUpdate, setQuoteToUpdate]= useState(null)
	const [quoteDeletedMsg, setQuoteDeletedMsg] = useState(null)
	const [name, setName] = useState(null)
	const [liked, setLiked] = useState(false)
	const [login, setLogin] = useState(false)
	const [popUps, setPopUps] = useState(false)
	const [popUpMsg, setPopUpMsg] =useState(null)
	const [notification, setNotification] = useState(false)
	

	const closePopUp = () =>{
		setTimeout(() => {
			setNotification(false);
		  }, 5000);
	}

	return(
		<Context.Provider
		value={{
			token,
			userId,
			quotes,
			quoteToUpdate,
			name,
			liked,
			quoteDeletedMsg,
			login,
			popUps, 
			popUpMsg, 
			notification,
			setToken,
			setUserId,
			setQuotes,
			setQuoteToUpdate,
			setName,
			setLiked,
			setQuoteDeletedMsg,
			setLogin,
			setPopUps,
			setPopUpMsg,
			setNotification,
			closePopUp,
		}}
		>
			{children}
		</Context.Provider>
	)

}

export const useStateContext = () => useContext(Context);