import React from 'react';
import { fade, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Link from "@material-ui/core/Link";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000',
            contrastText: '#fff',
        },
        secondary: {
            main: '#000',
            contrastText: '#fff',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        fontSize: '20px',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    link: {
        fontSize: 20,
        fontWeight: 'inherit',
        opacity: 0.675,
        textTransform: 'none',
        margin: theme.spacing(1, 2),
        '&:hover': {
            opacity: 1,
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: 4,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const links = [
    /* Links */
    {
        title: 'Listen',
        hyperlink: "#listen",
    },
    {
        title: 'About',
        hyperlink: "#",
    },
    {
        title: 'Discography',
        hyperlink: "#",
    },
    {
        title: 'Numbers',
        hyperlink: "https://numbers.bubbleapps.io/",
    },
];

function SearchAppBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ margin: "auto" }}
        >
            {/* Navbar links for mobile site */}
            <Link href="../../../public/index.html">
                <Typography className={classes.title} style={{ textAlign: "center", margin: theme.spacing(2.5, 2) }} variant="h6" noWrap>
                    DRE.PROD
                </Typography>
            </Link>
            <Divider />
            <List>
                {/* Links map */}
                {links.map((links) => (
                    <ListItem button>
                        <Link variant="button" underline="none" href={links.hyperlink} className={classes.link}>
                            {links.title}
                        </Link>
                    </ListItem>
                ))}
                <ListItem button>
                    <Link variant="button" underline="none" href="#" className={classes.link}>
                        Contact
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link variant="button" underline="none" href="#" className={classes.link}>
                        Commission
                    </Link>
                </ListItem>
            </List>
        </div>
    );

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.grow}>
            <AppBar position="sticky" color="transparent" elevation={0} style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Toolbar>
                    <Link href="../../../public/index.html" underline={"none"} style={{ margin: theme.spacing(1), color: 'white' }}>
                        <Typography className={classes.title} variant="h5" noWrap>
                            DRE.PROD
                        </Typography>
                    </Link>
                    <div className={classes.search}>
                        <div className={classes.searchIcon} style={{ color: 'white' }}>
                            <SearchIcon />
                        </div>
                        <InputBase style={{ color: 'white' }}
                            placeholder="Search instrumentals"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    {/* Navbar links for desktop site */}
                    <div className={classes.sectionDesktop}>
                        {/* Links map */}
                        {links.map((links) => (
                            <Link variant="button" underline="none" href={links.hyperlink} className={classes.link} style={{ color: 'white' }}>
                                <span>{links.title}</span>
                            </Link>
                        ))}
                        <Link variant="button" underline="none" href="#" onClick={handleOpen} className={classes.link} style={{ color: 'white' }}>
                            <span>Contact</span>
                        </Link>
                        <Link variant="button" underline="none" href="#" className={classes.link} style={{ color: 'white' }}>
                            <span>Commission</span>
                        </Link>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <div className={classes.paper}>
                                    <h2 id="transition-modal-title">Transition modal</h2>
                                    <p id="transition-modal-description">react-transition-group animates me.</p>
                                </div>
                            </Fade>
                        </Modal>
                    </div>
                    {/* Navbar drawer for mobile site */}
                    <div className={classes.sectionMobile}>
                        {[<MenuIcon />].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton onClick={toggleDrawer(anchor, true)} className={classes.menuButton} style={{ color: 'white' }} aria-label="open drawer">{anchor}</IconButton>
                                <SwipeableDrawer
                                    anchor={"top"}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default SearchAppBar;