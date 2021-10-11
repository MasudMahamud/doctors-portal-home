import React from 'react';
import doctorImage1 from '../../../images/doctors/doctor1.png'; 
import doctorImage2 from '../../../images/doctors/doctor2.png'; 
import doctorImage3 from '../../../images/doctors/doctor3.png'; 
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const doctorsData = [
    {
        name: 'Dr Suity' ,
        icon: faPhone,
        phone: '+13598523',
        doctorImage: doctorImage1
    },
    {
        name: 'Dr Afroza' ,
        icon: faPhone,
        phone: '+65828523',
        doctorImage: doctorImage2
    },
    {
        name: 'Dr Zinnat' ,
        icon: faPhone,
        phone: '+86428523',
        doctorImage:doctorImage3
    },
]

const Doctors = () => {
    return (
        <section className="container my-5">
            <div className="section-header">
                <h4 className="text-center"> OUR DOCTORS </h4> <hr />
            </div>
            <div className="row text-center">
                {
                    doctorsData.map(data => <DoctorsDetails data={data}> </DoctorsDetails> )
                }
            </div>
            <hr />
        </section>
    );
};

export default Doctors;