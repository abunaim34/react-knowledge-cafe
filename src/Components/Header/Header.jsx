import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='exo-2 flex justify-between items-center p-4 border-b-2 mx-4'>
            <h1 className='text-4xl font-bold '>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;