import React, {Component} from 'react';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        const { username, password } = this.state;
        axios
            .post(
                'http://127.0.0.1:8000/api/login/',
                {
                    username: username,
                    password: password
                },
                { withCredentials: true }
                )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log("error login", err)
            });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;