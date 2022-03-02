import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isEmailValid: false,
            password: '',
            isPasswordValid: false,
            isSubmit: false
        }
        this.onInputEmailHandler = this.onInputEmailHandler.bind(this);
    }


    onInputEmailHandler(e) {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValid = regex.test(e.target.value);
        this.setState({
            email: e.target.value,
            isEmailValid: isValid
        })
    }

    onInputPasswordHandler = (e) => {
        let value = e.target.value;
        let isValid = false;
        if (value.length > 6) {
            isValid = true;
        }
        this.setState({
            password: value,
            isPasswordValid: isValid,
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({
            isSubmit: true
        })
    }


    render() {
        if (this.state.isSubmit === true) {
            return <h1>Form is submitted</h1>
        } else {
            return (
                <> 
                    <div className="container">
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input onInput={this.onInputEmailHandler} value={this.state.email} type="email" className={
                                    this.state.isEmailValid ? "form-control is-valid" : "form-control is-invalid"
                                } id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input onInput={this.onInputPasswordHandler} value={this.state.password} type="password" className={
                                    this.state.isPasswordValid ? "form-control is-valid" : "form-control is-invalid"
                                } id="password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberme" />
                                <label className="form-check-label" htmlFor="rememberme">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </>
            );
        }
    }
}