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
      pokemon: '',
      types: [],
      isSearched:false,
    };
  }

  async getPokemon(e) {
    e.preventDefault();
     const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`
      );
      const pokemon = await res.json();
      this.setState({
        pokemon: pokemon,
        isSearched:true
      })
  }

  handleChange(e){
   this.setState({
     pokemon: e.target.value,
     isSearched: false
    });
  }

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  render(){
    let types = this.state.pokemon.types.map((item, key) =>
    <li key={item.id}>{item.name}</li>
    );
    console.log(this.state.pokemon);
    const isSearched = this.state.isSearched
    let Pokecard;
    if(isSearched){
      Pokecard = 
      <PokeCard
      iconsrc={this.state.pokemon.sprites ? this.state.pokemon.sprites.front_default: ''}
      name={this.Capitalize(this.state.pokemon.name)}
      height={this.state.pokemon.height}
      weight={this.state.pokemon.weight}
      elements={types}
      />;

    }else{
      Pokecard = null;
    }
  return (
    <div className="App">
      <Header/>
        <div className="containerinput">
          <form className="inputcenter" onSubmit={this.getPokemon}>
            <input type="text" placeholder="Digite seu pokémon"
            onChange={this.handleChange}/>        
          </form>
        </div>
      {Pokecard}
    </div>
  );
}
}

export default App;
