import ButtonCota from '../../components/ButtonCota';
import Cota from '../../components/Cota';

const cotas = {
  imobiliario: ['TVRI11', 'MXRF11', 'BTLG11', 'PORD11'],
  emprestimo: ['CDB', 'Tesouro Selic'],
  empresas: ['MGLU3', 'AMZO34', 'AMER3'],
  bancos: ['BBDC4', 'ITSA4', 'BBAS3', 'BCSA34']
};

const Home = () => {
  return (
    <div className="flex flex-1 flex-col items-center gap-5 bg-slate-100 rounded-xl h-96 ml-10 mr-10">
      <h2 className="font-mono pt-5">Cotações:</h2>
      <div className="flex gap-10">
        <Cota name="Imobiliário">
          {cotas.imobiliario.map((cota, index) => (
            <ButtonCota cota={cota} key={index} />
          ))}
        </Cota>
        <Cota name="Empréstimo">
          {cotas.emprestimo.map((cota, index) => (
            <ButtonCota cota={cota} key={index} />
          ))}
        </Cota>
        <Cota name="Empresas">
          {cotas.empresas.map((cota, index) => (
            <ButtonCota cota={cota} key={index} />
          ))}
        </Cota>
        <Cota name="Bancos">
          {cotas.bancos.map((cota, index) => (
            <ButtonCota cota={cota} key={index} />
          ))}
        </Cota>
      </div>
    </div>
  );
};

export default Home;
