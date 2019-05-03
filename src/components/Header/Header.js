import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {


    return (
        <div className='rmdb-header'>
            <h1 className='rmdb-header-content'>
            <Link to='/'>
                <img className='rmdb-logo' src='./images/reactMovie_logo.png' alt='rmdb Logo'/>
            </Link>
                <img className='rmdb-tmdb-logo' src='./images/tmdb_logo.png' alt='tmdb-logo'></img>
            </h1>
        </div>
    );
}

export default Header;