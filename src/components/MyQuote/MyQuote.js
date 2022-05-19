import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import { useStateContext } from "../../context/StateContext";


import "./MyQuote.css";

const MyQuote = ({quote, deleteQuote}) => {
  const {setQuoteToUpdate} = useStateContext()
  const navigate = useNavigate();

  const editQuote = () => {
    navigate(`/editquote/${quote._id || quote.id}`);
    setQuoteToUpdate(quote);
    console.log(quote);
  };

  const handleDeleteQuote = () =>{
	  deleteQuote(quote._id)
  }

  return (
    <section className="quote-container">
      <div className="text-container">
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
      </div>

      <div className="links-container">
        <div className="share-copy">
          <AiFillDelete className="icon" onClick={handleDeleteQuote}/>
          <FaEdit className="icon" onClick={editQuote} />
        </div>
        <div className="like">
          <BsFillSuitHeartFill className="static-icon" />
          <p>{quote.likes.length}</p>
        </div>
      </div>
    </section>
  );
};

export default MyQuote;
