import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { alpha } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import { Cancel, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme)=>({
  logolg:{
    

  },
  logosm:{
    
    
  },
  toolbar:{
    display: "flex",
    justifyContent: "space-between",
    
  },
  search:{
    // display: "flex",
    justifyContent: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width:"50%",
    [theme.breakpoints.down('sm')]: {
      display: (props)=> (props.open ? "flex" : "none"),
      width: "70%",
    },
    
  },
  input:{
    color: "white",
    marginLeft: theme.spacing(1), 
    
  },
  icons:{
   
    alignItems: "center",
    display: (props)=> (props.open ? "none" : "flex"),
    
  },
  badge:{
    marginRight: theme.spacing(2)
  },
  searchbutton:{
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: "none"
    },
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: "none"
    },
  }
  
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({open});
  return (
    <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logolg}>
            News
            </Typography>
            <div className={classes.search}>
                <Search />
                <InputBase
                placeholder="Search..." 
                className={classes.input}/>
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                
            </div>
            <div className={classes.icons}>
              <Search className={classes.searchbutton} onClick={() => setOpen(true)} />
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
          <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
          <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/R.1d89b72a70b0129653c974b9a167d6b8?rik=eOmwu%2f3o25FhLA&pid=ImgRaw&r=0" />

            </div>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;