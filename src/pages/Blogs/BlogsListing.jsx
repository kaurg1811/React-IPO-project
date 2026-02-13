import React, { useState } from "react";
import blogs from "../../Data/blogs";
import BlogCard from "../../components/UI/BlogCard";
import "./Blogs.css";

const BlogListing = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="blog-container">
      <h1 className="page-title">Latest</h1>

      {blogs.slice(0, visibleCount).map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}

      {visibleCount < blogs.length && (
        <div className="see-more-container">
          <button onClick={handleSeeMore} className="see-more-btn">
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogListing;
