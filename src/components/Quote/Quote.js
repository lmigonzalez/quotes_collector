import React from "react";



import { BsFillShareFill, BsFillSuitHeartFill } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";

import "./Quote.css";

const Quote = ({quote}) => {
  return (
	<section className="quote-container">
		<div className="text-container">
			<p>{quote.quote}</p>
			<p>{quote.author}</p>

		</div>

		<div className="links-container">
			<div className="share-copy">
				<BsFillShareFill className="icon"/>
				<IoIosCopy className="icon"/>
			</div>
			<div className="like">
				<BsFillSuitHeartFill className="icon"/>
				<p>11.1k</p>
			</div>
		</div>

	</section>
  );
};

export default Quote;


{/* <div className="links-container">
<div className="share-copy">
  <BsFillShareFill className="icon" />
  <IoIosCopy className="icon" />
</div>
<div className="like-quote">
  <BsFillSuitHeartFill className="icon" />
  <p>11.1k</p>
</div>
</div> */}