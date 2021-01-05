import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Forms from './forms';
import Table from './table';
import Button from './buttonForms';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

            <Forms></Forms>
            <Button></Button>
          </Paper>
        </Grid>
        

        <Grid item xs={12}>
          <Paper className={classes.paper}>

          <Table></Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
