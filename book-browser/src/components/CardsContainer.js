import React, { useEffect, useState} from 'react';

import Loader from './Loader';
import BookCard from './BookCard';

import './styles/CardsContainer.css';

export default function CardsContainer() {
    const [booksData, setBooksData] = useState("");
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch("http://openlibrary.org/search.json?q=the+lord+of+the+rings")
         .then(response => response.json())
         .then(data => {
             setBooksData(data);
             setLoading(false);
            })
         .catch(error => setFetchError(error));
    }, [])
    if (loading === true) {
        return(
            <section className="CardsContainer">
                <Loader />
            </section>
        )
    }
    console.log(booksData.docs)
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