import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

  class App extends Component {
    constructor(){
      super();

      this.state = {
        monsters: [],
        searchText: ''
      };
    }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

    render(){
      const { monsters, searchText } = this.state;
      const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchText.toLowerCase())
      )
      return (
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox 
            placeholder="Search Monster"
            handleChange={ this.handleChange }
          />
          <CardList monsters={filteredMonsters} />
        </div>
      );
    }
  }

export default App;
