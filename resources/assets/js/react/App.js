import React, { Component } from 'react';

import './App.css';
import Home from './Gui/Welcome/Home';
import Menu from './Gui/Welcome/Menu';
import Signup from './Gui/Welcome/Signup'
import GameApp from './Gui/Map/GameApp'

import Axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: "home",
      login: false,
      user: {}
    }
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    Axios.get('/getUser').then( (raw_data)=> {
      const data = raw_data.data
      
      if(data!=="Guest") {
        this.setState({ page : "menu" ,login: true, user: data})
      }
    } ).catch()
  }

  changePage(page, login) {
    this.setState({
      page: page,
      login: login
    });
  }
  
  render() {
    return (
      <div style={{
        width: `100%`,
        height: `100%`,
        clip: 'auto',
        position: 'absolute',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(to right, #adefff, white)'
      }}>
        {this.state.page === "home" && <Home changePage={this.changePage} />}
        {this.state.page === "menu" && <Menu changePage={this.changePage} login={this.state.login} user={this.state.user}/>}
        {this.state.page === "signup" && <Signup changePage={this.changePage} />}
        {this.state.page === "game" && <GameApp />}
      </div>
    );
  }
}

export default App;
