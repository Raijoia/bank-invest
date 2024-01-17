const About = () => {
  const techs = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Angular',
    'TailwindCSS',
    'SCSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQl',
    'Java',
    'SpringBoot',
    'Git'
  ];

  return (
    <div className="flex flex-col items-center mt-5 ml-10 mr-10 gap-5">
      <h2 className="font-extrabold font-mono text-3xl">Sobre:</h2>
      <p className="font-mono text-center">
        Sou um desenvolvedor fullstack, projeto foi pensado como um site para
        que investidores possam acompanhar o valor das ações da bolsa de valores
        em que estão aplicando.
      </p>
      <p className="font-mono text-center">
        Tecnologias:{' '}
        <b>
          {techs.map((tech, index) => (
            <span key={index}>{tech}, </span>
          ))}
        </b>
      </p>
    </div>
  );
};

export default About;
