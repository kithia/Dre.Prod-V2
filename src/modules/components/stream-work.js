import React from 'react';
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import spotifyText from "../../images/music/spotify/Spotify_Logo_RGB_Green.png";
import spotifyLogo from "../../images/music/spotify/Spotify_Icon_RGB_Green.png";
import appleMusicText from "../../images/music/apple/US-UK_Apple_Music_Lockup_all-white.svg";
import appleMusicLogo from "../../images/music/apple/Apple_Music_Icon-0.png";
import soundcloudText from "../../images/music/soundcloud/Soundcloud-Text-Orange.png";
import soundcloudLogo from "../../images/music/soundcloud/Soundcloud-Orange-White.png";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";

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

const musicMedia = [
    /* Music media */
    {
        title: "Spotify",
        alt: "Spotify",
        hyperlink: "https://www.spotify.com/",
        srcText: spotifyText,
        srcLogo: spotifyLogo,
    },
    {
        title: "Apple Music",
        alt: "Apple music",
        hyperlink: "https://music.apple.com/",
        srcText: appleMusicText,
        srcLogo: appleMusicLogo ,
    },
    {
        title: "Soundcloud",
        alt: "Soundcloud",
        hyperlink: "https://soundcloud.com/",
        srcText: soundcloudText,
        srcLogo: soundcloudLogo,
    },
];

const useStyles = makeStyles((theme) => ({
    text: {
        color: '#fff',
        textAlign: 'center',
    },
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

function StreamWork() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="lg" component="main" style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8) }}>
                <Typography variant="h5" component="h3" className={classes.text} style={{ paddingBottom: '0.75rem' }}>
                    Producer, Mixer & Multi-Instrumentalist</Typography>
                <Typography variant="h6" component="p" className={classes.text} style={{ marginTop: '-0.375rem', marginBottom: 0, fontWeight: 'lighter' }}>
                    Stream:
                </Typography>
                <Grid container spacing={6} justify="space-evenly" className={classes.sectionDesktop}>
                    <Grid item xs={12}>
                    {/* Music media map */}
                    {musicMedia.map((musicMedia) => (
                        <CardContent style={{ textAlign: "center" }}>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href={musicMedia.hyperlink} target="_blank">
                                <img src={musicMedia.srcText} alt={musicMedia.alt} height="45" />
                            </a>
                        </CardContent>
                    ))}
                    </Grid>
                </Grid>
                <Grid container justify="space-evenly" className={classes.sectionMobile}>
                    {/* Music media map */}
                    {musicMedia.map((musicMedia) => (
                        <Grid item xs={4}>
                            <CardContent style={{ textAlign: "center" }}>
                                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                <Link href={musicMedia.hyperlink} target={'_blank'}>
                                    <img src={musicMedia.srcLogo} alt={musicMedia.alt} height="50" />
                                </Link>
                            </CardContent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default StreamWork;