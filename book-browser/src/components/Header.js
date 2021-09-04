import React from 'react';

import './styles/Header.css'

export default function Header() {
    return (
        <div className="Header__container">
            <div className="Title__container">
                <h1 className="Title-1">Book&nbsp;</h1>
                <h1 className="Title-2">Browser</h1>
            </div>
            <div className="SearchBar__container">
                <div className="SearchBar-icon__container">
                    <i className="SearchBar-icon fas fa-search"></i>
                </div>
                <input
                 className="SearchBar-input"
                 id="searchBar"
                 placeholder="Search for Author or book"
                >
                </input>
            </div>
        </div>
    )
}