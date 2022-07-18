/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";

const Header = () => {


    return (
    
        <nav className="navbar  sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">PLANETS</Link>
                <button className="navbar-toggler bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                       <li className="nav-item">
                            <Link className="nav-link active link" to="/Mercury">MERCURY</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active link1" to="/Venus">VENUS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active link3" to="/Earth">EARTH</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active link4" to="/Mars">MARS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active link5" to="/Jupiter">JUPITER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active link6" to="/Saturn">SATURN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active link7" to="/Uranus">URANUS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active link8" to="/Neptune">NEPTUNE</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );

}
export default Header