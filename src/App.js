import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import { Grid } from '@material-ui/core';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Right from './components/Right';

const useStyles = makeStyles((theme)=>({
  
}));




function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
            <Leftbar />
        </Grid>
        <Grid item sm={7}>
            <Feed />
        </Grid>
        <Grid item sm={3}>
            <Right />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
