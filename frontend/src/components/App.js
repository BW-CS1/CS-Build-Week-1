import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Dashboard from './Dashboard';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            loggedIn: false,
            user: {}
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route
                            exact path={"/"}
                            render={props => (
                                <Home
                                    {...props}
                                    handleLogin={this.handleLogin}
                                    handleLogout={this.handleLogout}
                                    loggedIn={this.state.loggedIn}
                                />
                            )}
                        />
                        <Route
                            exact path={"/dashboard"}
                            render={props => (
                                <Dashboard
                                    {...props}
                                    loggedIn={this.state.loggedIn}
                                />
                            )}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))