import { Link } from 'react-router-dom'
import './footer.css'
import veggieLogo from '../../assets/Images/veggiego_footer.png';
import googlePlay from '../../assets/Images/googleplay.png';
import appStore from '../../assets/Images/appstore.png';

const Footer = () => {
    return (
        <>
            <div className="bg-dark text-light footer">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-5 col-md-6 col-12'>
                            <div className='about text-start'>
                                <div className='logo_footer'>
                                    <img src={veggieLogo} style={{ height: "50px" }} />
                                </div>
                                <p>
                                Enjoy fast and reliable delivery of the best fruits and vegetables. We bring farm-fresh produce straight to your doorstep. Quality you Enjoy fast and reliable delivery of the best fruits and vegetables.
                                </p>
                                <div className='app-btn d-flex'>
                                    <li>
                                        <Link to='/'>
                                            <img src={appStore} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <img src={googlePlay} />
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-6 col-12'>
                            <div className='links text-start'>
                                <h5 className=''>Quick Links</h5>
                                <ul>
                                    <li>
                                        <Link to='/' className=''>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className=''>About us</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className=''>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className=''>Blog</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className=''>Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-6 col-12'>
                            <div className='links text-start'>
                                <h5>Support</h5>
                                <ul>
                                    <li>
                                        <Link to='/' className=''>FAQs</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className=''>Support</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className=''>How it works</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className=''>Terms & conditions</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className=''>Privacy policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='links text-start'>
                                <h5>Subscribe us</h5>
                            </div>
                            <div className='news text-start'>
                                <p>Subscribe our newsleter to receive latest updates regularly from us!</p>
                                <div className='form-group position-relative'>
                                    <input type='email'
                                        className='form-control'
                                        placeholder='Enter your email'
                                    />
                                    <button className='btn btn-email'>
                                        <i className="fas fa-paper-plane text-white"></i>
                                    </button>
                                </div>
                                <div className='note'>By clicking send link you agree to receive message.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <p className='text-start'>© Copyrights 2024. All rights reserved.</p>
                            </div>
                            <div className='col-md-4'>
                                <ul className='social-media-icons d-flex gap-3 justify-content-center'>
                                    <li>
                                        <Link to='/' className='icon-social'>
                                            <i className="fa-brands fa-facebook-f text-white"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='icon-social'>
                                            <i className="fa-brands fa-x-twitter text-white"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='icon-social'>
                                            <i className="fa-brands fa-instagram text-white"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='icon-social'>
                                            <i className="fa-brands fa-pinterest text-white"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-4'>
                                <p className='text-end'>Design & developed by Swapac Infotech</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
