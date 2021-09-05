import React from 'react';
import useFetchBooks from '../hooks/useFetchBooks';

import Loader from './Loader';
import BookCard from './BookCard';

import ErrorImage from '../assets/images/ErrorImage.svg';
import '../assets/styles/CardsContainer.css';

export default function CardsContainer(props) {
    /**
     * CardsContainer component recieve props:
     *      -> query: users request to find in open library API
     * Stateful component with states: booksData - loading - fetchError
     * Logical component with API consuming
    */
    const {booksData, loading, fetchError} = useFetchBooks(props.query);
    if (loading === true) {
        return(
            <section className="CardsContainer">
                <Loader />
            </section>
        )
    }
    if (fetchError !== null) {
        return(
            <section className="CardsContainer">
                <div>
                    <img src={ErrorImage} alt="error"></img>
                </div>
                <div>
                    <h1 style={{color: "var(--scnd-fg-color)", fontSize: "32px"}}>Oops!</h1>
                    <p>It seems like there was a problem, try again later</p>
                </div>
            </section>
        )
    }
    return(
        <section className="CardsContainer">
            <ul className="CardsList">
                {booksData &&
                    booksData.docs.map(book => (
                        <BookCard key={book.key} bookData={book}/>
                    ))
                }
            </ul>
        </section>
    );
}