import React from 'react';
import Fluoride from '../../../images/Fluoride.png';
import Cavity from '../../../images/Cavity.png';
import Teeth from '../../../images/Teeth.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img: Teeth
    }
]
const Services = () => {
    return (
        <section className="container service-container  pt-5">
            <div className="row mt-5  pt-5">
                <div className="text-center">
                    <h4 className="mb-3" style={{ color: '#1CC7C1' }}> OUR SERVICES </h4>
                    <h2 className="mb-5 text-secondary"> Services We Provides </h2>
                </div> <hr />

                {
                    serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div> <hr />
        </section>
    );
};

export default Services;