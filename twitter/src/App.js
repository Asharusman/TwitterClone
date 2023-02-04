import logo from './logo.svg';
import './App.css';
import Leftbar from './components/Leftbar';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import Centrebar from './components/Centrebar';
import Rightbar from './components/Rightbar';
function App() {
  return (
    <Box sx={{display: 'flex'}}>
        <Leftbar/>
        <Divider/>
        <Centrebar/>
        <Rightbar/>
      </Box>
  );
}

export default App;
