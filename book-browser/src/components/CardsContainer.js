import React, { useEffect, useState} from 'react';

import Loader from './Loader';
import BookCard from './BookCard';

import ErrorImage from '../assets/images/ErrorImage.svg';
import '../assets/styles/CardsContainer.css';

export default function CardsContainer(props) {
    const [booksData, setBooksData] = useState("");
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const defaultAPI = "http://openlibrary.org/search.json?q=the+lord+of+the+rings";
    useEffect(() => {
        setLoading(true);
        fetch(props.query
            ?
            `http://openlibrary.org/search.json?q=${props.query.replaceAll(' ', '+').toLowerCase()}`
            :
            defaultAPI
            )
         .then(response => response.json())
         .then(data => {
             setBooksData(data);
             setLoading(false);
            })
         .catch(error => {
             setLoading(false);
             setFetchError(error);
            });
    }, [props.query])
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