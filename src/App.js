// import {Component} from 'react';
import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {

    // hooks
    const [searchField, setSearchField] = useState(''); // [value要儲存的值,setValue集合或函數]
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilterMonsters] = useState(monsters);

    console.log('render')

    // 副作用(類似componentDidMount，componentDidUpdate和componentWillUnmount)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonsters(users));
    },[]) // 在第一次渲染過後只執行一次

    // 過濾資料
    useEffect(()=>{
        const newFilteredMonsters = monsters.filter((monster)=>{
            return monster.name.toLocaleLowerCase().includes(searchField);
        })

        // console.log('newFilteredMonsters =>', newFilteredMonsters)
        setFilterMonsters(newFilteredMonsters);
    },[monsters, searchField]) // 當這兩個值被改變時，會執行副作用


    const onSearchChange = (event) =>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)

        // this.setState(()=>{
        //     return{ searchField };
        // })
    }


    return (
        <div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox 
                className='monsters-search-box' 
                placeholder='search monsters' 
                onChangeHandler={onSearchChange} 
            />

            <CardList monsters={filteredMonsters}/>
        </div>
    );
};

// class App extends Component {
//     constructor(){
//         super();
//         this.state={
//             monsters:[],
//             searchField:'',
//             // monsters:[
//             //     {
//             //         name: 'amy',
//             //     },
//             //     {
//             //         name: 'ken',
//             //     },
//             //     {
//             //         name: 'joe',
//             //     }
//             // ]
//             // :{firstName:'candy', lastName:'yeh'}
//         }
//     }

//     // 只運行一次 (第一次)
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((users) => 
//             this.setState(
//                 ()=>{
//                     return{ monsters: users };
//                 },
//                 ()=>{
//                     // callback 回傳已更新後的數據
//                     console.log('callback',this.state);
//                 }
//             )
//         );
//     }

//     onSearchChange = (event)=>{
//         console.log(event.target.value);
//         const searchField = event.target.value.toLocaleLowerCase();

//         // state值被修改，render會重新渲染
//         this.setState(
//             ()=>{
//                 return{ searchField };
//         })
//     }

//     render(){

//         const {monsters, searchField } = this.state
//         const {onSearchChange} = this

//         const filteredMonsters = monsters.filter((monster)=>{
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         })

//         return (
//             <div className="App">
//                 <h1 className='app-title'>Monsters Rolodex</h1>
//                 <SearchBox 
//                     className='monsters-search-box' 
//                     placeholder='search monsters' 
//                     onChangeHandler={onSearchChange} 
//                 />
//                 <CardList monsters={filteredMonsters}/>
//             </div>
//         );
//     }
// }

export default App;
