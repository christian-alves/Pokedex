import React from 'react';

// import { Container } from './styles';

export default function PokeCard(props) {
  return (
    <div className="container">
    <div className="pokecard">
      <img src={props.iconsrc} alt="icon"/>
      <h1>Nome :{props.name}</h1>
      <h2>Altura :{props.height}</h2>
      <h2>Peso :{props.weight}</h2>
    </div>
    </div>
  );
}
