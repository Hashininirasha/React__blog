import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';

const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop :theme.spacing(2),
  }
  
}));




function Feed() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      Feed
    </Container>
  );
}

export default Feed;