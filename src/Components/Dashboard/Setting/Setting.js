import React from 'react';
import SideBar from '../SideBar/SideBar';

const Setting = () => {
    return (
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 ps-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h4 className="text-brand"> dashboard Setting section </h4>
            </div>
        </section>
    );
};

export default Setting;