import React from "react";
import axios from "axios";

import { BsFillShareFill, BsFillSuitHeartFill } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";

import { useStateContext } from "../../context/StateContext";

import "./Quote.css";

const Quote = ({quote}) => {

  const {userId, token, setLiked, liked, setPopUps} = useStateContext()

  const checkIfLiked = () =>{
	  if(quote.likes.includes(userId)){
		  return 'icon-red'
	  }
	  else{
		  return 'icon'
	  }
  }


  const handleLike = () => {
    if (!token) {
      setPopUps(true)
      return
    }

    const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
    };
	const id = JSON.stringify(userId)




    axios.patch(
        `http://localhost:3000/api/quote/likequote/${quote._id}`, {id:userId}, config,
      )
      .then((res) => {
		  setLiked(!liked)
      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <section className="quote-container">
      <div className="text-container">
        <p>{quote.quote}</p>
        <p>{quote.author?quote.author: 'unknown'}</p>
      </div>

      <div className="links-container">
        <div className="share-copy">
          <BsFillShareFill className="icon" />
          <IoIosCopy className="icon" />
        </div>
        <div className="like">
			{
				<BsFillSuitHeartFill className= {checkIfLiked()}  onClick={handleLike} />
			}
          
          <p>{quote.likes.length}</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;

