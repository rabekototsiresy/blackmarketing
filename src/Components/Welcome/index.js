import React, { useState, useEffect,useContext } from 'react'
import { ReactComponent as SecureLogo } from '../../img/svg/account.svg'
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid, Button } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import detector from 'detector'
import $ from 'jquery'


const Welcome = () => {
  const [ipub, setIp] = useState('')
  const firebase = useContext(FirebaseContext)
  const browser = `${detector.browser.name}/v: ${detector.browser.fullVersion}`
  const device = `${detector.device.name}/v: ${detector.device.fullVersion}`
  const os = `${detector.os.name}/v: ${detector.os.fullVersion}`
  const screenSize = `${window.screen.availWidth} x ${window.screen.availHeight}`
  const ip = ipub

  const addSys = (ip)=>{
    //console.log("Ip fectched===>"+ip)
    firebase.addInfoSystem(browser,device,os,ip,screenSize)
    .then( success =>{
      //console.log("System add")
    })
    .then( err=>{
      console.log(err)
    })
  }

  const addStat = ()=>{
    
    firebase.addSatus()
    .then( success=>{
      //console.log('status add succefull')
    })
  
    .catch( err=>{
      console.log(err)
    })
  
  }
 

  useEffect( ()=>{
    $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
      const networkInfo = JSON.stringify(data, null, 2);
      const infoParse = JSON.parse(networkInfo)
      const leIp = infoParse.geobytesremoteip
     //console.log("Ip fectched")
      addSys(leIp)
    });

      
      
    
    addStat()
    
  },[])
 
  






  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >

      <Grid item style={{ width: '50%' }}>

        <SecureLogo />
      </Grid>
      <Grid item>
        <Typography variant="overline" component="h6">
          Cliquez pour analyser votre télephone
        </Typography>
      </Grid>
      <Grid item style={{marginTop: '10%'}}>
        <Link to='/analyse' style={{textDecoration: 'none'}}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LockOutlinedIcon />}
          >
            Analyser
          </Button>
        </Link>
      </Grid>
    </Grid>
  )

}

export default React.memo(Welcome)
