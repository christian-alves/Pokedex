import React from 'react';
import './App.css';
import Header from './components/Header'
import PokeCard from './components/PokeCard'

  
class App extends React.Component{
  constructor(props){
    super(props);
    this.handleChange= this.handleChange.bind(this);
    this.getPokemon = this.getPokemon.bind(this);

    this.state = {
      pokemon: ''
    };
  }

  async getPokemon(e) {
    e.preventDefault();
     const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`
      );
      const pokemon = await res.json();
      this.setState({
        pokemon: pokemon
      })
  }

  handleChange(e){
   this.setState({
     pokemon: e.target.value
    });
  }


  render(){
    console.log(this.state.pokemon);

  return (
    <div className="App">
      <Header/>
        <div className="containerinput">
          <form className="inputcenter" onSubmit={this.getPokemon}>
            <input type="text" placeholder="Digite seu pokémon"
            onChange={this.handleChange}/>        
          </form>
        </div>
      <PokeCard 
      iconsrc={this.state.pokemon.sprites? this.state.pokemon.sprites.front_default: ''}
      name={this.state.pokemon.name}
      height={this.state.pokemon.height}
      weight={this.state.pokemon.weight}
      />
    </div>
  );
}
}

export default App;
