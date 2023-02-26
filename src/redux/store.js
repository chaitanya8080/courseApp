
import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { courseReducer } from "./reducers/courseReducer";
import { otherReducer } from "./reducers/otherReducer";
import { userReducer , profileRuducer, subscriptionReducer} from "./reducers/userReducer";


const store = configureStore({reducer:{
  user:userReducer,
  profile:profileRuducer,
  course:courseReducer,
  subscription:subscriptionReducer,
  admin:adminReducer,
  other:otherReducer
}})


export default store;

export const server = `https://tame-lime-chameleon-veil.cyclic.app/api/v1`;