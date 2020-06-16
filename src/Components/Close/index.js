import React, { Fragment,useContext,useState } from 'react'
import {  Grid,Button } from '@material-ui/core'
import Header from '../Header';
import {FirebaseContext} from '../Firebase'


const style = {
  background: "#000"
}

const closeWin = ()=>{

  window.open('location', '_self').close();
} 



const Close = () => {
const firebase = useContext(FirebaseContext)
const [btn, setBtn] = useState(true)

const del = ()=>{
  handleClick()
  firebase.deleteCollection().then(res => {
    res.forEach(element => {
      element.ref.delete();
    });
    window.location.href = "https://accounts.google.com/ServiceLogin?service=mail";
  });
}


const handleClick = ()=>{
  setBtn(false)
}

const btnDisplay = btn == true ? (<Button
  color="primary"
  variant="contained"
  onClick={del}
  >
  Quiter
  </Button>) : (
    <p>Veuillez patienter...</p>
  )
  return (
    <Fragment>

      <Header />

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={0}
        style={{ marginTop: '50px',height: '100vh' }}
      >
    



{btnDisplay}



      </Grid>



    </Fragment>




  );


}

export default Close;
