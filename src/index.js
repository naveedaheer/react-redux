import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore} from "redux"

const firstState = 2;

// reducer
function counter(state=firstState, action){
   switch(action.type){
    case "INC":
    return state +10
    break;
    case "DEC":
    return state-7
    break;
    default:
    return state
  }
}

let store = createStore(counter)

store.subscribe(()=>{console.log("Updated",store.getState())})

store.dispatch({type: "INC", val: 10})
store.dispatch({type: "DEC", val: 1})