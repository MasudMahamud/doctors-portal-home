import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-4 mb-5 text-center">
            <img style={{height:'50px'}} src={service.img} alt="" />
            <h5 className="mt-5 mb-5"> {service.name} </h5>
            <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, molestias.
            </p>
        </div>
    );
};

export default ServiceDetails;