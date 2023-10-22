// Components
import React, { Component } from 'react';

import Cardlist from '../components/cardList';
import Searchbar from '../components/Searchbar';
import Scroll   from '../components/Scroll';

import ErrorBoundry from '../components/errorBoundery';

import './App.css';




class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (e) =>{
       this.setState({searchfield : e.target.value})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({robots : users}));
    }

    render() {
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robots => {
            
            return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
           })
        return !robots.length ? 
                <h1>Loding</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>Robofriend</h1>

                 <Searchbar searchChange={this.onSearchChange}/>
                <Scroll>
                    <errorBoundery>
                        <Cardlist  robots={filteredRobots}/>
                    </errorBoundery>
                </Scroll>
            </div>
        );

    }
}
export default App;