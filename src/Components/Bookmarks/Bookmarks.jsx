import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,timer}) => {
    console.log(bookmarks)
    return (
        <div className="w-1/3 mt-9 text-2xl bg-neutral-200 ml-4  rounded-xl border-x-slate-600 m">
            
            <div  className='bg-purple-200 rounded-lg border border-purple-950'>
            <h1 className='text-base font-semibold text-center text-purple-900 py-4'>Spent time on read : { timer} mins</h1>
            </div>
        
            <div className=' rounded-lg my-2 '>
                <h3 className="text-base font-bold text-[#111] py-3 text-center ">Bookmarked Blogs: {bookmarks.length }</h3>
            {
                bookmarks.map((mark,idx) => <Bookmark key={idx} bookmark={mark}>
                    
                </Bookmark>)
            }
            </div>
        </div>
    );
};







Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    timer:PropTypes.number
   
}
export default Bookmarks;