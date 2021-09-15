import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  heading: {
    color: '#393939',
    fontFamily: 'exo',
    fontSize: '1.5rem',
    fontWeight: '800',
  },
}));

export default function TypographyComponent(props) {
  const { typographyText } = props;
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.heading}>{typographyText}</Typography>
    </div>
  );
}
