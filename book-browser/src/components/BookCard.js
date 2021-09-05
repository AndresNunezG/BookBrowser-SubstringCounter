import React from 'react';

import '../assets/styles/BookCard.css';

export default function BookCard(props) {
    const coverFetch = cover_i => `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
    return(
        <li className="Card__container">
            <div className="Card-info">
                <p>{props.bookData.title}</p>
                <p>{props.bookData.author_name}</p>
                <p>{props.bookData.first_publish_year}</p>
                <p>{props.bookData.isbn && props.bookData.isbn[0]}</p>
            </div>
            <div className="Card-cover">
                {props.bookData.cover_i &&
                    <img src={coverFetch(props.bookData.cover_i)} alt="book cover"></img>
                }
            </div>
        </li>
    )
}