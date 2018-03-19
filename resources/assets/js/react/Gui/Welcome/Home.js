import React from 'react';
import './Home.css';

var smallBtn = { width: '100px', padding: '6px', marginLeft: '1em', fontSize: '16px', background: 'pink' };
var or = {display: 'flex', fontWeight: 'bold', marginTop: '3em', marginBottom: '2em'};

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <h1>FLAPPY BIRD</h1>
                <input placeholder="Username" className="textfield" />
                <input placeholder="Password" className="textfield" type="password" />
                <a href="/login"><button className="button">Login</button></a>
                {/* <button className="button" onClick={ () => this.props.changePage("menu", true)}>Login</button> */}
                <div>
                    Don't have an account ?
                        <a href="/register"><button style={smallBtn}>Sign up</button></a>
                </div>
                <div style={or}>
                    <hr style={{width: '100px'}}/>OR<hr style={{width: '100px'}}/> 
                </div>
                <button onClick={ () => this.props.changePage("menu", false) }>GUEST</button>
            </div>
        );
    }
}

export default Home;