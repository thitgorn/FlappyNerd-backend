import React from 'react'
import './Signup.css'

class Signup extends React.Component {
    // TODO check same password with comfirmed password
    constructor() {
        super()
        this.state = {
            isMatch : false,
            passwordValue : '',
            confirmPasswordValue : '',
        }
        this.updateConfirmPasswordValue = this.updateConfirmPasswordValue.bind(this)
        this.updatePasswordValue = this.updatePasswordValue.bind(this)
    }

    updateConfirmPasswordValue(evt) {
        this.setState({
            confirmPasswordValue: evt.target.value
        });
    }

    updatePasswordValue(evt) {
        this.setState({
            passwordValue: evt.target.value
        });
    }

    getSignUpBtn() {
        if(this.state.passwordValue === this.state.confirmPasswordValue) {
            return (<button type="submit">Sign up</button>)
        }
        return (<button type="submit" style={{
            fontWeight: 'bold',
            fontSize: '20px',
            color: '#ceffff',
            border: '0',
            padding: '12px',
            width: '300px',
            background: 'grey',
        }} disabled>Sign up</button>)
    }

    render() {
        return (
            <div className="signup">
                <h1>FLAPPY BIRD</h1>
                <form method="POST" action="/register">
                <input id="name" type="text" className="textfield" name="name" placeholder="Name" required autofocus/>
                <input id="email" type="email" className="textfield" name="email" placeholder="Email" required/>
                <input value={this.state.passwordValue} onChange={this.updatePasswordValue} id="password" type="password" className="textfield" name="password" placeholder="Password" required/>
                <input value={this.state.confirmPasswordValue} onChange={this.updateConfirmPasswordValue} id="password-confirm" type="password" className="textfield" name="password_confirmation" placeholder="Confirm Password" required/>
                {this.getSignUpBtn()}
                </form>
                <button style={{background: 'darkgrey'}} onClick={ () => this.props.changePage('home')}>Cancel</button>
            </div>
        );
    }
}

export default Signup