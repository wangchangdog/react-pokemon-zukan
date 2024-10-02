// src/pages/PokemonDetail.tsx
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../api/pokemonDetail';
import PokemonTypeLabel from '../components/PokemonTypeLabel';
import { apiQueryKeys } from '../queryKeys';

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: [apiQueryKeys.pokemon.detail(Number(id))],
    queryFn: () => fetchPokemonDetail(Number(id)),
    enabled: !!id,
  });

  useEffect(() => {
    console.log(data);
  }, [data])

  if (isLoading) return <div>読み込み中...</div>;
  if (error instanceof Error) return <div>エラー: {error.message}</div>;
  if (!data) return <div>ポケモンが見つかりません</div>;

  return (
    <div className="p-4 max-w-[400px] m-auto">
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4">← 一覧に戻る</Link>
      <div className="mt-4 bg-white shadow-md rounded p-8 flex flex-col items-center gap-4">
        <img src={data.image} alt={data.japaneseName} className="w-40 h-40" />
        <h1 className="mt-4 text-2xl font-bold">{data.japaneseName} (#{data.id})</h1>
        <p className="mt-2 text-justify">{data.description}</p>
        <div className="grid grid-cols-2 gap-2">
          {data?.types?.map((type) => (
            <PokemonTypeLabel key={type} type={type} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 w-fit">
          {data?.abilities?.map((ability) => (
            <span key={ability}>{ability}</span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 w-fit">
          {data?.baseStats?.map((stat) => (
            <span key={stat.name}>{stat.name}: {stat.value}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        {/* 0は前へがないので非表示 */}
        {Number(id) !== 1 ? <Link to={`/pokemon/${Number(id) - 1}`} className="px-4 py-2 bg-blue-500 text-white rounded-md">前へ</Link> : <span />}
        <Link to={`/pokemon/${Number(id) + 1}`} className="px-4 py-2 bg-blue-500 text-white rounded-md">次へ</Link>
      </div>
    </div>
  );
};

export default PokemonDetail;
