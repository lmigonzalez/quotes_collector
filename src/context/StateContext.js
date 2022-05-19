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



	// console.log(token)
	// console.log(userId)





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
			setToken,
			setUserId,
			setQuotes,
			setQuoteToUpdate,
			setName,
			setLiked,
			setQuoteDeletedMsg,
			setLogin,
		}}
		>
			{children}
		</Context.Provider>
	)

}

export const useStateContext = () => useContext(Context);