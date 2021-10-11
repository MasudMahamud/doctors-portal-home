import React from 'react';

const Contract = () => {
    return (
        <section className="container p-5">
            <div className="row">
                <div className="text-center my-4">
                <h4 className="text-warning"> CONTRACT US </h4>
                <h3 className="text-secondary my-3"> Always connect with us </h3> <hr />
                </div>
            <from>
            <div className="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="email" class="form-control" id="name" placeholder="Enter your name"/>
                <label for="name" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-warning">submit</button>
            </from>
            </div>
        </section>
    );
};

export default Contract;