import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import {ReactComponent as Google} from '../../../img/svg/google.svg'
import{Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      
      <AppBar position="fixed" elevation={1} color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link to="/">
            <ArrowBackRoundedIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{color:'#273746',fontSize: '15px',textAlign:'center',padding: '0 10px'}}>
            Compte google 
           
          </Typography>
          <Google height="25" size="50" width="100"  />
    
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

            </div>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}