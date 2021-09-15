import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { postContext } from '../pages/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    width: '51.4%',
    minHeight: '50px',
    marginLeft: '30%',
    marginBottom: '50px',
  },
  buttonGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: '5px',
    fontFamily: 'exo',
    fontSize: '20px',
    fontWeight: '600',
    textTransform: 'none',
    height: '44px',
    '& .MuiButton-label': {
      width: '80px',
      color: '#393939',
    },
  },
  page: {
    margin: '10px',
    width: '100px',
    color: '#393939',
    fontFamily: 'exo',
    fontWeight: '600',
    fontSize: '20px',
  },
}));

export default function PaginationComponent(props) {
  const { nextPageHandler, backPageHandler } = props;
  const { page } = useContext(postContext) || {};

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid
          className={classes.buttonGrid}
          item
          xs={12}
          sm={12}
          md={12}
          xl={12}
        >
          <Button className={classes.button} onClick={backPageHandler}>
            Back
          </Button>
          <Typography className={classes.page}>Page:{page}</Typography>
          <Button className={classes.button} onClick={nextPageHandler}>
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
