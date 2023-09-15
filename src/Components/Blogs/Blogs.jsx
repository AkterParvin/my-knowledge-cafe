import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog"
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark,handleAddTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then (res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
   
    return (
    <div className='mx-auto my-9 container md:w-2/3'>
        
        <h1 className='text-xl md:text-4xl  font-bold text-[#111]'>Blogs:{blogs.length}</h1><br />

        {
         blogs.map(blog => <Blog
            key={blog.id}
            handleBookmark={handleBookmark}
            handleAddTime={handleAddTime}
            nblog={blog}>
            </Blog>)
        }
            
    </div>
    );
};
Blogs.propTypes =
{
    handleBookmark: PropTypes.func.isRequired, 
    handleAddTime: PropTypes.func.isRequired,
   
}
export default Blogs;