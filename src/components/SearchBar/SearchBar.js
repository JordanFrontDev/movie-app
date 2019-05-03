import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';

const SearchBar = ({ searchItems }) => {
    return (
        <div className='rmdb-searchbar'>
            <div className='rmdb-searchbar-content'>
                <FontAwesomeIcon className='rmdb-fa-search' icon={faSearch} size='2x'/>
                <input
                    type='text'
                    className='rmdb-searchbar-input'
                    placeholder='Search'
                    onChange={searchItems}
                    />
                </div>
        </div>
    );
};

export default SearchBar;