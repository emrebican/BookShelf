import { createContext, useContext, useReducer, useEffect } from "react";
import { bookReducer } from "./bookReducer";
import { filterReducer } from "./filterReducer";
import { themeReducer } from './themeReducer';
const BookContext = createContext();

const initialState = { initial: [], theme: false }
export const BookProvider = ({ children }) => {

    // Books
    const [state, dispatch] = useReducer(bookReducer, localStorage.getItem('books')
        ? JSON.parse(localStorage.getItem("books"))
        : initialState.initial);

    // Filter
    const [filterState, filterDispatch] = useReducer(filterReducer, {
        BY_RATING: 1,
        SEARCH_QUERY: "",
        MOST_STAR: false,
        CATEGORY: "",
    });

    // Theme
    const [themeColor, themeDispatch] = useReducer(themeReducer, localStorage.getItem('themeColor')
        ? JSON.parse(localStorage.getItem('themeColor'))
        : initialState.theme);

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(state));
        localStorage.setItem("themeColor", JSON.stringify(themeColor));
    }, [state, themeColor])

    return (
        <BookContext.Provider value={{
            state,
            BY_RATING: filterState.BY_RATING,
            SEARCH_QUERY: filterState.SEARCH_QUERY,
            MOST_STAR: filterState.MOST_STAR,
            CATEGORY: filterState.CATEGORY,
            themeColor,
            dispatch,
            filterDispatch,
            themeDispatch
        }}>
            {children}
        </BookContext.Provider>
    )
}

export const useBookContext = () => useContext(BookContext);