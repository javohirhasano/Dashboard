import React, { useEffect } from 'react'
import PhotosWrapper from './PhotosWrapper'
import { useSelector, useDispatch } from 'react-redux'
import { setPhotos } from '../../redux/action'
import { Link, Button, LinearProgress } from '@material-ui/core'

const Photos = () => {
    const photos = useSelector(state => state.photos)
    const isLoading = useSelector(state => state.isLoading)
    console.log(photos);

    const dispatch = useDispatch()
    useEffect(() => {
        setPhotos(dispatch)
    }, [])
    return (
        <PhotosWrapper>
            {isLoading && <LinearProgress className="m-3" /> || photos.length > 0 &&
                < div className="row d-flex">
                    {photos ?.map(v =>

                        <Button className="rasm  shadow col-md-4 col-sm-5 col-lg-3 m-4 d-flex text-center bg-primary">
                            <div className="">
                                <img className="m-3 " src={v.url}></img>
                                <h4>{v.title}</h4>
                                <Link src={v.thumbnailUrl}></Link>
                            </div>
                        </Button>


                    )}
                </div> || "no data"}
        </PhotosWrapper >

    )
}
export default Photos