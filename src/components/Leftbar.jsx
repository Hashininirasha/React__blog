import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';
import FaceIcon from '@material-ui/icons/Face';
import ListIcon from '@material-ui/icons/List';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme)=>({
  container: {
    height: "120vh",
    color: "white",
    paddingTop :theme.spacing(2),
    position: "sticky",
    top: 0,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ffcccb",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom : theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginBottom : theme.spacing(5),
      cursor: "pointer"
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      display: "none",
    },
  },
  icon: {
    color: "#006064",
    marginRight:theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: "18px",
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
        <FaceIcon className={classes.icon} />
        <Typography className={classes.text}>
          Friends
        </Typography>
        </div>

        <div className={classes.item}>
        <ListIcon className={classes.icon} />
        <Typography className={classes.text}>
          Lists
        </Typography>
        </div>

        <div className={classes.item}>
        <CameraAltIcon className={classes.icon} />
        <Typography className={classes.text}>
          Camera
        </Typography>
        </div>

        <div className={classes.item}>
        <VideoCallIcon className={classes.icon} />
        <Typography className={classes.text}>
          Videos
        </Typography>
        </div>

        <div className={classes.item}>
        <AppsIcon className={classes.icon} />
        <Typography className={classes.text}>
          App
        </Typography>
        </div>

        <div className={classes.item}>
        <PlaylistAddIcon className={classes.icon} />
        <Typography className={classes.text}>
          collection
        </Typography>
        </div>

        <div className={classes.item}>
        <StorefrontIcon className={classes.icon} />
        <Typography className={classes.text}>
          Market Place
        </Typography>
        </div>

        <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>
          Settings
        </Typography>
        </div>

        <div className={classes.item}>
        <ExitToAppIcon className={classes.icon} />
        <Typography className={classes.text}>
          Logout
        </Typography>
        </div>
        
    </Container>
  );
}

export default Leftbar;