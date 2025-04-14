import { Link } from 'react-router-dom'
import './header.css'
import veggieLogo from '../../assets/Images/veggiego_logo.png';
import '../../assets/css/style.css'

const Header = () => {
    return (
        <>
            <div className="header shadow-sm fix_style">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/" className="navbar-brand">
                            <img src={veggieLogo} alt="Logo" style={{ height: '50px' }} />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Default 1</a>
                                        <a className="dropdown-item" href="#">Default 2 Slider Hero</a>
                                        <a className="dropdown-item" href="#">Default 3 Center Hero</a>
                                        <a className="dropdown-item" href="#">Fitness</a>
                                        <a className="dropdown-item" href="#">Food Delivery 1</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About us
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to="/contact" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Blog 1</a>
                                        <a className="dropdown-item" href="#">Blog 2</a>
                                        <a className="dropdown-item" href="#">Blog 3</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Reviews
                                    </Link>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <div className='btn_block'>
                                        <Link to="/contact" className="nav-link btn_dark">
                                            Order Now
                                        </Link>
                                      
                                    </div>
                                   
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
