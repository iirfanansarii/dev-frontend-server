import { TextField, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
    margin: '5px',
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: '15px',
    fontWeight: '800',
    '& .MuiFilledInput-input': {
      fontFamily: 'exo',
      fontSize: '20px',
      fontWeight: '600',
      color: 'gray'
      // background: '#E8F0FE'
    },
    '& .MuiFilledInput-root': {
      borderRadius: '0px'
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: '2px solid #393939'
    },
    '& .MuiFormHelperText-filled': {
      fontFamily: 'exo',
      fontSize: '15px',
      color: 'gray',
      fontWeight: '1000'
    },
    '& .MuiFormLabel-root.Mui-error': {
      fontFamily: 'exo',
      fontSize: '15px',
      color: '#393939',
      fontWeight: '1000'
    },
    '& .MuiFormHelperText-root.Mui-error': {
      fontFamily: 'exo',
      fontSize: '15px',
      color: '#393939',
      fontWeight: '1000'
    }
  }
}));

export default function TextfieldComponent(props) {
  const { error, id, label, defaultValue, helperText, variant, onChange } =
    props;
  const classes = useStyles();
  return (
    <div>
      <TextField
        error={error}
        id={id}
        label={label}
        defaultValue={defaultValue}
        helperText={helperText}
        variant={variant}
        className={classes.textField}
        onChange={onChange}
      />
    </div>
  );
}
