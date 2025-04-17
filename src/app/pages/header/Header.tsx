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
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        About us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Pages
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="/#reviews" className="nav-link">
                                        Reviews
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <div className='btn_block'>
                                        <Link to="/" className="nav-link btn_dark">
                                            Download Now
                                        </Link>
                                      
                                    </div>                                   
                                </li> */}
                            </ul>
                        </div>
                        <div className="d-none d-lg-block ms-auto">
                            <Link to="/" className="nav-link btn_dark">Download Now</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
