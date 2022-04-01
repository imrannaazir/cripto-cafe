import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 flex justify-center md:justify-between bg-white px-12 py-8'>
            <div className='hidden md:block'><Link className='font-sans font-bold text-xl text-gray-600' to='/home' >Cripto Cafe</Link></div>
            <nav className='flex gap-4 text-xl font-bold'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/contacts'>Contacts</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;