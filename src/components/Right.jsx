import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop :theme.spacing(2),
  }
  
}));




function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      Right
    </Container>
  );
}

export default Rightbar;