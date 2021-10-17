import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const DoctorsDetails = ({ data }) => {
    console.log(data.file)
    return (
        <div className="col-md-4  col-sm-6 text-center">
            <div className="doctors-info">
                <div className="doctor-image">
                    {
                        data.image ? <img style={{ maxWidth: '200px' }} src={`data:image/png;base64,${data.image.img}`} alt="" />
                            :
                            <img style={{ maxWidth: '200px' }} className="img-fluid mb-3" src={`http://localhost:4000//${data.img}`} alt="" />
                    }
                </div>
                <div className="doctor-data text-center p-4">
                    <h5 className="text-primary"> {data.name} </h5>
                    <h6> <FontAwesomeIcon className="text-secondary" icon={faPhone} /> +880-188-934789</h6>
                </div> <hr />
            </div>
        </div>
    );
};

export default DoctorsDetails;