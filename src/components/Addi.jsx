import { Button, Container, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



const useStyles = makeStyles((theme)=>({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20
  },
  container: {
      width: 500,
      height: 550,
      backgroundColor: "#e8eaf6",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      [theme.breakpoints.down('sm')]: {
        width:"100vh",
        height: "100vh",

      },
  },
  form: {
    padding: theme.spacing(2),

  },
  item: {
    marginBottom: theme.spacing(3)
  }
  
  
}));




function Addi() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
    <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
  <Fab color="primary" className={classes.fab}>
    <AddIcon />
  </Fab>
</Tooltip>
<Modal open={open}>
    <Container className={classes.container}>
      <form className={classes.form} autoComplete="off">
        <div className={classes.item}>
            <TextField id="standard-basic" label="Title" size="small" style={{width:"100%"}} />
        </div>

        <div className={classes.item}>
          <TextField 
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Tell your story"
          variant="outlined" 
          label="Description" 
          size="small" 
          style={{width:"100%"}} />
        </div>

        <div className={classes.item}>
          <TextField select label="Visibility" value="Public">
              <MenuItem value="Public">Public</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Unlisted">Unlisted</MenuItem>
          </TextField>

        </div>
        <div className={classes.item}>
        <FormLabel component="legend">Who can Comment?</FormLabel>
          <RadioGroup>
            <FormControlLabel value="Everybody" control={<Radio size="small"/>}label="Everybody" />
            <FormControlLabel value="My Frinds" control={<Radio size="small"/>} label="My Frinds" />
            <FormControlLabel value="No body" control={<Radio size="small"/>} label="No body" />
            <FormControlLabel value="Custom" disabled control={<Radio size="small"/>} label="Custom (Premium)" />
          </RadioGroup>
        </div>
        <div className={classes.item}>
      <Button variant="outlined" color="primary" style={{marginRight: 20}} onClick={() => setOpenAlert(true)}>Create</Button>
      <Button variant="outlined" color="secondary" onClick={()=> setOpen(false)}>Cancel</Button>
        </div>

      </form>
    </Container>
</Modal>
<div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
</>
  );
}

export default Addi;