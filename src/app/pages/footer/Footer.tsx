import { Link } from "react-router-dom";
import "./footer.css";
import veggieLogo from "../../assets/Images/veggiego_footer.png";
import googlePlay from "../../assets/Images/googleplay.png";
import appStore from "../../assets/Images/appstore.png";

const Footer = () => {
  return (
    <>
      <div className="text-light footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="about text-start">
                <div className="logo_footer">
                  <img src={veggieLogo} style={{ height: "50px" }} />
                </div>
                <p>
                  Enjoy fast and reliable delivery of the best fruits and
                  vegetables. We bring farm-fresh produce straight to your
                  doorstep. Quality you Enjoy fast and reliable delivery of the
                  best fruits and vegetables.
                </p>
                <div className="app-btn d-flex">
                  <li>
                    <Link to="/">
                      <img src={appStore} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={googlePlay} />
                    </Link>
                  </li>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="links text-start">
                <h5>Support</h5>
                <ul>
                  <li>
                    <Link to="/" className="">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="">
                      Youtube
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="">
                      Pinterest
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="">
                      Email
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="links text-start">
                <h5>Subscribe us</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="text-start">
                  © Copyrights 2024. All rights reserved.
                </p>
              </div>

              <div className="col-md-6">
                <p className="text-end">
                  Design & developed by Swapac Infotech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
