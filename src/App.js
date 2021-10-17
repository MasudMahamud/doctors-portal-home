import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react'
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment'
import LogIn from "./Components/LogIn/LogIn/LogIn";
import PrivateRoute from "./Components/LogIn/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./Components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import DashboardAppointments from "./Components/Dashboard/DashboardAppointments/DashboardAppointments";
import Prescriptions from "./Components/Dashboard/Prescriptions/Prescriptions";
import Setting from "./Components/Dashboard/Setting/Setting";
import Blog from "./Components/Home/Blog/Blog";
import Contract from "./Components/Home/Contract/Contract";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/dashboardAppointments">
              <DashboardAppointments></DashboardAppointments>
            </Route>

            <Route path="/allPatients">
              <AllPatients></AllPatients>
            </Route>

            <Route path="/login">
              <LogIn></LogIn>
            </Route>

            <Route path="/prescriptions">
              <Prescriptions></Prescriptions>
            </Route>

            <Route path="/addDoctor">
              <AddDoctor></AddDoctor>
            </Route>

            <Route path="/setting">
              <Setting></Setting>
            </Route>

            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contract">
              <Contract></Contract>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
