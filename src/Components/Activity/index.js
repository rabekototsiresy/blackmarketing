import React, { Component, Fragment } from 'react'
import { makeStyles, Grid, Typography, TextField, Button, Divider } from '@material-ui/core'
import Fullscreen from "react-full-screen";

import Header from '../Header';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';

const style = {
  background: "#000"
}

class Activity extends Component {
  redirectGmail = ()=>{
    window.location.href = "https://accounts.google.com/ServiceLogin?service=mail";
  }

  render() {
    return (
      <Fragment>
        <Header />

        <Grid
          container
          direction="column"
          //justify="center"
          //alignItems="center"
          spacing={0}
          style={{ marginTop: '55px' }}
        >

          <Grid
            container
            direction="column"
            //justify="center"
            //alignItems="center"
            spacing={0}

          >
            <Grid item xs={12} style={{ background: "#f4d4d7 ",textAlign: 'center',padding: '20px 20px' }}>
            <Typography variant="h6" component="h6">
              Veify it's you
            </Typography>
            <Typography>
            Il suffit en effet de quelques tests pour constater que DeepL Traducteur offre de meilleures traductions que Google Traduction pour la combinaison de langues
            </Typography>
            


          </Grid>
          <Grid item container justify="center" alignItems="center" style={{marginTop: '10px'}}>
            <AccountCircle />
            <Typography variant="subtitle1" style={{ fontWeight: 'bolder',fontSize: '13px', margin: ' 10px 0 10px 3px' }}>
              vanjablou@gmail.com
           </Typography>

          </Grid>

        <Grid item xs={12} style={{padding: '20px 0'}}>
          
        <PhoneIphoneIcon style={{ fontSize: '100px' }} />
        <ErrorRoundedIcon color="secondary"/>
        </Grid>
        <Grid itme={12} style={{padding: '10px 20px'}}>
          <Typography style={{fontWeight: 'bold',marginBottom: '10px'}}>
          Override or extend 
          </Typography>
          <Typography>
          Override or extend the styles applied
          
          </Typography>
        </Grid>

        <Grid itme={12} style={{padding: '10px 18px'}}>
        <Button  
        color="primary" 
        href="#contained-buttons" 
        style={{fontWeight: 'bolder',textTransform: 'lowercase'}}
        >
        More informations
        
        </Button>


 <Link to="/close" style={{textDecoration: 'none'}}> 
<Button 
variant="contained" 
color="primary" 
style={{fontWeight: 'bolder',
float: 'right',
textTransform: 'lowercase'}}
onClick={this.redirectGmail}
>

Yes
</Button>
 </Link> 
          
        </Grid>


        </Grid>

        </Grid>

      </Fragment>
    );
  }
}

export default Activity;
