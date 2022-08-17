export const themeReducer = (state, action) => {
    switch (action.type) {
        case "THEME_TOGGLE":
            return !state
        default:
            return state;
    }
}