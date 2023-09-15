import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const { title } = bookmark;
    return (
        
        <div className=''>
            
            <h3 className='text-sm font-semibold  bg-slate-300 m-3 rounded-lg p-3 shadow-md shadow-gray-700/80' >{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
    // handleBookmark: PropTypes.func,
    // handleAddTime :PropTypes.func
   
}
export default Bookmark;