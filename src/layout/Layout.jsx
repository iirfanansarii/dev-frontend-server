import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: '100%',
    background: '#E8E8E8'
  },
  children: {
    marginTop: '4%'
  }
}));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderComponent />
      <Grid item className={classes.children}>
        {props.children}
      </Grid>
    </div>
  );
}
