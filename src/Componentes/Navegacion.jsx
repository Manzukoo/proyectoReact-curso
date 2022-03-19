import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Action</a></li>
                                    <li><a className="dropdown-item" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Another action</a></li>
                                    <li><a className="dropdown-item" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar