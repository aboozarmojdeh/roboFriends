import React from 'react';
import './App.css';
import CardList from './CardList';
import Scroll from './Scroll';
// import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }

        console.log('constructor')
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        console.log('componentDidMount')
    };


    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        });

        console.log(event.target.value)
        console.log('search field', this.state.searchField)
    };



    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return (
                robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            )
        });
        console.log('render')
        return (
            <div className='tc'>

                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                <h1 className='f1'>ROBOFRIENDS</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }




};

export default App;