import Cota from '../../components/Cota';

import { Box, Button } from '@mui/material';

const Home = () => {
  return (
    <Box className="flex flex-1 flex-col items-center gap-5 bg-slate-100 rounded-xl h-96 ml-10 mr-10">
      <h2 className="font-mono pt-5">Cotações:</h2>
      <Box className="flex gap-10">
        <Cota name="Imobiliário">
          <Button variant="contained">TVRI11</Button>
          <Button variant="contained">Mxrf11</Button>
          <Button variant="contained">BTLG11</Button>
          <Button variant="contained">PORD11</Button>
        </Cota>
        <Cota name="Empréstimo">
          <Button variant="contained">CDB</Button>
          <Button variant="contained">Tesouro Selic</Button>
        </Cota>
        <Cota name="Empresas">
          <Button variant="contained">MGLU3</Button>
          <Button variant="contained">AMZO34</Button>
          <Button variant="contained">AMER3</Button>
        </Cota>
        <Cota name="Bancos">
          <Button variant="contained">BBDC4</Button>
          <Button variant="contained">ITSA4</Button>
          <Button variant="contained">BBAS3</Button>
          <Button variant="contained">BCSA34</Button>
        </Cota>
      </Box>
    </Box>
  );
};

export default Home;
