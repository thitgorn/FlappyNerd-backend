import React from 'react';
import './Home.css';

var smallBtn = { width: '100px', padding: '6px', marginLeft: '1em', fontSize: '16px', background: 'pink' };
var or = {display: 'flex', fontWeight: 'bold', marginTop: '3em', marginBottom: '2em'};

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <h1>FLAPPY BIRD</h1>
                <form method="POST" action="https://flappylaravel.herokuapp.com/login">
                    <input id="email" type="email" name="email" placeholder="Username" className="textfield" required autoFocus/>
                    <input id="password" type="password" name="password" placeholder="Password" className="textfield" type="password" required/>
                    <label>
                            <input type="checkbox" name="remember" /> Remember Me
                    </label>
                    <button type="submit"  className="button">Login</button>
                </form>
                    <div>
                        Don't have an account ?
                            <button  style={smallBtn} onClick={ () => this.props.changePage("signup") } disabled>Sign up</button>
                    </div>
                    <div style={or}>
                        <hr style={{width: '100px'}}/>OR<hr style={{width: '100px'}}/> 
                    </div>
                <button onClick={ () => this.props.changePage("menu", false) }>GUEST &nbsp;&nbsp;Login</button>

            </div>
        );
    }
}
export default Home;