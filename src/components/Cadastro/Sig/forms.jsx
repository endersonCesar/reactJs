import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="outlined-basic" label="Sig" variant="outlined" />
      <TextField id="outlined-basic" label="Url" variant="outlined" />
      <TextField id="outlined-basic" label="Modelo" variant="outlined" />
    </form>
  );
}