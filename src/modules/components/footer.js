import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        /* Footer copyright */
        <Typography variant="body2" color="textSecondary" align="center">
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

function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* Footer */}
            <footer className={classes.footer} style={{ boxAlign: 'left' }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Dre.Prod
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    <Link color="inherit" href="mailto:email@example.co.uk?subject=Dre-Prod.co.uk Query -&nbsp">
                        dre@produces.co.uk
                    </Link>
                </Typography>
                <Copyright />
            </footer>
        </React.Fragment>
    );
}

export default Footer;