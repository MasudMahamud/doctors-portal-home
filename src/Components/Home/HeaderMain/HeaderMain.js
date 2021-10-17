import React from 'react';
import chair from '../../../images/chair.png';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{ height: '480px' }} className="row d-flex align-items-center">
            <div className="col-md-4 ps-5 mb-5">
                <h1 style={{ color: '#3A4256' }}> Your New Smile <br /> Start Here </h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias perspiciatis mollitia inventore voluptates sint sit ut
                    veritatis nobis harum error voluptatum eligendi, quia delectus
                </p>
                {/* <button type="button" class="btn btn-secondary">GET APPOINTMENT</button> */}
                <Link to="/appointment" className="btn btn-brand">GET APPOINTMENT</Link>
            </div>

            <div className="col-md-6  ps-5">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;