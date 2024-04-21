import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({hanndleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
    },[])
    return (
        <div className="exo-2 md:w-2/3">
            {
                blogs.map(blog =><Blog 
                    key={blogs.id}
                    blog={blog} hanndleAddToBookmark={hanndleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}>
                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    hanndleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blogs;