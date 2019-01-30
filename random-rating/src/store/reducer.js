import MovieLists from '../assets/movieListsData'
const initialstate = [...MovieLists];
console.log(initialstate);

const reducer = (state = initialstate, action) => {
    console.log('reducer');
    switch (action.type) {
        case 'START':
            state.filter(m => {
                if (m.id === action.idValue) {
                    return [m.id, m.titlem, m.year, m.rating = action.ratingValue];
                }
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