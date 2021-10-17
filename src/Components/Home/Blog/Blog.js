import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Wilson from '../../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';

const BlogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'It is established fact that by the readable content of a lot layout.',
        author: 'Dr. Rashed Kabir',
        authorImg: Wilson,
        date: '01 November 2021'
    },
    {
        title: '2 times of brush in a day can keep you healthy',
        description: 'It is established fact that by the readable content of a lot layout.',
        author: 'Dr. Caudi',
        authorImg: Wilson,
        date: '01 November 2021'
    },
    {
        title: 'The tooth cancer is taking a callenge',
        description: 'It is established fact that by the readable content of a lot layout.',
        author: 'Dr. John Mitchen',
        authorImg: Wilson,
        date: '01 November 2021'
    },

]

const Blog = () => {
    return (
        <section className="container p-5 my-5">
            <div className="section-header text-center">
                <h5> OUR BLOG </h5>
                <h1 className="secondary"> From our Blog News </h1> <hr />
            </div>
            <div className="row card-deck ms-5 mt-4">
                {
                    BlogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                }
            </div>
            <div style={{ textAlign: 'center' }}>
                <Link to="/home"><FontAwesomeIcon icon={faArrowCircleLeft} /> previous page </Link>
            </div>
        </section>
    );
};

export default Blog;