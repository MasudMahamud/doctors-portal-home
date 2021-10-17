import React, { useEffect, useState } from 'react';
import SideBar from '../../Dashboard/SideBar/SideBar';
import AppointmentChartTable from '../AppointmentChartTable/AppointmentChartTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
       
            
            <div className="container-fluid row">
            <SideBar></SideBar>
                <div className="col-md-10 p-4 pr-5" style={{backgroundColor: "#F4FDFB" }}>
                    <h6> All Patient </h6>
                    <AppointmentChartTable appointments={appointments}></AppointmentChartTable>
                </div>
            </div>
      
    );
};

export default AllPatients;