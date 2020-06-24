import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({isLogin, isLog}) {
  const classes = useStyles();
  useEffect(() => {
    isLogin()
  })
  const id = localStorage.getItem('user_id')

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Troll Hub
          </Typography>
          {isLog && <Link to={`/SavedComments/${id}`}><Button>Saved Comments</Button></Link>}
          {isLog && <Link to="/"><Button onClick={() => {localStorage.removeItem('token'); isLogin()}}>logOut</Button></Link>}
          {!isLog && <Link to="/"><Button color="inherit" >Login</Button></Link>}
        </Toolbar>
      </AppBar>
    </div>
  );
}