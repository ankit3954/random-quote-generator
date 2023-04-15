import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import axios from 'axios';
 import "./TagContainer.scss";


  
  function TagContainer() {

    const dispatch = useDispatch();
    const {tag} = useSelector(state => state.custom)
    const tagArray = tag.map(tagMember => ({
        label:tagMember,
        value:tagMember
    }));

    const fetchChangedQuote = async(value) => {
        const {data} = await axios.get(`https://api.quotable.io/random?tags=${value}`);
        dispatch({
            type: "randomQuote",
            payload: data
          }) 
    };

    return ( 
        <div className="tag-container">
         <Select onChange={opt => fetchChangedQuote(opt.value)} className='tag-search'
        options={tagArray}
      />
    </div>
    );  
  }
  
  export default TagContainer
  
  