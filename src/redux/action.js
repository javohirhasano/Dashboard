import { getUsers, getPhotos, getTodos, getPosts } from "../components/api"
import { USER_TASK, PHOTO_TASK, GET_TODOS, TAKE_POST, TOGGLE_BAR, SET_LOADING } from "./types"

const toggleBar = (dispatch) => {
    dispatch({ type: TOGGLE_BAR })
}
const setLoading = (dispatch, value) => {
    dispatch({ type: SET_LOADING, payload: value })
}

const setUsers = async (dispatch) => {
    setLoading(dispatch, true)
    const res = await getUsers()
    setLoading(dispatch, false)
    if (res.success) {
        const action = { type: USER_TASK, payload: res.data }
        dispatch(action)
    }

}

const setPhotos = async (dispatch) => {
    setLoading(dispatch, true)
    const res = await getPhotos()
    setLoading(dispatch, false)
    if (res.success) {
        const action = { type: PHOTO_TASK, payload: res.data }
        dispatch(action)
    }
}
const setTodos = async (dispatch) => {
    setLoading(dispatch, true)
    const res = await getTodos()
    setLoading(dispatch, false)
    if (res.data) {
        const action = { type: GET_TODOS, payload: res.data }
        dispatch(action)
    }

}
const setPosts = async (dispatch) => {
    setLoading(dispatch, true)
    const res = await getPosts()
    setLoading(dispatch, false)
    if (res.data) {
        const action = { type: TAKE_POST, payload: res.data }
        dispatch(action)
    }
}
export { setUsers, setPhotos, setTodos, setPosts, toggleBar, setLoading }