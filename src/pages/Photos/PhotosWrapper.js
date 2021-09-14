import styled from 'styled-components'

const PhotosWrapper = styled.div`
img {
    height: 100px;
    width:100px;
    border-radius: 50%;
    border: 2px;
}
.row {
    scroll-margin-right: 2px;
    scrollbar :
        width: 20px;
      
}
.d-flex {
    display: flex;
}
.rasm{
    background-image: linear-gradient(#24c6dc,#514a9d);
    border-radius:10px;
}
.rasm:hover{
    background: rgb(15,195,198);
background: linear-gradient(0deg, rgba(15,195,198,1) 0%, rgba(105,105,105,1) 100%);
color:white;
}
`
export default PhotosWrapper