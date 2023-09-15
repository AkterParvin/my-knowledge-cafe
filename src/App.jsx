import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {
  // function to handle the bookmarks 
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = blog => {
    const newBookmarks=[...bookmarks,blog];
    // console.log(newBookmarks);
    setBookmarks(newBookmarks);
  }

  // function to handle time calculation 
  const [timer, setTimer] = useState(0);
  const handleAddTime = time => {
    console.log('timing coming soon');
    const newTime = timer + time;
    setTimer(newTime);
  }

  return (
    <>
      <Header></Header>
    <main className='md:flex max-w-7xl mx-auto '>
        <Blogs
        handleBookmark={handleBookmark}
        handleAddTime={handleAddTime}
        
        ></Blogs>
        <Bookmarks
        bookmarks={bookmarks}
        timer={timer}
        ></Bookmarks>
        
    </main>
      
    </>
  )
}

export default App
