import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight  } from "@fortawesome/free-solid-svg-icons";
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-content">
        <span className="blog-date">{blog.date}</span>
        <h2><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h2>
        <p>{blog.description}</p>
         <Link to={`/blog/${blog.id}`} className="read-more">
          Read More <FontAwesomeIcon icon={faArrowRight } className="ml-3" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;