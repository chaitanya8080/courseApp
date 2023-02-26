import axios from 'axios';

import { server } from '../store';

export const createCourse = (formData) => async dispatch => {
  try {
    dispatch({ type: 'createCourseRequest' });

    const { data } = await axios.post(`${server}/createcourses`, formData, {
      headers: { 'Content-type': `multipart/form-data` },
      withCredentials: true,
    });

    dispatch({ type: 'createCourseSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createCourseFail',
      payload: error.response.data.message,
    });
  }
};


export const deleteCourse = (id) => async dispatch => {
  try {
    dispatch({ type: 'deleteCourseRequest' });

    const { data } = await axios.delete(`${server}/course/${id}`,{
      withCredentials: true,
    });

    dispatch({ type: 'deleteCourseSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteCourseFail',
      payload: error.response.data.message,
    });
  }
};

export const addLecture = (id,formData) => async dispatch => {
  try {
    dispatch({ type: 'addLectureRequest' });

    const { data } = await axios.post(`${server}/course/${id}`,formData,
    {
      headers: { 'Content-type': `multipart/form-data` },
      withCredentials: true,
    }
);
    
    dispatch({ type: 'addLectureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'addLectureFail',
      payload: error.response.data.message,
    });
  }
};


export const deleteLecture = (courseId, lectureId) => async dispatch => {
  try {
    dispatch({ type: 'deleteLectureRequest' });

    const { data } = await axios.delete(`${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
    {
      withCredentials: true,
    }
);
    
    dispatch({ type: 'deleteLectureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteLectureFail',
      payload: error.response.data.message,
    });
  }
};


export const getAllUsers = () => async dispatch => {
  try {
    dispatch({ type: 'getAllUsersRequest' });

    const { data } = await axios.get(`${server}/admin/users`,
    {
      withCredentials: true,
    }
);
    
    dispatch({ type: 'getAllUsersSuccess', payload: data.user });
  } catch (error) {
    dispatch({
      type: 'getAllUsersFail',
      payload: error.response.data.message,
    });
  }
};


export const updateUserRole = (id) => async dispatch => {
  try {
    dispatch({ type: 'updateUserRoleRequest' });

    const { data } = await axios.put(`${server}/admin/users/${id}`,{},
    {
      withCredentials: true,
    }
);
    
    dispatch({ type: 'updateUserRoleSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateUserRoleFail',
      payload: error.response.data.message,
    });
  }
};


export const deleteUser = (id) => async dispatch => {
  try {
    dispatch({ type: 'deleteUserRequest' });

    const { data } = await axios.delete(`${server}/admin/users/${id}`,
    {
      withCredentials: true,
    }
);
    
    dispatch({ type: 'deleteUserSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteUserFail',
      payload: error.response.data.message,
    });
  }
};


export const getDashboardStats = (id) => async dispatch => {
  try {
    dispatch({ type: 'getAdminStatsRequest' });

    const { data } = await axios.get(`${server}/admin/stats`,
    {
      withCredentials: true,
    }
);
    
    dispatch({ type: 'getAdminStatsSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'getAdminStatsFail',
      payload: error.response.data.message,
    });
  }
};


