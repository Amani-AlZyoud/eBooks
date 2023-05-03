import { createContext, useState } from "react";
import { useEffect } from "react";
import customData from '../customData.json';

export const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBooks] = useState();

    useEffect(() => {
        setBooks(customData.eBooks);
        // console.log(books);
    })

    return (
        <>
            <BookContext.Provider
                value={{
                    books
                }}
            >
                {children}
            </BookContext.Provider>
        </>
    );
}