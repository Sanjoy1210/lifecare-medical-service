import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Blog from '../Blog/Blog';
import Posts from '../Posts/Posts';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('./blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="blogs-section">
        <div className="blog-title">
          <h1 className="text-center fw-bolder text-secondary">Read Our Articles</h1>
        </div>
        <div className="blogs">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 order-2 order-lg-1">
                {
                  blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
              </div>
              <div className="col-lg-4 order-1 order-lg-2">
                <div className="search-container w-100 mb-4">
                  <input
                    type="text"
                    placeholder="search..."
                  />
                  <button className="search-btn"><i className="fa fa-search search-icon"></i></button>
                </div>

                <div className="recent-post mb-4 mb-lg-0">
                  <h3>Recent Posts</h3>
                  <Posts></Posts>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;