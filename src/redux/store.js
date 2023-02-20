
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";


const store = configureStore({reducer:{
  user:userReducer
}})


export default store;

export const server = `https://tame-lime-chameleon-veil.cyclic.app/api/v1`;