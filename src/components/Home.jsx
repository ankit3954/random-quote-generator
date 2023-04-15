import React, { useEffect, useState } from 'react'
import QuoteContainer from "./QuoteContainer.jsx";
import TagContainer from "./TagContainer.jsx";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import "./Home.scss";

function Home() {

  const dispatch = useDispatch();
  const {quote, author} = useSelector(state => state.custom)

  const fetchQuoteFromApi = async() => {
    const {data} = await axios.get("https://api.quotable.io/random");
      dispatch({
        type: "randomQuote",
        payload: data
      }) 
  }

  const fetchTagFromAPI = async() => {
    const {data} = await axios.get("https://api.quotable.io/tags");
    dispatch({
      type: "tagState",
      payload: data
    })
  }

  useEffect(() => {
    fetchTagFromAPI();
  }, [])
  
  return (
    <div className='home'>
      <QuoteContainer className="quote-container" />
      <TagContainer className="tag-container" placeholder = "Select..."/>
      <button className='random-quote' onClick={fetchQuoteFromApi}>Next Quote</button>
    </div>
  )
}

export default Home