import type { CotaProps } from '../../interface/interfaces';

const Cota = ({ children, name }: CotaProps) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-mono">{name}:</p>
      {children}
    </div>
  );
};

export default Cota;
