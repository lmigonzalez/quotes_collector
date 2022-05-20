import React from 'react'
import './AddBtn.css'
import {useNavigate } from "react-router-dom";
import { MdOutlineAddCircle } from "react-icons/md"

import { useStateContext } from "../../context/StateContext";


function Addbtn() {
  const navigate = useNavigate();
  const { login, setPopUps } =
  useStateContext();

  const handleAddQuote = () => {
    if (!login) {
      setPopUps(true);
      return;
    }
    navigate("/addquote");
  };

  return (
	
		<MdOutlineAddCircle className='add-mobile-icon' onClick={handleAddQuote}/>
  )
}

export default Addbtn