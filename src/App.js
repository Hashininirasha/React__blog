import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';

const useStyles = makeStyles((theme)=>({
  
}));




function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
