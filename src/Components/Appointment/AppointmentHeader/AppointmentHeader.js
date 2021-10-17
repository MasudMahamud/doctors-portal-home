import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/chair.png';

const AppointmentHeader = ({handleDateChange}) => {
    

    return (
        <main style={{ height: '480px' }} className="row d-flex align-items-center">
            <div className="col-md-4 ps-5 mb-5">
                <h2 className="ps-5 mb-5" style={{ color: '#3A4256' }}> Appointment </h2> <hr />

                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>

            <div className="col-md-6  ps-5">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;