import { USER_TASK, PHOTO_TASK, GET_TODOS, TAKE_POST, TOGGLE_BAR, SET_LOADING } from "./types";

const initialState = {
    users: [],
    photos: [],
    todos: [],
    posts: [],
    isSidebarshow: true,
    isLoading: true,

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: action.payload }
        case USER_TASK:
            return { ...state, users: action.payload };
        case PHOTO_TASK:
            return { ...state, photos: action.payload };
        case GET_TODOS:
            return { ...state, todos: action.payload }
        case TAKE_POST:
            return { ...state, posts: action.payload }
        case TOGGLE_BAR:
            return { ...state, isSidebarshow: !state.isSidebarshow }
        default: return state
    }
}
export default reducer;