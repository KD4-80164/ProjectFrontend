import React from 'react'
import Footer from "./Footer"
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/SignUp';
import Hotel from './Hotel';
import AddHotel from './AddHotel';
import Navbar from './Navbar';
import UserDashboard from './UserDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard';
import Booking from './Booking';
import ManageAccount from './ManageAccount';
import BookingHistory from './History';
import NavbarUser from './NavbarUser';
import DropDown from './DropDown';
var id = sessionStorage.getItem("RoleId");
const Home = () => {
  return (
    <Router>
    {id ==1 ? <NavbarUser /> : <Navbar />}
    {id ==2 ? <AddHotel /> : <Hotel />}
    <ToastContainer/>
    {/* <AddHotel/> */}
    <routes>
          <Route path="/login" component={Login} />
          {/* <Route path="/navbaruser" component={NavbarUser} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/hotel" component={Hotel} /> 
          <Route path="/addhotel" component={AddHotel} /> 
          <Route path="/dashboard" component={Dashboard} /> 
          <Route path="/booking/:hotelId" component={Booking} /> 
          <Route path="/user/manage-acc" component={ManageAccount} />
          <Route path="/user/booking-history" component={BookingHistory} />
    </routes>
    <Footer />
    </Router>
   )
}

export default Home