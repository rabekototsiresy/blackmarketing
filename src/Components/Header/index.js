import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid } from '@material-ui/core'
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderMob from './HeaderMob';
const useStyles = makeStyles(theme => ({
  main: {
    border: '2px solid black',
  },

}))
const Header = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={0}
    >
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
        spacing={0}
        style={{ backgroundColor: "#000", height: '22px',paddingTop: '2px' }}

      >
        <HeaderTop />
        <Grid
        container
        direction="row"
        
        spacing={0}
        style={{ backgroundColor: "#f9f9f9", height: '40px' }}

      >
        <HeaderMob />
      </Grid>
    </Grid>

</Grid>

  )
}

export default Header
