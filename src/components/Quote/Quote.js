import React from "react";



import { BsFillShareFill, BsFillSuitHeartFill } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";

import "./Quote.css";

const Quote = () => {
  return (
	<section className="quote-container">
		<div className="text-container">
			<p>"Don't judge each day by the harvest you reap but by the seeds that you plant. Don't judge each day by the harvest you reap but by the seeds that you plant." </p>
			<p>-Robert Louis Stevenson</p>

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