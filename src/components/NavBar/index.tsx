import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Business, Home, Phone } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

function NavBar() {
  const [value, setValue] = React.useState('home');

  const navigate = useNavigate();

  return (
    <header className="flex flex-1 justify-between p-7 items-center">
      <h1 className="font-mono font-extrabold">Bank Invest</h1>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
          className="flex flex-1 justify-around p-7 items-center ml-14"
        >
          <BottomNavigationAction
            label="Home"
            icon={<Home />}
            onClick={() => navigate('/')}
          />
          <BottomNavigationAction
            label="Sobre Nós"
            icon={<Business />}
            onClick={() => navigate('/sobre')}
          />
          <BottomNavigationAction
            label="Contato"
            icon={<Phone />}
            onClick={() => navigate('/contato')}
          />
        </BottomNavigation>
      </Box>
    </header>
  );
}

export default NavBar;
