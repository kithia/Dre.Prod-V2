import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import youtube from '../../images/socials/youtube_social_circle_red.png';
import twitter from '../../images/socials/Twitter_Logo_Blue.png';
import instagram from '../../images/socials/IG_Glyph_Fill-0.png';
import facebook from '../../images/socials/f_logo_RGB-Blue_1024.png';

function Copyright() {
    return (
        /* Footer copyright */
        <Typography variant="body1" color="textPrimary">
            {' © 2020 '}
            <Link color="inherit" href="#">
                Dre.Prod
            </Link>
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const socialMedia = [
    /* Social media */
    {
        src: youtube,
        alt: "YouTube",
        hyperlink: "https://www.youtube.com/channel/UCC-d4iq1FNGmq1dThW1gMJg",
    },
    {
        src: twitter,
        alt: "Twitter",
        hyperlink: "https://twitter.com/Twitter",
    },
    {
        src: instagram,
        alt: "Instagram",
        hyperlink: "https://www.instagram.com/instagram/",
    },
    {
        src: facebook,
        alt: "Facebook",
        hyperlink: "https://www.facebook.com/facebook",
    },
];

function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* Footer */}
            <Container component="main" maxWidth="lg">
                <footer className={classes.footer}>
                    <Grid container spacing={2} justify="space-evenly">
                        <Grid item xs={6}>
                            <Typography variant="h5" gutterBottom>
                                Dre.Prod
                            </Typography>
                            <Typography variant="body1" color="textPrimary" component="p">
                                <Link color="inherit" href="mailto:email@example.co.uk?subject=Dre-Prod.co.uk Query -&nbsp">
                                    dre@produces.co.uk
                                </Link>
                            </Typography>
                            <Copyright />
                        </Grid>
                        <Grid style={{ textAlign: 'right' }} item xs={6}>
                            {/* Social media map */}
                            {socialMedia.map((socialMedia) => (
                                <Link style={{ paddingLeft: 17.5 }} href={socialMedia.hyperlink} target={'_blank'}>
                                    <img src={socialMedia.src} alt={socialMedia.alt} title={socialMedia.alt} height="30" />
                                </Link>
                                ))}
                        </Grid>
                    </Grid>
                </footer>
            </Container>
        </React.Fragment>
    );
}

export default Footer;