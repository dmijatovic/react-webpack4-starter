
import { Config } from './app.cfg';

const initialState={
  //basic header config
  header: Config.header,
  //clock inital values
  clock: {
    time:{
      hrs: "00",
      min: "00",
    },
    update: 1000,
    semicolon: true 
  },
  //app-loader
  loader:{
    type:'second',
    show: true
  }
}


export const loaderReducer = (state=initialState.loader,action)=>{
  //log action comming into reducer
  logAction("loaderReducer",state,action);
  //just for fun use lowercased action types
  switch (action.type.toLowerCase()){
    case "show_loader":
      return {
        ...state,
        show: true 
      }
    case "hide_loader":
      return {
        ...state,
        show: false
      }
    //always return state 
    //to continue 'event' chain
    default:
      return state;
  }
}

export const headerReducer = (state = initialState.header, action) => {
  //log action comming into reducer
  logAction("headerReducer",state,action);
  //just for fun use lowercased action types
  switch (action.type.toLowerCase()){
    case "set_page_title":
      return {
        ...state,
        pageTitle: action.payload 
      }
    case "set_app_title":
      return {
        ...state,
        appTitle: action.payload 
      }
    case "set_app_logo":
      return {
        ...state,
        logo: action.payload 
      } 
    //always return state 
    //to continue 'event' chain
    default:
      return state;
  } 
}


const reducer = (state = initialState, action) =>{
  logAction("reducer", state, action);
  return state;
}

function logAction(reducer, state, action){
  console.group(`Reducer...${reducer}`);
  console.log("state...", state);
  console.log("action...", action);
  console.groupEnd();
}

export default reducer;
