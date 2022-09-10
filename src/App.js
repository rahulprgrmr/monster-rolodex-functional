import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    setFilteredMonsters(monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField)));
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        setSearchField(searchField);
      };

      // filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField));

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' placeholder='search monsters' onChangeHandler={onSearchChange}></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users};
//     }, () => console.log(this.state)));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     });
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField));
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox className='monsters-search-box' placeholder='search monsters' onChangeHandler={onSearchChange}></SearchBox>
//         <CardList monsters={filteredMonsters}></CardList>
//       </div>
//     );
//   }

//   changeName() {
//     this.setState({name:'Andrei'});
//   }
// }

export default App;
