import React from 'react'
import "./Bookmark.scss"
import { useSelector } from 'react-redux';


function Bookmarks() {

const {quoteArray} = useSelector(state => state.custom)
console.log(quoteArray);
  return (
    <div className='bookmark-container'>
        {quoteArray.map(elem => 
        <div className='bookmark-box'>
            <p className='quote'>{elem.quote}</p>
            <p className='author'>- {elem.author}</p>    
        </div>
        )}
    </div>
  );
}

export default Bookmarks