import React from "react";
import {Link} from "react-router-dom";

export const Layout = ({children}) => {

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active mr-4">
                    <Link to="/">Register</Link>
                    </li>
                    <li className="nav-item mr-4">
                    <Link to="/AuthUser">Auth</Link>
                    </li>

                    </ul>
                </div>
            </nav>
            {children}
        </div>
    )
}