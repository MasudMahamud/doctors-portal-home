import React from 'react';
import AppointPopUpFrom from '../AppointPopUpFrom/AppointPopUpFrom';

const BookAppointmentCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-4 text-center">
                <div className="card-body ">
                    <h5 className="card-title text-brand"> {booking.subject} </h5>
                    <h6 className="text-secondary"> {booking.visitingHour} </h6>
                    <p className="text-secondary"> {booking.totalSpace} SPACES AVAILABLE </p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase"> Book Appointment  </button>
                    <AppointPopUpFrom modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentSub={booking.subject} date={date}></AppointPopUpFrom>
                </div>
            </div>
        </div>
    );
};

export default BookAppointmentCard;