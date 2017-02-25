import React from 'react';
import { Link } from 'react-router';

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-default" id="navbar">
            <div className="container-fluid">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" />
                    <Link className="navbar-brand" to={'/'}>trollDota</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to={'/watchlist'}>WATCHLIST <span className="sr-only">(current)</span></Link></li>
                        <li><a href="#">Link</a></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li><a onClick={props.showLoginMenu}>LOGIN</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
