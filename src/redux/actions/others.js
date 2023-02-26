

import axios from 'axios';

import { server } from '../store';



export const contactUs = (name,email,message) => async dispatch => {

    try {
      dispatch({ type: 'contactRequest' });
  
      const { data } = await axios.post(`${server}/contact`,{name,email,message},
      {
        headers: {  'Content-type': 'application/json' },
        withCredentials: true,
      }
  );
      
      dispatch({ type: 'contactSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'contactFail',
        payload: error.response.data.message,
      });
    }
  };


  export const courseRequest = (name,email,course) => async dispatch => {
    try {
      dispatch({ type: 'courseRequest' });
  
      const { data } = await axios.post(`${server}/courserequest`,{name,email,course},
      {
        headers: {  'Content-type': 'application/json' },
        withCredentials: true,
      }
  );
      
      dispatch({ type: 'courseSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'courseFail',
        payload: error.response.data.message,
      });
    }
  };