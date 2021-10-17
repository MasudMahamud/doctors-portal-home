import React from 'react';
import BookAppointmentCard from '../BookAppointmentCard/BookAppointmentCard';

const bookingData = [
    { 
       _id: '5fd2rb5dfg2fd5sbv7nbn',
       id: 1,
       subject: 'Teeth Orthodontics',
       visitingHour: '8:00 Am - 9:00 AM',
       totalSpace: 10 
    },
    { 
        _id: '5fdr2b1dfg54fd2sbv7nbn',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:00 Am - 11:00 AM',
        totalSpace: 10 
     },
     { 
        _id: '5fd0rb7dfg2fd8sbv2nbn',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 Am - 6:00 PM',
        totalSpace: 10 
     },
     { 
        _id: '5fdr8bd4fgf8dsb0v2nbn',
        id: 4,
        subject: 'Cavity protection',
        visitingHour: '7:00 Am - 8:30 AM',
        totalSpace: 10 
     },
     { 
        _id: '5fdr4bd8fg1fds8b2vn0bn',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 Am - 9:00 AM',
        totalSpace: 10 
     },
     { 
        _id: '5fdr5fdg4fds55nbn',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 Am - 9:00 AM',
        totalSpace: 10 
     },
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-success ms-4"> Appointment Available on {date.toDateString()} </h2> <hr />
            <div className="row">
                {
                    bookingData.map(booking => <BookAppointmentCard booking={booking} date={date} key={booking.id}></BookAppointmentCard> )
                }
            </div>
        </section>
    );
};

export default BookAppointment;