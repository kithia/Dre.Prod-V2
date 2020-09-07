import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './app.css';
import AppBar from "./modules/components/appbar";
import Container from "@material-ui/core/Container";
import mixer from './images/background/mixer-blur.jpg';
import jamaica from './images/background/jamaica.jpg';
import StreamWork from "./modules/components/stream-work";
import RecentWork from "./modules/components/recent-work";
import Footer from "./modules/components/footer";

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
    background: {
        backgroundColor: theme.palette.background.paper,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div style={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
                <div className={classes.background} style={{ backgroundImage: `url(${mixer})`, height: '100vh', minHeight: '390px' }}>
                    <AppBar />
                    <Container maxWidth="lg" component="main" style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8) }}>
                        <StreamWork />
                    </Container>
                </div>
                <div style={{ height: 1, color: 'white' }} />
                <div className={classes.background} id={'listen'} style={{ backgroundImage: `url(${jamaica})` }}>
                    <RecentWork />
                </div>
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
