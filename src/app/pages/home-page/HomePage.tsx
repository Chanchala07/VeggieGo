import { Link } from 'react-router-dom';
import './homePage.css';
import clockWhite from '../../assets/Images/clock-white.png'
import veggies from '../../assets/Images/cat2.png';
import smiley from '../../assets/Images/smiley.png';
import user from '../../assets/Images/user.png'
import bagIcon from '../../assets/Images/bag-icon 2.png';
import star from '../../assets/Images/start.png'
import capsicum from '../../assets/Images/capsicum.png';
import veggies_left from '../../assets/Images/vegeis_left.png'
import '../../assets/css/style.css';
import googlePlay from '../../assets/Images/googleplay.png';
import appStore from '../../assets/Images/appstore.png';
import device from '../../assets/Images/Mockup 1.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import mobileImage from '../../assets/Images/mobile.png';
import tickCircle from '../../assets/Images/tick-circle.png';

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);
  const vegetables = [
    { name: "Apple", image: veggies },
    { name: "Strawberry", image: veggies },
    { name: "Orange", image: veggies },
    { name: "Tomato", image: veggies },
    { name: "Apple", image: veggies },
    { name: "Strawberry", image: veggies },
    { name: "Orange", image: veggies },
    { name: "Tomato", image: veggies },

  ];

  return (
    <>
      <div className='main'>
        <div className='banner_section'>

        </div>
        <div className='page_wrapper'>
          <div className='up_section'>
            <div className='blur_section bs_1'></div>
            <div className='blur_section bs_2'></div>
            <div className='inner_section'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-3 col-sm-6 col-md-6'>
                    <div className='box'>
                      <div className='box_icon'>
                        <img src={smiley} />
                      </div>
                      <div className='box_text'>
                        <span className='counter_value'>5000</span>
                        <span className='plus'>+</span>
                        <p className='mb-0'>Happy Users</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6 col-md-6'>
                    <div className='box'>
                      <div className='box_icon'>
                        <img src={star} />
                      </div>
                      <div className='box_text'>
                        <span className='counter_value'>1879</span>
                        <span className='plus'>+</span>
                        <p className='mb-0'>Positive Reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6 col-md-6'>
                    <div className='box'>
                      <div className='box_icon'>
                        <img src={user} />
                      </div>
                      <div className='box_text'>
                        <span className='counter_value'>3855</span>
                        <span className='plus'>+</span>
                        <p className='mb-0'>Restaurant Listings</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6 col-md-6'>
                    <div className='box'>
                      <div className='box_icon'>
                        <img src={bagIcon} />
                      </div>
                      <div className='box_text'>
                        <span className='counter_value' data-count='5000'>985M</span>
                        <span className='plus'>+</span>
                        <p className='mb-0'>Successful deliveries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='new_section'>
            <div className='new_section_inner'>
              <div className='container'>
                <div className='row'>
                  <div className='section_title'>
                    <span className='title_badge'>Why use VeggieGo</span>
                    <h2 className='title'>Why choose us</h2>
                    <p className='sub_title'>Enjoy fast and reliable delivery of the best fruits and vegetables.We bring farm-fresh produce straight to your doorstep.</p>
                  </div>
                  <div className='box_section'>
                    <div className='col-lg-6 col-md-12'>
                      <div className='new_data' aos-init aos-animate data-aos="fade-up" data-aos-duration="1500">
                        <div className='new_data_block'>
                          <div className='new_icon'>
                            <img src={clockWhite} />
                          </div>
                          <div className='new_text'>
                            <h6 className='fs-18'>Delivery in 30 min</h6>
                            <p className='mb-0'>Get your favorite meals delivered fresh and fast to your door in just 30 minutes! Enjoy the convenience!</p>
                          </div>
                        </div>
                      </div>
                      <div className='new_data' aos-init aos-animate data-aos="fade-right" data-aos-duration="1500">
                        <div className='new_data_block'>
                          <div className='new_icon'>
                            <img src={clockWhite} />
                          </div>
                          <div className='new_text'>
                            <h6 className='fs-18'>Quality Produce</h6>
                            <p className='mb-0'>Get your favorite meals delivered fresh and fast to your door in just 30 minutes! Enjoy the convenience!</p>
                          </div>
                        </div>
                      </div>
                      <div className='new_data' aos-init aos-animate data-aos="fade-up" data-aos-duration="1500">
                        <div className='new_data_block'>
                          <div className='new_icon'>
                            <img src={clockWhite} />
                          </div>
                          <div className='new_text'>
                            <h6 className='fs-18'>Live Vegetables Check </h6>
                            <p className='mb-0'>Get your favorite meals delivered fresh and fast to your door in just 30 minutes! Enjoy the convenience!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                      {/* <div className='new_image'>
                        <img src={capsicum}/>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row_am service_section'>
            <div className='container'>
              <div className='section_title'>
                <h2 className='title'>Advanced features</h2>
                <p className='adv_title'>Enjoy fast and reliable delivery of the best fruits and vegetables. We bring farm-fresh
                  produce straight to your doorstep. Quality you
                </p>
              </div>
              <div className='row service_block flex-row-reverse'>
                <div className='col-md-6'>
                  <div className='service_text'>
                    <h3 >Effortless management of vendors operations</h3>

                    <p className='text-start'>Enjoy fast and reliable delivery of the best fruits and
                      vegetables. We bring farm-fresh produce straight to
                      your doorstep. Quality you.
                    </p>
                    <ul className='design_block'>
                      <li>
                        <div className='d-flex gap-2'>
                          <img src={tickCircle} className='circle_tick' />
                          <h6>Live Vegetables Check </h6>
                        </div>

                        <p className='text-start '>Enjoy fast and reliable delivery of the best fruits and
                          vegetables. We bring farm-fresh produce straight to
                          your doorstep. Quality you.
                        </p>
                      </li>
                      <li>
                      <div className='d-flex gap-2'>
                          <img src={tickCircle} className='circle_tick' />
                          <h6>Live Vegetables Check </h6>
                        </div>
                        <p className='text-start'>Enjoy fast and reliable delivery of the best fruits and
                          vegetables. We bring farm-fresh produce straight to
                          your doorstep. Quality you.
                        </p>
                      </li>
                    </ul>

                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='inner_block' data-aos="fade-up" data-aos-duration="1500">
                    <div className='img position-relative'>
                      <img src={mobileImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='row_am download_app'>
            <div className='dap_block'>
              <div className='blur_shape bs_1'>
                <div className='row'>
                  <div className='col-lg-3 col-md-12'>
                    <div className='dap_image'>
                      <img src={veggies_left}/>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                    <div className='dap_text'>
                      <div className='section_title'>
                      <span className='title_badge'>
                        register restaurant
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className='register_res row_am'>
            <div className='reg_block'>
              <div className='row'>
                <div className='col-lg-7 col-md-10 mx-auto'>
                  <div className='dap_text'>
                    <div className='section_title'>
                      <span className='title_badge'>
                        register restaurant
                      </span>
                      <h2 className='title text-white'>Begin gaining more customers today</h2>
                      <p className='sub_title'>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem Ipsum has been the industrys.</p>
                    </div>
                    <div className='regis'>
                      <div className='btn-block'>
                        <Link to='/' className='btn-register'>Register Restaurant</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='advance_section row_am'>
            <div className='adv_inner'>
              <div className='blur_section bs_1'></div>
              <div className='blur_section bs_2'></div>
              <div className='container'>
                <div className='section_title'>
                  <span className='title_badge'>Easy Steps</span>
                  <h2 className='title text-white'>How it works</h2>
                  <p className='sub_title_adv'>Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.</p>
                </div>
                <div className='adv_list'>
                  <div className='row'>
                    <div className='col-lg-4 col-sm-6 col-md-6'>
                      <div className='box' aos-init aos-animate data-aos="fade-up" data-aos-duration="1500">
                        <div className='box_icon'>
                          <img src={smiley} />
                        </div>
                        <div className='box_text'>
                          <span className='counter_value'>5000</span>
                          <span className='plus'>+</span>
                          <p className='mb-0'>Happy Users</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-md-6'>
                      <div className='box' aos-init aos-animate data-aos="fade-up" data-aos-duration="1500">
                        <div className='box_icon'>
                          <img src={smiley} />
                        </div>
                        <div className='box_text'>
                          <span className='counter_value'>5000</span>
                          <span className='plus'>+</span>
                          <p className='mb-0'>Happy Users</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-md-6'>
                      <div className='box' aos-init aos-animate data-aos="fade-up" data-aos-duration="1500">
                        <div className='box_icon'>
                          <img src={smiley} />
                        </div>
                        <div className='box_text'>
                          <span className='counter_value'>5000</span>
                          <span className='plus'>+</span>
                          <p className='mb-0'>Happy Users</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='adv_btn_block'>
                  <p className='text-white text-start'>Free Delivery For Next Three Orders </p>
                  <ul className='app-btn d-flex justify-content-left'>
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
                  </ul>
                </div>
              </div>
            </div>
            <div className='device'>
              <img src={device} />
            </div>
          </div>

        </div>
        {/* <section className="py-5">
          <div className="container">
            <div className='row'>
              <div className='d-flex justify-content-between'>
                <div className='content_text'>
                  <div className='sub_title d-flex align-items-center'>
                    <span className="text-left ">FRESH VEGETABLES FROM FARM</span>
                  </div>
                  <div className='content_title pb-3'>
                    <h2 className="mb-4">Popular Categories</h2>
                  </div>
                </div>
              </div>

              <Swiper
                slidesPerView={1}
                direction="horizontal"
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ width: "100%", overflow: "hidden" }}
              >
                {vegetables.map((veg, index) => (
                  <SwiperSlide key={index} className="text-center">
                    <img
                      src={veg.image}
                      alt={veg.name}
                      className="veg-image"
                    />                 
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

       

        */}

      </div >

    </>
  );
};

export default HomePage;
