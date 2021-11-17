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
        // dateValue: 20
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
  // Asynchronous setState
  // handleClick = () => {
  //   this.setState((prevState, prevProps) => {
  //     return {dateValue: prevState.dateValue + 1}
  //   },
  //     () => console.log(this.state.dateValue)
  //   )
  // }

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

          {/* Testing the Asynchronous setState */}
          {/* <a>{this.state.dateValue}</a>
          <button onClick={this.handleClick}>Update value</button> */}

        </div>
      );
    }
  }

export default App;
