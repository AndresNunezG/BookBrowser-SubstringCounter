import React from 'react';

import './styles/BookCard.css'

export default function BookCard(props) {
    return(
        <li className="Card__container">
            <div className="Card-info">
                <p>{props.bookData.title}</p>
                <p>{props.bookData.author_name}</p>
                <p>{props.bookData.first_publish_year}</p>
                <p>{props.bookData.isbn && props.bookData.isbn[0]}</p>
            </div>
        </li>
    )
}