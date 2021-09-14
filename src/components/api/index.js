import axios from 'axios'

const getUsers = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=40")
        return { success: true, data: res.data }
    } catch (error) {
        console.log(error);
        console.error("Hatolik Sodir buld")
        return { success: false }
    }
};
const getPhotos = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=20");
        return { success: true, data: res.data }
    } catch (error) {
        console.error("XATOLIK SODIR BO'LDI");
        console.error(error);
        return { success: false };
    }
}

const getTodos = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=18")
        return { success: true, data: res.data }
    } catch (error) {
        console.error("Hatolik");
        return { success: false }

    }
}
const getPosts = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=27")
        return { success: true, data: res.data }
    } catch (error) {
        console.log(error);

    }
}
export { getUsers, getPhotos, getTodos, getPosts };