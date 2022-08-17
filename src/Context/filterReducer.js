export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_RATING":
            return {
                ...state,
                BY_RATING: action.payload
            }
        case "SORT_BY_SEARCH":
            return {
                ...state,
                SEARCH_QUERY: action.payload
            }
        case "MOST_STAR":
            return {
                ...state,
                MOST_STAR: action.payload
            }
        case "CLEAR_FILTER":
            return {
                BY_RATING: 1,
                SEARCH_QUERY: "",
                CATEGORY: ""
            }
        case "CATEGORY":
            return {
                ...state,
                CATEGORY: action.payload
            }
        default:
            return state;
    }
}