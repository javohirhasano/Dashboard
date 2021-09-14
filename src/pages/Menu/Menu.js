import React from 'react'
import MenuWrapper from './MenuWrapper'
import { useParams } from 'react-router-dom'
import Container from '../../containers/Container/Container'
import Home from '../Home'
import User from '../User'
import Photos from '../Photos'
import Todos from '../Todos'
import Post from '../Posts'

const Menu = () => {
    const { menu } = useParams()

    return (
        <MenuWrapper>
            <Container>

                {menu === "home" && <Home></Home>}
                {menu === "users" && <User></User>}
                {menu === "photos" && <Photos></Photos>}
                {menu === "todos" && <Todos></Todos>}
                {menu === "posts" && <Post></Post>}
            </Container>
        </MenuWrapper>
    )
}
export default Menu