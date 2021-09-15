import { Grid } from '@material-ui/core';
import React from 'react';
import SinglePostComponent from '../components/SinglePostComponent';
import Layout from '../layout/Layout';

export default function SinglePost() {
  return (
    <div>
      <Layout>
        <Grid item>
          <SinglePostComponent />
        </Grid>
      </Layout>
    </div>
  );
}
