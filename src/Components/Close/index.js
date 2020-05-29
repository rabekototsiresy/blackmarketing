import React, { Fragment } from 'react'
import {  Grid,Button } from '@material-ui/core'
import Header from '../Header';
import {FirebaseContext} from '../Firebase'


const style = {
  background: "#000"
}

const closeWin = ()=>{

const self = this
  window.opener = self;
  window.close();
  
} 



const Close = () => {
  

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
    <Button
    color="primary"
    variant="contained"
    onClick={closeWin}
    >
    Fermer
    </Button>
      </Grid>



    </Fragment>




  );


}

export default Close;
