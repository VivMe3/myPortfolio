import React from 'react';
import '../scss/custom.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import About from './About';
// import Portfolio from '../pages/Portfolio';
// import HomePage from '../pages/HomePage';
// import GraphicDesign from '../pages/GraphicDesign';


const NavItem = (props) => {
    if ((props.path).includes('#')) {
        return (
            <li className="nav-item active">
                <HashLink className="nav-link" smooth={true} to={props.path}>{props.name}
                </HashLink>
            </li>
        );
    }
    if ((props.path) === ('/')) {
        return (
            <li className="nav-item active">
                <Link className="nav-link" to={props.path} onClick={() => window.scrollTo(0, 0)}>{props.name}
                </Link>
            </li>
        )
    }
    return (
        <li className="nav-item active">
            <Link className="nav-link" to={props.path}>{props.name}
            </Link>
        </li>
    );
}

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        &nbsp; <img src="./imgs/vd.png" height="40" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end text-right" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <NavItem path="/" name="HOME"></NavItem>
                            <NavItem path="/#About" name="ABOUT"></NavItem>
                            <NavItem path="/portfolio" name="PORTFOLIO"></NavItem>
                            <NavItem path="/#Contact" name="CONTACT"></NavItem>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Navigation;