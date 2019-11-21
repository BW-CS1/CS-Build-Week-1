import React, {Component} from 'react';
import axios from "axios"

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password1: "",
            password2: "",
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
        const { username, password1, password2 } = this.state;

        axios
            .post(
                'http://127.0.0.1:8000/api/registration/',
                {
                    username: username,
                    password1: password1,
                    password2: password2
                },
                { withCredentials: true }
            )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log("error reg", err)
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
                        required
                    />
                    <input
                        type="password"
                        name="password1"
                        placeholder="Password"
                        value={this.state.password1}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password2"
                        placeholder="Password Again"
                        value={this.state.password2}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Registration;