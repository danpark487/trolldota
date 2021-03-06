import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderLoginSignup = this.renderLoginSignup.bind(this);
        this.renderLogout = this.renderLogout.bind(this);
    }

    render() {
        return (
            <nav className="navbar navbar-default" id="navbar">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" />
                        <Link className="navbar-brand" to={'/'}>trollDota</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/watchlist">WATCHLIST <span className="sr-only">(current)</span></Link></li>
                            <li><Link to="/">Link</Link></li>
                        </ul>

                        {this.props.currentUser ? this.renderLogout() : this.renderLoginSignup()}

                    </div>
                </div>
            </nav>
        );
    }

    renderLogout() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><a onClick={this.props.loggingOut}>LOGOUT {this.props.currentUser.username}</a></li>
            </ul>
        );
    }

    renderLoginSignup() {
        return (
            <div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a onClick={this.props.showSignupMenu}>SIGNUP</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a onClick={this.props.showLoginMenu}>LOGIN</a></li>
                </ul>
            </div>
        );
    }
}
