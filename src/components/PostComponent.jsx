import { Button, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import React, { useState } from 'react';
import httpService from '../httpService/httpService';
import CustomizedSnackbars from './CustomizedSnackbars';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4px',
    height: 'auto',
    width: '100%',
    position: 'absolute',
  },
  postContainer: {
    background: '#E8E8E8',
    marginTop: '10px',
    width: '60%',
    marginLeft: '15%',
    padding: '10px',
    minHeight: '25%',
    maxHeight: '90%',
  },
  postTitleBox: {
    // background: '#FCFDFD',
    marginBottom: '15px',
    background: 'white',
  },
  postTitle: {
    outline: 'none',
    resize: 'none',
    border: 'none',
    width: '99.7%',
    textAlign: 'left',
    background: 'white',
    color: '#393939',
    fontWeight: '800',
    fontSize: '40px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    textOutline: 'none',
  },
  postContentBox: {
    // background: '#FCFDFD',
    background: 'white',
    minHeight: '500px',
    marginTop: '3%',
  },
  postContent: {
    background: 'white',
    outline: 'none',
    resize: 'none',
    border: 'none',
    width: '99.7%',
    color: '#393939',
    fontWeight: '200',
    fontSize: '20px',
    fontFamily: 'monospace',
    textOutline: 'none',
  },
  postBtnBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  createPostBtn: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '15px',
    height: '40px',
    width: '15%',
    marginRight: '10px',
    marginTop: '8px',
    textTransform: 'none',
    texAlign: 'center',
    borderRadius: 'none',
  },
}));

export default function PostComponent() {
  const classes = useStyles();
  const [postittle, setPostTitle] = useState('');
  const [postcontent, setPostContent] = useState('');
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');
  const history = useHistory();
  const userId = localStorage.getItem('userId');

  const onsubmitHandler = () => {
    httpService
      .post('/create/post', {
        userId,
        postTitle: postittle,
        postContent: postcontent,
      })
      .then((res) => {
        setMessage(res.data.message);
        setSeverity('success');
        setOpen(true);
        history.push('/');
      })
      .catch((err) => {
        console.log('=======>error hu mai', err);
        setMessage(err.response.data.message);
        setSeverity('error');
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CustomizedSnackbars
        severity={severity}
        message={message}
        open={open}
        handleClose={handleClose}
      />
      <Grid containter md={12} lg={12} className={classes.postContainer}>
        <Grid item md={12} lg={12} className={classes.postTitleBox}>
          <TextareaAutosize
            minRows={1}
            maxRows={100}
            aria-label="maximum height"
            placeholder="New Post Title Here..."
            className={classes.postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Grid>
        <Grid item md={12} lg={12} className={classes.postContentBox}>
          <TextareaAutosize
            minRows={1}
            maxRows={100}
            aria-label="maximum height"
            placeholder="write your post content here..."
            className={classes.postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Grid>
        <Grid itmem md={12} lg={12} className={classes.postBtnBox}>
          <Button
            variant="contained"
            color="primary"
            className={classes.createPostBtn}
            onClick={onsubmitHandler}
          >
            Create Post
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
