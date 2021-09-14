import React, { useEffect } from 'react'
import Postwrapper from "./PostWrapper"
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../../redux/action'
import { Link, LinearProgress } from '@material-ui/core'



const Post = () => {
    const posts = useSelector(state => state.posts)
    const isLiading = useSelector(state => state.isLoading)


    const dispatch = useDispatch()
    console.log(dispatch);

    useEffect(() => {
        setPosts(dispatch)
    }, [])
    return (
        <Postwrapper>
            {isLiading && <LinearProgress className="m-3" /> || posts.length > 0 && <div>
                {
                    posts ?.map(v =>
                        <div className="row">
                            <div className="d-flex my-3 justify-content-center bg text-white align-items-center ">
                                <h4 className="m-3 text-danger">{v.id}</h4>
                                <h3>{v.name}</h3>
                                <Link className="write ">{v.email}</Link>
                                <h5 className="my-4">{v.body}</h5>
                            </div>
                        </div>

                    )
                }
            </div> || "TOPILMADI"}
        </Postwrapper>

    )
}
export default Post