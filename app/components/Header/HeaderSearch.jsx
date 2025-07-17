'use client';

import ClearIcon from '@/assets/icons/ClearIcon';
import SearchIcon from '@/assets/icons/SearchIcon'
import React from 'react'
import { useState } from 'react';

function HeaderSearch() {

    const [value, setValue] = useState('');
    const [focused, setFocused] = useState(false);


    return (
        <div className="header_search">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 100)}
                className='header_input'
                type="text"
                placeholder='Tovarlarni izlash'
            />
            {value && focused && (
                <button onClick={() => setValue('')} className="header_clear-btn">
                    <ClearIcon/>
                </button>
            )}
            <button className='header_search-btn'>
                <SearchIcon />
            </button>
        </div>
    )
}

export default HeaderSearch