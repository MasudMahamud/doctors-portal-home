import React, { useEffect, useState } from 'react';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';



const Doctors = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch('https://guarded-oasis-04933.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])

    return (
        <section className="container my-5">
            <div className="section-header">
                <h4 className="text-center"> OUR DOCTORS </h4> <hr />
            </div>
            <div className="row text-center">
                {
                    doctor.map(data => <DoctorsDetails key={doctor._id} data={data}> </DoctorsDetails>)
                }
            </div>
            <hr />
        </section>
    );
};

export default Doctors;