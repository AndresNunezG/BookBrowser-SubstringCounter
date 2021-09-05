import React from 'react';
import useFetchBooks from '../hooks/useFetchBooks';

import Loader from './Loader';
import BookCard from './BookCard';

import ErrorImage from '../assets/images/ErrorImage.svg';
import NotFoundImage from '../assets/images/NotFoundImage.svg';
import '../assets/styles/CardsContainer.css';

export default function CardsContainer(props) {
    /**
     * CardsContainer component recieve props:
     *      -> query: users request to find in open library API
     * Stateful component with states: booksData - loading - fetchError
     * Logical component using custom hooks useFetchBooks
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
            <section className="CardsContainer Alt_CardContainer">
                <div>
                    <img src={ErrorImage} alt="error"></img>
                </div>
                <div>
                    <h1 className="AltCard-title">Oops!</h1>
                    <p>It seems like there was a problem, try again later</p>
                </div>
            </section>
        )
    }
    if (booksData.numFound === 0) {
        console.log("hola")
        return(
            <section className="CardsContainer Alt_CardContainer">
                <div>
                    <img src={NotFoundImage} alt="not found"></img>
                </div>
                <div>
                    <h1 className="AltCard-title">No results for your search</h1>
                    <p>try new terms and keywords</p>
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