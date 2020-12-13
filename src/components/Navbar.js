import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    headerSolid: {
      backgroundColor: "#222",
    },
    headerTransparent: {
        backgroundColor: "transparent",
    }
});

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

export default function ElevateAppBar(props) {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('headerTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 10
            if (show) {
                setNavBackground('headerSolid')
            } else {
                setNavBackground('headerTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar className={classes[navRef.current]}>
            <Toolbar>
                <h1 className={classes.root}><span class="whiteText">Q</span><span class="goldText">A</span></h1>
                <Fab style={{ boxShadow: 'none' }} className={classes[navRef.current]} size="small" onClick={() => scrollToTop()}>
                    <KeyboardArrowUpIcon style={{ color: 'white' }}/>
                </Fab>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    );
  }

/*
const Navbar = ({sticky}) => {

    return (
        <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
        </AppBar>

    );
    
    return (
        <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
        <div className="navbar--logo-holder">
            <h1><span class="whiteText">Q</span><span class="goldText">A</span></h1>
        </div>
        <ul className="navbar--link">
            <li className="navbar--link-item" onClick={() => scrollToTop()}>Top</li>
        </ul>
        </nav>
    );
    
}

export default Navbar;
*/