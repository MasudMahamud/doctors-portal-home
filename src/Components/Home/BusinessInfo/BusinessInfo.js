import React from 'react';
import InfoCard from '../infoCard/infoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, Ny 10004 USA',
        icon: faMapMarker,
        background: 'dark',
    },
    {
        title: 'Call us now',
        description: '+154354561',
        icon: faPhone,
        background: 'primary',
    },
]

const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;