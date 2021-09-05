import React from 'react';

import '../assets/styles/Header.css';

export default function Header(props) {
    return (
        <header className="Header__container">
            <div className="Title__container">
                <h1 className="Title-1">Book&nbsp;</h1>
                <h1 className="Title-2">Browser</h1>
            </div>
            <div>
                <form className="SearchBar__container" onSubmit={props.onSubmit}>
                    <div className="SearchBar-icon__container">
                        <button type="submit" className="SearchBar-button">
                            <i className="SearchBar-icon fas fa-search"></i>
                        </button>
                    </div>
                    <input
                    className="SearchBar-input"
                    id="searchBar"
                    placeholder="Search for Author or book"
                    onChange={props.onChange}
                    value={props.inputValue}
                    >
                    </input>
                </form>
            </div>
        </header>
    )
}