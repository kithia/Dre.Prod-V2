import React from 'react';
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

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
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

function LoremIpsum() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container component="main" maxWidth="false" style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8),
                backgroundColor: "black", opacity: "0.725" }}>
                <Container maxWidth="lg" style={{ textAlign: "center", color: "white" }}>
                    <Typography variant="h5" gutterBottom>
                        Lorem ipsum
                    </Typography>
                    <Typography variant="body1" component="p" className={classes.sectionDesktop}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography variant="body1" component="p" className={classes.sectionMobile}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Typography>
                </Container>
            </Container>
        </React.Fragment>
    );
}

export default LoremIpsum;