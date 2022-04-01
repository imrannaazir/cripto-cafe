import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center md:justify-between bg-yellow-50 px-12 py-8'>
            <div >Cripto Cafe</div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/coins'>Coins</Link>
                <Link to='/contacts'>Contacts</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;