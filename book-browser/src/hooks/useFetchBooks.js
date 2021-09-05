import { useState, useEffect } from "react";

const useFetchBooks = (query) => {
    /**
     * Custom hook to fetch data of open library API
     * Hooks used:
     *      -> useState
     *      -> useEffect
     * returns:
     *      -> booksData: Array of books result of the request
     *      -> loading: Boolean value indicates charge status
     *      -> fetchError: Error value indicates if request failed
    */
    const [booksData, setBooksData] = useState("");
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const defaultAPI = "http://openlibrary.org/search.json?q=the+lord+of+the+rings";
    useEffect(() => {
        setLoading(true);
        fetch(query
            ?
            `http://openlibrary.org/search.json?q=${query.replaceAll(' ', '+').toLowerCase()}`
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
    }, [query])
    return {booksData, loading, fetchError}
}

export default useFetchBooks;