import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        // Delay for showing "loading..." text
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for the resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    // do not update ui if it aborted
                    if (err.name === 'AbortError') {
                        console.log("fetch abort");
                    }else{
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 1000);

        //abort fetching data
        return () => abortCont.abort();
    }, []);

    return { data, isPending, error };
}
export default useFetch;