import React from 'react'
import './Signup.css'

class Signup extends React.Component {
    // TODO check same password with comfirmed password

    render() {
        return (
            <div className="signup">
                <h1>FLAPPY BIRD</h1>
                <h2>Sign up</h2>
                <form method="POST" action="https://flappylaravel.herokuapp.com/register">
                <input id="name" type="text" className="textfield" name="name" placeholder="Name" required autofocus/>
                <input id="email" type="email" className="textfield" name="email" placeholder="Email" required/>
                <input id="password" type="password" className="textfield" name="password" placeholder="Password" required/>
                <input id="password-confirm" type="password" className="textfield" name="password_confirmation" placeholder="Confirm Password" required/>
                <button type="submit">Sign up</button>
                </form>
                <button style={{background: 'darkgrey'}} onClick={ () => this.props.changePage('home')}>Cancel</button>
            </div>
        );
    }
}

export default Signup