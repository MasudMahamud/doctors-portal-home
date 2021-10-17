import React, { useContext, useEffect, useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faHome,  faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const SideBar = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch('https://guarded-oasis-04933.herokuapp.com/isDoctor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(response => response.json())
      .then(data => setIsDoctor(data))
  }, [])

  return (
    <div className=" d-flex flex-column  col-md-2 col-sm-4" >
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#"> Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="text-brand"  style={{fontFamily:'auto'}}>Dashboard Menu</Offcanvas.Title>
            </Offcanvas.Header> <hr />
            <Offcanvas.Body>
              <Nav className="ps-4"  style={{fontFamily:'auto'}}>
                <Link to="/dashboard" className="text-dark"><FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span></Link> <br />
                <Link to="/home" className="text-dark"><FontAwesomeIcon icon={faHome} /> <span>Home</span></Link> <br />
                {isDoctor && <div>
                  <Link to="/dashboardAppointments" className="text-dark"><FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span></Link> <br /><br />
                  <Link to="/allPatients" className="text-dark"> <FontAwesomeIcon icon={faUsers} /> <span>Patients</span></Link> <br /><br />
                  <Link to="/prescriptions" className="text-dark"> <FontAwesomeIcon icon={faSignOutAlt} /> <span>Prescriptions</span></Link> <br /><br />
                  <Link to="/addDoctor" className="text-dark"><FontAwesomeIcon icon={faGripHorizontal} /> <span>Add Doctor</span></Link> <br /><br />
                  <Link to="/setting" className="text-dark"><FontAwesomeIcon icon={faCog} /> <span>Setting</span></Link>
                </div>}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default SideBar;