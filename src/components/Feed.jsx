import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post';

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
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feed;