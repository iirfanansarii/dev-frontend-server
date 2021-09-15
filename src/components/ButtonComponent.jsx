import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  btnName: {
    fontFamily: 'exo',
    fontSize: '20px',
    fontWeight: '600',
    textTransform: 'none',
    border: '2px solid black',
    borderRadius: '50px',
    height: '44px',
    '& .MuiButton-label': {
      width: '100px',
      color: '#393939'
    }
  }
}));

export default function ButtonComponent(props) {
  const classes = useStyles();
  const { btnName, handleSubmit } = props;
  return (
    <div>
      <Button className={classes.btnName} onClick={handleSubmit}>
        {btnName}
      </Button>
    </div>
  );
}
