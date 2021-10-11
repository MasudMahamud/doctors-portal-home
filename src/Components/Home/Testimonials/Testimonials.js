import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialsCard from '../TeatimonialsCard/TestimonialsCard';


const TestimonialsData = [
    {
        quote: 'It is long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using content here ',
        name: 'Wilson Harry',
        from: 'California',
        img:  wilson     
    },
    {
        quote: 'It is long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using content here ',
        name: 'Ema Gamez',
        from: 'California',
        img: ema      
    },
    {
        quote: 'It is long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using content here ',
        name: 'Aliza Farari',
        from: 'California',
        img:   aliza      
    },
]

const Testimonials = () => {
    return (
        <section>
            <div className="container  p-5">
                <div className="section-header">
                    <h5 className="mt-5 mb-3"> TESTIMONIAL </h5>
                    <h2 className="text-primary mb-4"> What Our Patients <br /> Says: </h2> <hr />
                </div>
                <div className="row card-deck ms-5 mt-4">
                    {
                       TestimonialsData.map(testimonial => <TestimonialsCard testimonial={testimonial}></TestimonialsCard> ) 
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;