import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, TextareaAutosize } from '@material-ui/core';
import CommentComponent from './CommentComponent';
import { RiHeart2Line } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import httpService from '../httpService/httpService';
import { useParams } from 'react-router-dom';
import CustomizedSnackbars from './CustomizedSnackbars';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '5px',
    padding: '10px',
    background: '#E8E8E8',
    cursor: 'pointer',
  },
  singlePostBox: {
    display: 'flex',
    background: '#E8E8E8',
  },
  cardHead: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  cardHeadTextBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  cardHeadContainer: {
    background: 'white',
    padding: '5px',
  },
  userName: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '700',
    fontSize: '14px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  postDatetime: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  cardContentContainer: {
    width: '100%',
    minHeight: '100%',
    height: 'auto',
    marginLeft: '7.5%',
  },
  contentText: {
    color: '#231f20',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '30px',
  },
  butonGrids: {
    padding: '0px',
    height: 'auto',
  },
  buttons: {
    position: 'relative',
    top: '10%',
    left: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& .MuiButtonBase-root': {
      minWidth: '50px',
      borderRadius: '0px',
    },
    '& .MuiButton-label': {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  },
  avatar: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '20px',
  },
  button: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '400',
    fontSize: '16px',
    textTransform: 'lowercase',
    '& .MuiButton-startIcon': {
      marginLeft: '-8px',
    },
  },
  singlePostContentBox: {
    marginBottom: '20px',
  },
  singlePostContent: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  commentTitleBox: {
    background: '#FCFDFD',
    marginBottom: '40px',
  },
  commentText: {
    outline: 'none',
    resize: 'none',
    border: '1px dotted black',
    width: '99%',
    textAlign: 'left',
    background: '#FCFDFD',
    color: '#393939',
    fontWeight: '500',
    fontSize: '20px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    textOutline: 'none',
  },
  commentBox: {
    marginBottom: '50px',
  },
  discusBtn: {
    fontWeight: '500',
    fontSize: '15px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,

    '&:hover': {
      color: 'white',
      background: 'blue',
    },
  },
  likesCount: {
    fontWeight: '100',
    fontSize: '20px',
    fontFamily: 'monospace',
  },
  bookmarkCounts: {
    fontWeight: '100',
    fontSize: '20px',
    fontFamily: 'monospace',
  },
}));

export default function SinglePostComponent() {
  const classes = useStyles();
  const [singlepost, setSinglePost] = useState([]);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const history = useHistory();
  const token = localStorage.getItem('token');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    httpService
      .get(`/post/${id}`)
      .then((res) => {
        setSinglePost(res.data.post);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setSeverity('error');
        setOpen(true);
      });
  }, [id]);

  const handleClose = () => {
    setOpen(false);
  };

  const addComment = (userId) => {
    const token = localStorage.getItem('token');
    if (!token) return history.push('/signin');
    httpService
      .put(`/comment/on/post/${id}`, { userId, comments: comment })
      .then((res) => {
        setMessage(res.data.message);
        setSeverity('success');
        setOpen(true);
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setSeverity('error');
        setOpen(true);
      });
  };

  const reactOnPost = (userId) => {
    if (!token) return history.push('/signin');
    httpService
      .patch(`/reaction/on/comment/${id}`, { userId })
      .then((res) => {
        setClicked(true);
        setSeverity('success');
        setMessage(res.data.message);
        setOpen(true);
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      })
      .catch((err) => {
        setSeverity('error');
        setMessage(err.response.data.message);
        setOpen(true);
      });
  };

  const buttonStyle = {
    borderColor: 'red',
    color: 'red',
  };

  return singlepost.map((post, index) => (
    <div className={classes.root} key={index}>
      <CustomizedSnackbars
        severity={severity}
        message={message}
        open={open}
        handleClose={handleClose}
      />
      <Grid container item md={12} lg={12} className={classes.singlePostBox}>
        <Grid item className={classes.butonGrids} md={2} lg={2}>
          <Grid item md={2} lg={2} className={classes.buttons}>
            <Button
              color="default"
              className={classes.button}
              startIcon={<RiHeart2Line />}
              onClick={() => reactOnPost(post._id)}
              style={clicked === true ? buttonStyle : null}
            ></Button>
            <Typography className={classes.likesCount}>
              {post.reactions.length}
            </Typography>
            <Button
              color="default"
              className={classes.button}
              startIcon={<BsBookmark />}
            ></Button>
            <Typography className={classes.bookmarkCounts}>20</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.cardHeadContainer}
          item
          md={8}
          lg={8}
        >
          <Grid item sm={12} md={12} lg={12} className={classes.cardHead}>
            <Grid item sm={1} md={1} lg={1}>
              <Avatar aria-label="recipe" className={classes.avatar}>
                A
              </Avatar>
            </Grid>
            <Grid item sm={4} md={6} lg={6} className={classes.cardHeadTextBox}>
              <Typography className={classes.userName}>
                {post.user.name}
              </Typography>
              <Typography className={classes.postDatetime}>
                September 14, 2016
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.cardContentContainer}>
            <Grid item md={12} lg={12} className={classes.cardText}>
              <Typography className={classes.contentText}>
                {post.postTitle}
              </Typography>
            </Grid>
            <Grid item md={12} lg={12} className={classes.singlePostContentBox}>
              <Typography className={classes.singlePostContent}>
                {post.postContent}
              </Typography>
            </Grid>
            <Grid item md={12} lg={12} className={classes.commentTitleBox}>
              <TextareaAutosize
                minRows={5}
                maxRows={100}
                aria-label="maximum height"
                placeholder="Add the discussion here..."
                className={classes.commentText}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                className={classes.discusBtn}
                onClick={() => addComment(post._id)}
              >
                Submit
              </Button>
            </Grid>
            <Grid item md={12} lg={12} className={classes.commentBox}>
              <CommentComponent comments={post.comments} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  ));
}
