import React from 'react';

const TestimonialsCard = ({ testimonial }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-body text-secondary">
                <p class="card-text"> {testimonial.quote} </p>
            </div>
            <div className="card-person text-center card-header">
                <img className="my-3" src={testimonial.img} alt="" />
                <h5> {testimonial.name} </h5>
                <p> {testimonial.from} </p>
            </div>
            
        </div>
        </div>
    );
};

export default TestimonialsCard;