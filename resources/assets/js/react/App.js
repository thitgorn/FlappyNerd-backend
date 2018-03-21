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
      user: {},
      isLoad: false,
    }
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    Axios.get('/getUser').then( (raw_data)=> {
      const data = raw_data.data
      
      if(data!=="Guest") {
        this.setState({ page : "menu" ,login: true, user: data})
      }
      this.setState( { isLoad : true })
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
      <div>
          <div>
          { !this.state.isLoad && <div style={{ position: 'fixed',
                                                top: `50%`,
                                                left: `50%`,
                                                /* bring your own prefixes */
                                                transform: 'translate(-50%, -50%)'}}>หมุนๆ</div>}
          { this.state.isLoad &&
            <div style={{ background: 'linear-gradient(to right, #adeefe, white)'}}>
              {this.state.page === "home" && <Home changePage={this.changePage} />}
              {this.state.page === "menu" && <Menu changePage={this.changePage} login={this.state.login} user={this.state.user}/>}
              {this.state.page === "signup" && <Signup changePage={this.changePage} />}
              {this.state.page === "game" && <GameApp />}
            </div>
          }
          </div>


      </div>
    );
  }
}

export default App;
