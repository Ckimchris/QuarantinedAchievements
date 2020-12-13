import React from 'react';
//import './Blurb.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import hero from './image-timeline/pics/hero.png';
import TwitterIcon from '@material-ui/icons/Twitter';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
    blurbContent: {
      backgroundColor: "#222",
      padding: theme.spacing(5, 0, 1),
    },
    fab:{
        backgroundColor: "#00BFFF",
        justifyContent: 'center'
    }
  }));
  
const openInNewTab = (url) =>{
    const newWindow = window.open(url, '_blank', 'noopener noreferrer')
    if (newWindow) newWindow.opener = null
}

export default function Blurb() {
    const classes = useStyles();
    return (
        <div className={classes.blurbContent}>
        <Container maxWidth="md">
          <Typography variant="h5" align="center" style={{ color: 'white' }} paragraph>
            My name is CKenshin and this is Quarantined Achievements! 
            <br/>
            <br/>
            It's a compilation site of every piece of media and personal achievement I've ever completed since the arrival of the Great Quarantine of Covid-19. 
            <br/>
            If you are interested in keeping up with me, feel free to follow my twitter below.
            <br/>
            <br/>
            <Fab color={'primary'} size="medium" >
                <TwitterIcon style={{ color: 'white' }} onClick={() => openInNewTab('https://twitter.com/Ckenshin7')}/>
            </Fab>
          </Typography>
        </Container>
      </div>
    );
}

/*
import React from 'react';
import './Blurb.css';

const Blurb = () => {
    return (
        <div className="hero">
            <header className="App-header">
                <h1 className="App-title">Welcome to Quarantined Achievements</h1>
                <br/>
                <p>It was easy to lose track of time when every day is spent inside so I made this website to remember what I've done. It's a timelined memorial to every piece of media I've completed since the quarantine has started. Sometimes included are key moments that really left a mark on me. Feel free to explore and maybe you'll find something you'll like too.</p> 
            </header>
        </div>
    );
}

export default Blurb;



*/