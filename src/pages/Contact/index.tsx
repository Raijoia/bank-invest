import { Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const Contact = () => {
  const sociais = [
    {
      link: 'https://github.com/Raijoia',
      name: 'GitHub',
      id: uuidv4()
    },
    {
      link: 'https://www.linkedin.com/in/raijoia/',
      name: 'Linkedin',
      id: uuidv4()
    },
    {
      link: 'https://api.whatsapp.com/send?phone=5511977733585',
      name: 'WhatsApp',
      id: uuidv4()
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-5 lg:gap-10 mt-5">
        {sociais.map((social, index) => (
          <Button variant="contained" key={index}>
            <a href={social.link} target="_blank" rel="noreferrer">
              {social.name}
            </a>
          </Button>
        ))}
      </div>
      <div>
        <p className="text-center mt-10">
          <span className="font-bold">E-mail:</span>
        </p>
        <p className="text-center">
          <a href="mailto:raijoiamv@gmail.com" target="_blank" rel="noreferrer">
            raijoiamv@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
