'use client';

import ClearIcon from '@/assets/icons/ClearIcon';
import SearchIcon from '@/assets/icons/SearchIcon'
import React, { useState } from 'react'

function MobileSearch() {

    const [value, setValue] = useState('');
    const [focused, setFocused] = useState(false);

    return (
        <div className={`header_mobile-search ${focused ? 'active' : ''}`}>
            <input
                type="text"
                className="header_mobile-input"
                placeholder='Tovorlarni izlash'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 100)}
            />

            {value && focused && (
                <button className="header_mobile-clear-btn" onClick={() => setValue('')}>
                    <ClearIcon/>
                </button>
            )}

            {focused ? (
                <button className="header_mobile-search-btn">Qidirish</button>
            ) : (
                <span className="header_mobile-search-icon">
                    <SearchIcon />
                </span>
            )}
        </div>
    )
}

export default MobileSearch