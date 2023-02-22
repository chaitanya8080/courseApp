import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Request from './components/Request/Request';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Users from './components/Admin/Users/Users';
import AdminCourses from './components/Admin/Courses/AdminCourses';
import Loader from './components/Layout/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';

import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';

function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} user={user} />
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/courses" element={<Courses></Courses>}></Route>
            <Route path="/course/:id" element={<CoursePage />}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>

            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            ></Route>

            <Route path="/request" element={<Request />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
                >
                  <ForgetPassword />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route>
            <Route path="/paymentfail" element={<PaymentFail />}></Route>

            {/* admin  */}
            <Route path="/admin/dashboard" element={<Dashboard />}></Route>
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <Users />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <AdminCourses />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </>
      )}
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
