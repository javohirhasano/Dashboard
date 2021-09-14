import React, { useContext } from 'react'
import logo from "../../logo.svg";
import styled from 'styled-components'
import { List, ListItem, ListItemIcon, ListItemText, Button, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Inbox';
import Switch from '@material-ui/core/Switch';
import ThemeContext from '../../ThemeConext';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBar } from '../../redux/action';
import GroupIcon from '@material-ui/icons/Group';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import colors from '../../components/colors/colors';




const ContaineWrapper = styled.header`
.App{
    position: sticky;
    top: 0;
    z - index: 1000;
    box-shadow: 10px 10px 10px 3px  rgb(7, 97, 86) !important;
    padding: 10px;
   }
.count{
    display:flex;
}
.dashboard {
    background-color: ${props => props.colors.dashboardBack};
    width: 0px ;
    color: black;
    height: 100vh;
   padding:20px 0px;
    position: sticky;
    flex-shrink:0;
    top: 0;
    overflow:hidden;
   transition: 0.3s;
    &.show{
        width: 300px;
    padding:20px;
    }

}
.whole{
    flex:1
}
.contain {
    background-image:${props => props.colors.containDark} !important;
    padding: 20px;
    height:100vh;
    overflow-y: scroll;
}

header{
    background-color: ${ props => props.colors.backgroundcolor};
color: ${  props => props.colors.color};
   position:sticky;
}
.list {
    top: 40px;
}
}
`

const menus = [
    { to: "/dashboard/home", title: "Home", icon: <HomeIcon></HomeIcon> },
    { to: "/dashboard/users", title: "Users", icon: <GroupIcon /> },
    { to: "/dashboard/photos", title: "Photos", icon: <PhotoSizeSelectActualIcon /> },
    { to: "/dashboard/todos", title: "Todos", icon: <ListAltIcon></ListAltIcon> },
    { to: "/dashboard/posts", title: "Posts", icon: <AllInboxIcon /> },

]

const Container = ({ children }) => {
    const isSidebarshow = useSelector(state => state.isSidebarshow)

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };



    const { theme, toggleTheme, colors } = useContext(ThemeContext)


    const dispatch = useDispatch()
    return (
        <ContaineWrapper colors={colors}>
            <div className="count">
                <div colors={colors} className={`dashboard ${isSidebarshow ? "show" : ""}`}>
                    <div className="d-flex">
                        <h1 className="mt-5">Menu</h1>

                    </div>
                    <List className="list">
                        {menus.map(v =>

                            <Link to={v.to}>
                                <ListItem button>
                                    <ListItemIcon>
                                        {v.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={v.title} />
                                </ListItem>
                            </Link>
                        )}
                    </List>

                </div>

                <div className="whole">
                    <header colors={colors} className="App d-flex justify-content-between
                     align-items-center">

                        <div className="d-flex">
                            <Button onClick={() => toggleBar(dispatch)}>
                                <MenuIcon></MenuIcon>
                            </Button>

                            <img src={logo} className="App-logo" alt="logo" />
                            <p className="d-flex align-items-center fs-2">react-header</p>
                        </div>
                        <Switch color={theme} onClick={toggleTheme}
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </header>
                    <div className="contain" colors={colors}>
                        {children}
                    </div>
                </div>
            </div>
        </ContaineWrapper >


    )

}


export default Container