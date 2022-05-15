import React from "react";
import './LoveQuotes.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

import Quote from "../../components/Quote/Quote";

const LoveQuotes = () => {
  return (
    <Stack gap={3} className="quotes-container">
      <Quote />
      <Quote />
    </Stack>
  );
};

export default LoveQuotes;
