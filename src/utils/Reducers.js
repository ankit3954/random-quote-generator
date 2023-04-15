import { createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const intialState = {
    quote : "Where there is will there is way.",
    author : "George Herbert",
    id:"",
    tag: [],
    quoteArray : []
};

export const customReducer = createReducer(intialState, {

    randomQuote: (state, action) => {
            state.quote = action.payload.content;
            state.author = action.payload.author; 
            state.id = action.payload._id;   
    },
    tagState: (state, action) => {
        action.payload.map((obj) => {
            state.tag.push(obj.name);
        });
    },
    addingInBookmark: (state, action) => {
        state.quoteArray.push(action.payload);
    }
});