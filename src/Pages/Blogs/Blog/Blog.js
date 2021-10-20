import React from 'react';
import './Blog.css';

const Blog = (props) => {
  const { title, description, img, category } = props.blog
  return (
    <div className="card mb-3">
      {/* single blog card */}
      <div className="blog-img">
        <img src={img} className="card-img-top" alt="" />
        <p className="blog-date">Sep, 12, 2021</p>
      </div>
      <div className="blog-content card-body">
        <span><i className="fas fa-tag"></i> {category}</span>
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>

        <button className="btn btn-warning mt-4">Read more</button>
      </div>
    </div>
  );
};

export default Blog;