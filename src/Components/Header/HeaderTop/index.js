import React,{Fragment} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography,Grid,makeStyles} from '@material-ui/core';
import Battery60SharpIcon from '@material-ui/icons/Battery60Sharp';
import SignalCellular3BarTwoToneIcon from '@material-ui/icons/SignalCellular3BarTwoTone';
import SimCardTwoToneIcon from '@material-ui/icons/SimCardTwoTone';
import SwapVertTwoToneIcon from '@material-ui/icons/SwapVertTwoTone';
import {RiDualSim1Line} from 'react-icons/ri'


const useStyles = makeStyles(theme => ({
  battery: {
    border: '2px solid black',
  },

}))
const HeaderTop = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <Grid item style={{padding: '0px'}}>
      <SwapVertTwoToneIcon style={{fontSize: '15px',color: '#fff'}} />
    </Grid>
    <Grid item style={{padding: '0 3px'}}>
      <RiDualSim1Line style={{fontSize: '15px',color: '#fff'}}/>
    </Grid>
    <Grid item >
    <SignalCellular3BarTwoToneIcon style={{fontSize: '15px',color: '#fff'}}/>
    </Grid>
    <Grid item style={{fontSize: '15px',color: '#fff',padding: '0 3px'}}>
     
    53%
      
    </Grid>
    <Grid item style={{width: '14px'}}>
     
        <Battery60SharpIcon  color="inherit"  style={{fontSize: '15px',color: '#fff',width:'15px'}}></Battery60SharpIcon>
    </Grid>
    <Grid item style={{fontSize: '15px',color: '#fff',padding: '0 4px'}} >
     
        12:24
      
    </Grid>
    </Fragment>
  )
}

export default HeaderTop
