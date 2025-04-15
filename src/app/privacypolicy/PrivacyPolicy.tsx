import { Link } from 'react-router-dom';
import './privacypolicy.css';
import support from "../assets/Images/support.png"

const PrivacyPolicy = () => {
    return (
        <>
            <div className="main">
                <div className="policy_section">
                    <h1>Privacy Policy</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className="support_section">
                    <div className="container">
                        <div className="support_box">
                            <div className="col-md-6">
                                <div className="support_title">
                                    <img src={support} className="icon_customer" />
                                    <h3>Need support ?</h3>
                                    <p>Need support ? contact us now !</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="btn_block_support">
                                    <Link
                                        to="/"
                                        className="call_btn text-decoration-none fs-18"
                                    >
                                        Call us now
                                    </Link>
                                    <Link
                                        to="/"
                                        className="email_btn text-decoration-none fs-18"
                                    >
                                        Email us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PrivacyPolicy
