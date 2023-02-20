import React from 'react';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
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

function App() {

window.addEventListener('contextmenu',e => {
  e.preventDefault();
})

  return(
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/courses" element={<Courses></Courses>}></Route>
      <Route path="/course/:id" element={<CoursePage/>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>


       
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/changepassword" element={<ChangePassword/>}></Route>
      <Route path="/updateprofile" element={<UpdateProfile/>}></Route>

      <Route path="/request" element={<Request/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
      <Route path="/resetpassword/:token" element={<ResetPassword/>}></Route>
      <Route path="/subscribe" element={<Subscribe/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/paymentsuccess" element={<PaymentSuccess/>}></Route>
      <Route path="/paymentfail" element={<PaymentFail/>}></Route>

      {/* admin  */}
      <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/admin/createcourse" element={<CreateCourse/>}></Route>
      <Route path="/admin/users" element={<Users/>}></Route>
      <Route path="/admin/courses" element={<AdminCourses/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App;
