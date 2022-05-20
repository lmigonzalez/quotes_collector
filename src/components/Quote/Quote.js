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
      console.log("no token!!!, login to get a new token");
      return
    }

    const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
    };
	const id = JSON.stringify(userId)

	//   console.log(id)
	//   console.log(quote)
	  console.log(userId)

    axios.patch(
        `http://localhost:3000/api/quote/likequote/${quote._id}`, {id:userId}, config,
      )
      .then((res) => {
        // console.log(res);
		  setLiked(!liked)
      })
      .catch((err) => {
        console.log(err);
      });

	  console.log(checkIfLiked())
  };

  return (
    <section className="quote-container">
      <div className="text-container">
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
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

{
  /* <div className="links-container">
<div className="share-copy">
  <BsFillShareFill className="icon" />
  <IoIosCopy className="icon" />
</div>
<div className="like-quote">
  <BsFillSuitHeartFill className="icon" />
  <p>11.1k</p>
</div>
</div> */
}
