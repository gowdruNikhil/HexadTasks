import MovieLists from '../assets/movieListsData'
const initialstate = [...MovieLists];

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state.filter(m => {
                if (m.id === action.elementID) {
                    return [m.id, m.titlem, m.year, m.rating += 1];
                }
                return null;
            }
            );
            return [
                ...state,
            ]
        case 'DECREMENT':
            state.filter(m => {
                if (m.id === action.elementID) {
                    return [m.id, m.titlem, m.year, m.rating -= 1];
                }
                return null;
            }
            );
            return [
                ...state,
            ]
        // default:
        //     return [...state];

    };
    return state;
}

export default reducer;