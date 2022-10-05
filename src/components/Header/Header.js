import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Link to="/">Home</Link>
      <Link to="/item">Item List</Link>
    </Box>
  );
}

export default Header;
