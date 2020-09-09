import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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

const videos = [
    /* Videos */
    {
        id: "dre-prod-boo'd-up-afro-latin",
        src: "https://www.youtube.com/embed/lgCzTUixPq4",
    },
    {
        id: "dre-prod-boo'd-up-live",
        src: "https://www.youtube.com/embed/UhszfpjoZ9k",
    },
    {
        id: "dre-prod-ye",
        src: "https://www.youtube.com/embed/YJr10IDUYYY",
    },
];

function RecentWork() {
    return (
        <React.Fragment>
            <Container maxWidth="lg" component="main" style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8) }}>
            <Grid container spacing={6} justify="space-evenly">
                {/* Videos map */}
                {videos.map((videos) => (
                <Grid item xs={12} lg={6}>
                    <Card style={{ borderRadius: '4px' }}>
                        <CardActionArea style={{ borderRadius: 8 }} disableRipple>
                            <CardMedia style={{ margin: 1, marginBottom: 0 }}>
                                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                                <iframe style={{ width: '100%', height: '370px' }} id={videos.id}
                                    src={videos.src} frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            </CardMedia>
                            <CardContent>
                                <div align='center'>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lorem Ipsum
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Container>
        </React.Fragment>
    );
}

export default RecentWork;