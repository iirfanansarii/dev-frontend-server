import { Grid, Link, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import TextfieldComponent from '../components/TextfieldComponent';
import TypographyComponent from '../components/TypographyComponent';
import httpService from '../httpService/httpService';
import { signupFields } from '../utills';
import CustomizedSnackbars from '../components/CustomizedSnackbars';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    minHeight: '100%',
  },
  container: {
    width: '30%',
    position: 'relative',
    top: '20%',
    left: '35%',
  },
  headGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '12px',
  },
  textfieldBody: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '5px',
  },
  btnGrid: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  signinLink: {
    color: '#393939',
    margin: '10px',
    textAlign: 'left',
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '15px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handelChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    httpService
      .post('/signup', formData)
      .then((res) => {
        setSeverity('success');
        setMessage(res.data.message);
        setOpen(true);
        setTimeout(() => {
          history.push('/');
        }, 1000);
      })
      .catch((err) => {
        setSeverity('error');
        setMessage(err.response.data.message);
        setOpen(true);
      });
  };

  return (
    <div className={classes.root}>
      <CustomizedSnackbars
        severity={severity}
        message={message}
        open={open}
        handleClose={handleClose}
      />
      <Grid container className={classes.container}>
        <Grid item md={12} className={classes.headGrid}>
          <TypographyComponent typographyText={'Create Your Account'} />
        </Grid>
        <Grid item md={12} className={classes.textfieldBody}>
          {signupFields &&
            signupFields.map((txtfield) => (
              <TextfieldComponent
                error={txtfield.error}
                id={txtfield.id}
                label={txtfield.label}
                defaultValue={txtfield.defaultValue}
                helperText={txtfield.helperText}
                variant={txtfield.variant}
                onChange={handelChange}
              />
            ))}
        </Grid>
        <Grid item md={12} className={classes.btnGrid}>
          <Link href="/signin" className={classes.signinLink}>
            Sign In
          </Link>
          <ButtonComponent btnName={'Signup'} handleSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </div>
  );
}
