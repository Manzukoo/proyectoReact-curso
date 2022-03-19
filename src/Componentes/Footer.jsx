import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mx-5">
                <div className="col-md-4 d-flex align-items-center mx-5">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <i className="fs-2 bi bi-laptop"></i>
                    </a>
                    <span className="text-muted">© 2021 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-5">
                    <li className="ms-3"><a className="text-muted" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer"><i className="fs-3 bi bi-instagram"></i></a></li>
                    <li className="ms-3"><a className="text-muted" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer"><i className="fs-3 bi bi-facebook"></i></a></li>
                    <li className="ms-3"><a className="text-muted" href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer"><i className="fs-3 bi bi-whatsapp"></i></a></li>
                </ul>
            </footer>
        )
    }
}

export default Footer