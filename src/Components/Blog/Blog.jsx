import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
console.log('hi')
const Blog = ({nblog, handleBookmark,handleAddTime}) => {

    const {title,cover,author,author_img,reading_time,posted_date,hashtags} = nblog;
    return (
        <div  className='mb-20'>
            <img src={cover} alt="" className='w-full h-[450px] mb-8 rounded-xl' />
            
            <div className='flex justify-between items-center my-2'>
                <div className='flex gap-3'>
                    <img src={author_img} alt="" className='w-14 py-1' />
                    <span>
                        <h3 className='py-1 font-bold text-base text-[#111]'>{ author}</h3>
                        <p className='font-semibold text-[#696262] text-xs'>{ posted_date}</p>
                    </span>
                </div>
                <div className='flex gap-1'>
                    <h3 className='font-medium text-gray-600 text-sm'>{reading_time} mins to read</h3>
                    
                    <button onClick={()=>handleBookmark(nblog)} className='font-medium text-rose-500'><FaBookmark></FaBookmark></button>
                    
                </div>
            </div>

             <h2 className="text-2xl lg:text-4xl mb-6">{title}</h2>
            <p className='mb-2'>{hashtags.map((hash,idx )=> <span key={idx}>  #{ hash}</span>) }</p>
            <button className='text-violet-600 font-bold text-base underline'
                onClick={()=>handleAddTime(nblog.reading_time)}>Mark as read...</button>
        </div>
    );
};

Blog.propTypes = {
    nblog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleAddTime :PropTypes.func
   
}
export default Blog;