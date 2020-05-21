import React, { Fragment } from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LockSharpIcon from '@material-ui/icons/LockSharp';
import CastSharpIcon from '@material-ui/icons/CastSharp';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import './index.css'
const HeaderNav = () => {
  return (
    <Fragment>
      <Grid item elevation={1}
        container
        justify="center"
        alignItems="center"
        spacing={1}
        style={{marginTop: '2px',boxShadow: '2px 2px 2px #aaa'}}
      >
        <Grid item xs={1} style={{paddingLeft: '10px'}}>
          <HomeOutlinedIcon  style={{fontSize: '25px',textAlign: 'center'}} />
        </Grid>
        <Grid item xs={9} elevation={2}>

          <div class="search">
            <span class=" fa-search">
              <LockSharpIcon color="green" style={{fontSize: '15px',color:'green'}} />
            </span>
            <input placeholder="https://"  value="https://www.google.com/search?q=google+icon"/>
          </div>
        </Grid>
        <Grid item xs={1}>
          <CastSharpIcon style={{fontSize: '15px',textAlign: 'center',paddingLeft: '10px'}} />
          </Grid>
        <Grid item xs={1}>
          <GetAppSharpIcon style={{fontSize: '17px',textAlign: 'center'}} color="secondary" />
          </Grid>
      </Grid>
    </Fragment>
  )
}

export default HeaderNav
