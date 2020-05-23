import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list'
import {SearchBox} from './components/search-box/search-box'


class App extends Component{
  constructor(){
    super();

    this.state = {  
      monsters:[],
      searchField: ''
    }
  }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then( user => this.setState ({ monsters: user }))
    }


  
render(){ 

  const { monsters, searchField} = this.state;
  const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase() )
      );


  return (
    <div className="App">
    <h1>Monsters Lookup</h1>
    <SearchBox placeholder='Search for Monsters' handleChange ={ e =>  
      this.setState( {searchField: e.target.value } )   } />
    <CardList monsters= {filteredMonsters}>
    </CardList>
    </div>
  );
}
}
export default App;