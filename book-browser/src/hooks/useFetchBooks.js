import { useState, useEffect } from "react";

const useFetchBooks = (query) => {
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