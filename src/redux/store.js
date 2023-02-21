
import { configureStore } from "@reduxjs/toolkit";
import { userReducer , profileRuducer} from "./reducers/userReducer";


const store = configureStore({reducer:{
  user:userReducer,
  profile:profileRuducer
}})


export default store;

export const server = `https://tame-lime-chameleon-veil.cyclic.app/api/v1`;