import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  container: {
    height: "100vh",
    color: "white",
    paddingTop :theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom : theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginBottom : theme.spacing(5),
      cursor: "pointer"
    },
    
  }
  
}));




function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>
          Home page
        </Typography>
        </div>

        <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>
          Home page
        </Typography>
        </div>

        <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>
          Home page
        </Typography>
        </div>

        <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>
          Home page
        </Typography>
        </div>

        <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>
          Home page
        </Typography>
        </div>
        
    </Container>
  );
}

export default Leftbar;