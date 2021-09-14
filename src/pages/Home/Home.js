import React from 'react'
import HomeWrapper from "./HomeWrapper"
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link, Button } from '@material-ui/core';


const images = [
    {
        url: '/static/images/image-list/https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_36,y_0,w_873,h_655/w_824,h_618,c_fill/auto-client/6802174d6b410fd1ca6a5995b4f91acd/11_5_new_cars.jpg',
        title: 'Prices',
        width: '40%',
    },
    {
        url: '/static/images/image-list/burgers.jpg',
        title: 'Auto-salon',
        width: '30%',
    },
    {
        url: '/static/images/image-list/camera.jpg',
        title: 'Cars',
        width: '30%',
    },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 300,
            width: '100%',
        },
        image: {
            position: 'relative',
            height: 200,
            [theme.breakpoints.down('xs')]: {
                width: '100% !important', // Overrides inline-style
                height: 100,
            },
            '&:hover, &$focusVisible': {
                zIndex: 1,
                '& $imageBackdrop': {
                    opacity: 0.15,
                },
                '& $imageMarked': {
                    opacity: 0,
                },
                '& $imageTitle': {
                    border: '4px solid currentColor',
                },
            },
        },
        focusVisible: {},
        imageButton: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
        },
        imageSrc: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: theme.palette.common.black,
            opacity: 0.4,
            transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
            position: 'relative',
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        },
        imageMarked: {
            height: 3,
            width: 18,
            backgroundColor: theme.palette.common.white,
            position: 'absolute',
            bottom: -2,
            left: 'calc(50% - 9px)',
            transition: theme.transitions.create('opacity'),
        },
    }),
);


const Home = () => {

    const classes = useStyles();
    return (
        <HomeWrapper>
            <div className="content2">
                <div className="role">
                    <h1 >Its coming togather</h1>
                    <p className="mx-5 px-5"> When you're on top of your money, life is good.
                    We help youaffortasle manage your financesin one place </p>

                    <div className={classes.root}>
                        {images ?.map((image) => (
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                }}
                                to="users" >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url("https://i.insider.com/592f4169b74af41b008b5977?width=1136&format=jpeg")`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {image.title}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        ))}
                    </div>
                </div>
            </div>
            <h4 className="p-5">
                For people who do not live in monarchies, or who aren't familiar with historical titles, this can get a bit confusing. Infoplease is here to help you out.
                </h4>
            <div className="row d-flex justify-content-center ">

                <Button className="col-md-4 col-sm-10 col-lg-3 cards">
                    <Link to="/dashboard/users" className="text-dark">
                        <h2>Users</h2>
                        <p>10 datas Users contain</p>
                    </Link>

                </Button>

                <Button className="col-md-4 col-sm-10 col-lg-3 cards">
                    <Link to="/dashboard/photos" className="text-dark">
                        <h2>Photos</h2>
                        <p>10 datas contain</p>
                    </Link>
                </Button>
                <Button className="col-md-4 col-sm-10 col-lg-3 cards">
                    <Link to="/dashboard/todos" className="text-dark">
                        <h2>Todos</h2>
                        <p>10 datas contain</p>
                    </Link>
                </Button>
                <Button className="col-md-4 col-sm-10 col-lg-3 cards">
                    <Link to="/dashboard/posts" className="text-dark">
                        <h2>Albums</h2>
                        <p>10 datas </p>
                    </Link>
                </Button>
                <Button className="col-md-4 col-sm-10 col-lg-3 cards">
                    <Link className="text-dark">
                        <h2>Users</h2>
                        <p>10 datas </p>
                    </Link>
                </Button>
            </div>
        </HomeWrapper>
    )
}
export default Home
