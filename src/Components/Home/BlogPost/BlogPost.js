import React from 'react';

const BlogPost = ({ blog }) => {
    return (
        <div className="col-md-4">
            <div className="card  my-4" style={{maxWidth: '18rem'}}>
                <div className="text-center"> 
                <img className="my-4" src={blog.authorImg} alt="" />
                <h5>{blog.author}</h5> 
                <p> {blog.date} </p>
                </div>
                <div className="card-header  text-dark">
                    <h5 className="card-title my-3 text-secondary"> {blog.title} </h5>
                    <p className="card-text text-secondary"> {blog.description} </p>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;