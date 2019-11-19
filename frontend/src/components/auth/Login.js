import React, {Component} from 'react';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
                'localhost:8000/api/login/',
                {
                    user: {
                        username: username,
                        password: password
                    }
                }
             )
            .then()
            .catch()
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