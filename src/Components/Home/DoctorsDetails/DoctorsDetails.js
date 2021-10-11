import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DoctorsDetails = ({ data }) => {
    return (
        <div className="col-md-4">
            <div className="doctors-info">
                <div className="doctor-image">
                    <img className="my-4 fluid-image" style={{maxWidth:'320px'}} src={data.doctorImage} alt="" />
                    
                </div>
                <div className="doctor-data text-center p-4 d-flex">
                        <h5 className="text-primary ms-5"> {data.name} </h5>
                        <FontAwesomeIcon className="w-10px ms-5 me-2" icon={data.icon}></FontAwesomeIcon>
                        <p className="text-secondary"> {data.phone} </p> 
                    </div> <hr />
            </div>
        </div>
    );
};

export default DoctorsDetails;