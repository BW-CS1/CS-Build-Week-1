import React, {Component} from 'react';
import axios from 'axios';
import Login from "./auth/Login";
import Registration from "./auth/Registration";

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleAuth = this.handleAuth.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }
    handleAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }
    handleLogoutClick() {
        axios
            .delete()
    }
    render() {
        return (
            <div>
                <Login handleAuth={this.handleAuth} />
                <Registration handleAuth={this.handleAuth} />
            </div>
        );
    }
}

export default Home;