import React from 'react'
import "./QuoteContainer.scss"
import bookmark from "../assets/bookmark-fill.svg"
import { useDispatch, useSelector } from 'react-redux';

function QuoteContainer() {

    const dispatch = useDispatch();
    const {quote, author} = useSelector(state => state.custom);
    const addinBookmark = () => {
        dispatch({
            type: "addingInBookmark",
            payload: {quote:quote,
                      author:author  
            }
      })
};

  return (
    <div className='quote-container'>
        <p className='quote-para'>{quote}</p>
        <p className='author-name'>- {author}</p>
        <div className='save-container'>
            <img onClick={addinBookmark} className='bookmark-icon' src={bookmark} alt='bookmark-icon'/>
        </div>
    </div>
  )
}

export default QuoteContainer