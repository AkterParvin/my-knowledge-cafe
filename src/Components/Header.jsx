import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center  p-5 border-b-2 mx-auto container max-w-7xl '>
            <h1 className='text-xl md:text-4xl  font-bold text-[#111]'>My Knowledge Cafe</h1>
            <img src={profile} alt="" />
      
        </header>
    );
};

export default Header;