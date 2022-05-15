import React from "react";
import './MotivationalQuotes.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

import Quote from "../../components/Quote/Quote";

const MotivationalQuotes = () => {
  return (
    <Stack gap={3} className="quotes-container">
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
    </Stack>
  );
};

export default MotivationalQuotes;