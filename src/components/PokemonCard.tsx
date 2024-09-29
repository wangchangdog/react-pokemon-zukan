// src/components/PokemonCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

type Pokemon = {
  name: string;
  url: string;
  japaneseName: string;
};

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link to={`/pokemon/${id}`}>
      <div className="bg-white shadow-md rounded p-4 flex flex-col items-center hover:shadow-xl transition-shadow">
        <img src={imageUrl} alt={pokemon.japaneseName} className="w-20 h-20" />
        <h2 className="mt-2 text-lg font-semibold">{pokemon.japaneseName}</h2>
      </div>
    </Link>
  );
};

export default PokemonCard;
