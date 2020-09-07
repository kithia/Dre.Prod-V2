import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { SocialMediaIconsReact } from 'social-media-icons-react';

function Copyright() {
    return (
        /* Footer copyright */
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Dre.Prod
            </Link>{' 2020.'}
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
        icon: "youtube",
        hyperlink: "https://www.youtube.com/channel/UCC-d4iq1FNGmq1dThW1gMJg",
    },
    {
        icon: "twitter",
        hyperlink: "https://twitter.com/Twitter",
    },
    {
        icon: "instagram",
        hyperlink: "https://www.instagram.com/instagram/",
    },
    {
        icon: "facebook",
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
                    <Grid container spacing={6} justify="space-evenly">
                        <Grid item xs={6}>
                            <Typography variant="h6" gutterBottom>
                                Dre.Prod
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" component="p">
                                <Link color="inherit" href="mailto:email@example.co.uk?subject=Dre-Prod.co.uk Query -&nbsp">
                                    dre@produces.co.uk
                                </Link>
                            </Typography>
                            <Copyright />
                        </Grid>
                        <Grid style={{ textAlign: 'right' }} item xs={6}>
                            {/* Social media map */}
                            {socialMedia.map((socialMedia) => (
                                <Link style={{ paddingLeft: 15, target: '_blank' }}>
                                    <SocialMediaIconsReact borderWidth="0" roundness={50} size="40" iconSize="1" icon={socialMedia.icon} url={socialMedia.hyperlink}/>
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