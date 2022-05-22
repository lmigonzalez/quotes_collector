import React from "react";
import axios from "axios";
import {CopyToClipboard}from 'react-copy-to-clipboard'
import { BsFillShareFill, BsFillSuitHeartFill } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";
import { Link,useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";

import "./Quote.css";

const Quote = ({quote}) => {
  const navigate = useNavigate()
  const {userId, token, setLiked, liked, setPopUps, setNotification, setPopUpMsg, closePopUp} = useStateContext()

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

  const shareQuote = () =>{

  }

  const quoteCopied = () =>{
    setPopUpMsg('quote copied!')
    setNotification(true)
    closePopUp()
  }

  return (
    <section className="quote-container">
      <div className="text-container">
        <p>{quote.quote}</p>
        <p className="quote-author">{quote.author?quote.author: 'unknown'}</p>
      </div>

      <div className="links-container">
        <div className="share-copy">
          <a
          className="share-btn"
          href={`https://twitter.com/intent/tweet?text=${quote.quote} -${quote.author}`}
          target='_blank'
          rel="noopener noreferrer"
          >
            <BsFillShareFill className="icon" onClick={shareQuote}/>
          </a>
          <CopyToClipboard text={`${quote.quote} -${quote.author}`}>
            <IoIosCopy className="icon copy-btn" onClick={quoteCopied}/>
          </CopyToClipboard>
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

