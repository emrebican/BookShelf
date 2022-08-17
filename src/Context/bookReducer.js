import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

// add Date to Card
const NOTE_DAY = format(new Date(), 'do MMMM Y eee');

export const bookReducer = (state, action) => {

    // Dispatch Types
    const types = {
        ADD_BOOK: "ADD_BOOK",
        DELETE_BOOK: "DELETE_BOOK",
        UPDATE_BOOK: "UPDATE_BOOK"
    }

    switch (action.type) {
        case types.ADD_BOOK:
            return [
                ...state,
                { book: action.payload, date: NOTE_DAY, id: uuidv4(), index: Date.now() }
            ];

        case types.DELETE_BOOK:
            return state.filter(book => book.id !== action.payload);

        case "UPDATE_BOOK":
            return state.map(item => item.id === action.payload.id
                ? {
                    ...item,
                    book: action.payload.bookUpdate,
                    date: NOTE_DAY,
                    index: Date.now()
                }
                : item
            )
        default:
            return state;
    }
}