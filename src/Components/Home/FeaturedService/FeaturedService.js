import React from 'react';
import featured from '../../../images/featured.png'
const FeaturedService = () => {
    return (
        <section className="feature-service">
            <div className="container">
                <div className="row mb-5 mt-5 p-5">
                    <div className="col-md-5 text-center">
                        <img style={{height:'300px',borderRadius: '50%'}} className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 mt-5">
                        <h1 className="text-primary"> Exceptional Dental <br/> Care, on Your Terms </h1>
                        <p className="text-secondary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
                             Voluptatum ad magnam vitae error labore quae mollitia! <br/>
                              Ratione cum maiores officia.
                        </p>
                    </div> 
                </div> <hr />
            </div>
        </section>
    );
};

export default FeaturedService;