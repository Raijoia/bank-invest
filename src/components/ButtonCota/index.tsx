import { Button } from '@mui/material';

interface ButtonCotaProps {
  cota: string;
}

const ButtonCota = ({ cota }: ButtonCotaProps) => {
  return (
    <Button variant="contained">
      <a
        href={`https://www.google.com/search?client=opera-gx&q=${cota}&sourceid=opera&ie=UTF-8&oe=UTF-8`}
        target="_blank"
        rel="noreferrer"
      >
        {cota}
      </a>
    </Button>
  );
};

export default ButtonCota;
