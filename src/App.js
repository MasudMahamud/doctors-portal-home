import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import FeaturedService from "./Components/Home/FeaturedService/FeaturedService";
import MakeAppointment from "./Components/Home/MakeAppointment/MakeAppointment";
import Testimonials from "./Components/Home/Testimonials/Testimonials";
import Blog from "./Components/Home/Blog/Blog";
import Doctors from "./Components/Home/Doctors/Doctors";
import Contract from "./Components/Home/Contract/Contract";
import Footer from "./Components/Home/Footer/Footer";


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>

          <Route path="/">
            <Home></Home>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contract></Contract>
            <Footer></Footer>
          </Route>


        </Switch>

      </Router>
    </div>
  );
}

export default App;
