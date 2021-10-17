import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({ appointments }) => {
    console.log(appointments)
    return (
        <div>
            <h2 className="text-secondary p-2"> Today Appointment List: {appointments.length}</h2>
           
            {
               appointments.length > 0 ? 
               <AppointmentShortList appointments={appointments}></AppointmentShortList> 
                :
                <div className="p-5">
                    <h3 className="text-center lead"> No appointments available in this date </h3>
                </div>
            }
        </div>
    );
};

export default AppointmentByDate;