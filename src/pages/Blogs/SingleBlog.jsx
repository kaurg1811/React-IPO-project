import { Link, useParams } from "react-router-dom";
import blogs from "../../Data/blogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft  } from "@fortawesome/free-solid-svg-icons";


const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog Not Found</h2>;

  return (
    <div style={{ width: "80%", margin: "40px auto" }}>
      <Link to="/blog"><FontAwesomeIcon icon={faArrowLeft } className="ml-3" />Back to Blog</Link>
      <h1>{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "100%", margin: "20px 0", borderRadius: "8px" }}
      />
      <p>{blog.description}</p>
      <p style={{ color: "#888" }}>{blog.date}</p>
    </div>
  );
};

export default SingleBlog;
