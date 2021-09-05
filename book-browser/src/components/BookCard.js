import React from 'react';

import '../assets/styles/BookCard.css';

export default function BookCard(props) {
    const coverFetch = cover_i => `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
    return(
        <li className="Card__container">
            <div className="Card-info">
                <p className="Card-title">{props.bookData.title || 'Unkown Title'}</p>
                <p className="Card-author">{props.bookData.author_name || 'Author Unknown'}</p>
                <p className="Card-year">{props.bookData.first_publish_year || 'Unknown publication date'}</p>
                <p className="Card-isbn">{props.bookData.isbn && props.bookData.isbn[0] || 'ISBN unknown' }</p>
            </div>
            <div className="Card-cover">
                {props.bookData.cover_i
                    ? 
                    <img src={coverFetch(props.bookData.cover_i)} alt="book cover"></img>
                    :
                    <div className="Card-NoCover">
                        <i class="fas fa-book-open"></i>
                        <p>No cover available</p>
                    </div>
                }
            </div>
        </li>
    )
}