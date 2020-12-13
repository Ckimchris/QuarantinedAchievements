import React from 'react';
import './Banner.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import hero from './image-timeline/pics/hero.png';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundImage: `url(${hero})`,
      padding: theme.spacing(60, 0, 60),
    }
  }));
  

export default function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography align="center" paragraph>
                <div class="hero-text">
                    <h1><span class="whiteText">Quarantined</span>&nbsp;<span class="goldText">Achievements</span></h1>
                </div>
            </Typography>
          </Container>
        </div>
    );
}

/*
        <div class="hero-image">
            <div class="hero-text">
                <h1><span class="whiteText">Quarantined</span>&nbsp;<span class="goldText">Achievements</span></h1>
            </div>
        </div>
*/