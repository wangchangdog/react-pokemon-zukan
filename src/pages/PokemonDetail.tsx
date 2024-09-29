// src/pages/PokemonDetail.tsx
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../api/pokemonDetail';
import { apiQueryKeys } from '../queryKeys';

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: [apiQueryKeys.pokemon.detail(Number(id))],
    queryFn: () => fetchPokemonDetail(Number(id)),
    enabled: !!id,
  });


  if (isLoading) return <div>読み込み中...</div>;
  if (error instanceof Error) return <div>エラー: {error.message}</div>;
  if (!data) return <div>ポケモンが見つかりません</div>;

  return (
    <div className="p-4">
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4">← 一覧に戻る</Link>
      <div className="mt-4 bg-white shadow-md rounded p-6 flex flex-col items-center ">
        <img src={data.image} alt={data.japaneseName} className="w-40 h-40" />
        <h1 className="mt-4 text-2xl font-bold">{data.japaneseName} (#{data.id})</h1>
        <p className="mt-2 text-center">{data.description}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <Link to={`/pokemon/${Number(id) - 1}`} className="px-4 py-2 bg-blue-500 text-white rounded-md">前へ</Link>
        <Link to={`/pokemon/${Number(id) + 1}`} className="px-4 py-2 bg-blue-500 text-white rounded-md">次へ</Link>
      </div>
    </div>
  );
};

export default PokemonDetail;
