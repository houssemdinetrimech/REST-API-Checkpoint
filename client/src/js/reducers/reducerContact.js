import { GET_CONTACTS } from "../constants/actionsTypes";

const intialState={
    contacts:[]
}

export const reducerContact = (state=intialState, action) => {
  switch (action.type) {
      case GET_CONTACTS:
         return {contacts:action.payload}
  
      default:
          return state;
  }
}
