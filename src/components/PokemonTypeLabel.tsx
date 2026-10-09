// ポケモンのタイプのラベル
import { pokemonTypesMap } from '../pokemonTypesMap';

type PokemonTypeLabelProps = {
  type: string;
};

const PokemonTypeLabel: React.FC<PokemonTypeLabelProps> = ({ type }) => {
  const typeInfo = pokemonTypesMap.find((t) => t.jaType === type || t.type === type);
  return (
    <span 
      style={{
        backgroundColor: typeInfo?.color ?? '#6b7280',
      }}
      key={type}
      className={`text-white px-3 py-1 rounded-full w-fit`}
    >
      {typeInfo?.jaType ?? type}
    </span>
  );
};

export default PokemonTypeLabel;
