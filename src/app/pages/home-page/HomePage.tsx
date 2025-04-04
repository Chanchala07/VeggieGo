import { Link } from 'react-router-dom';
import './homePage.css';
import veggieLogo from '../../assets/Images/veggiego-logo.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Use correct module import
import veggies from '../../assets/Images/cat2.png'

const HomePage = () => {
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
        <section className=" bg-success text-white text-center py-5 banner_section_main postion-relative">
          <div className='banner-section-content'>
            <div className='banner-section-item pd-100 d-flex justify-content-center align-items-center'>
              <div className="container">
                <div className='row align-items-center justify-content-center'>
                  <div className='col-md-7'>
                    <div className='title'>
                      <h1>Organic Veggies & Foods You Cook</h1>
                    </div>
                    <div className='text py-3'>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                    <div className="text float-left py-3">
                      <Link to="/shop" className="btn btn-shop mt-3">
                        Shop Now
                      </Link>
                    </div>
                  </div>

                  <div className='col-md-5'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
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
                    {/* <h5 className="mt-3">{veg.name}</h5> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className='d-flex justify-content-between'>
                <div className='content_text'>
                  <div className='sub_title d-flex align-items-center'>
                    <span className="text-left ">FRESH VEGETABLES FROM FARM</span>
                  </div>
                  <div className='content_title pb-3'>
                    <h2 className="mb-4">Our Organic Products</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content">
              <div className=''>
                <div className='row g-4'>
                  <div className='col-sm-6 col-md-6 col-xl-3'>
                    <div className='product position-relative'>
                      <div className='product_content position-relative bg-white'>
                        <div className='image_wrap d-flex justify-content-center align-items-center'>
                          <Link to='/'>
                            <img src="https://jthemes.net/themes/html/organic/assets/images/product/product2.png"
                              className='veg-image-1'
                            /></Link>
                        </div>
                        <div className='text-left'>
                          <h3 className='product_title'>Organic Foods</h3>
                          <div className='product_price'>$26.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-6 col-xl-3'>
                    <div className='product position-relative'>
                      <div className='product_content position-relative bg-white'>
                        <div className='image_wrap d-flex justify-content-center align-items-center'>
                          <Link to='/'>
                            <img src="https://jthemes.net/themes/html/organic/assets/images/product/product2.png" className='veg-image-1' /></Link>
                        </div>
                        <div className='text-left'>
                          <h3 className='product_title'>Organic Foods</h3>
                          <div className='product_price'>$26.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-6 col-xl-3'>
                    <div className='product position-relative'>
                      <div className='product_content position-relative bg-white'>
                        <div className='image_wrap d-flex justify-content-center align-items-center'>
                          <Link to='/'>
                            <img src="https://jthemes.net/themes/html/organic/assets/images/product/product2.png" className='veg-image-1' /></Link>
                        </div>
                        <div className='text-left'>
                          <h3 className='product_title'>Organic Foods</h3>
                          <div className='product_price'>$26.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-6 col-xl-3'>
                    <div className='product position-relative'>
                      <div className='product_content position-relative bg-white'>
                        <div className='image_wrap d-flex justify-content-center align-items-center'>
                          <Link to='/'>
                            <img src="https://jthemes.net/themes/html/organic/assets/images/product/product2.png" className='veg-image-1' /></Link>
                        </div>
                        <div className='text-left'>
                          <h3 className='product_title'>Organic Foods</h3>
                          <div className='product_price'>$26.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-6 col-xl-3'>
                    <div className='product position-relative'>
                      <div className='product_content position-relative bg-white'>
                        <div className='image_wrap d-flex justify-content-center align-items-center'>
                          <Link to='/'>
                            <img src="https://jthemes.net/themes/html/organic/assets/images/product/product2.png" className='veg-image-1' /></Link>
                        </div>
                        <div className='text-left'>
                          <h3 className='product_title'>Organic Foods</h3>
                          <div className='product_price'>$26.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-6 col-xl-3'>
                    <div className='product position-relative'>
                      <div className='product_content position-relative bg-white'>
                        <div className='image_wrap d-flex justify-content-center align-items-center'>
                          <Link to='/'>
                            <img src="https://jthemes.net/themes/html/organic/assets/images/product/product2.png" className='veg-image-1' /></Link>
                        </div>
                        <div className='text-left'>
                          <h3 className='product_title'>Organic Foods</h3>
                          <div className='product_price'>$26.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-6 col-xl-3'>
                    <div className='product position-relative'>
                      <div className='product_content position-relative bg-white'>
                        <div className='image_wrap d-flex justify-content-center align-items-center'>
                          <Link to='/'>
                            <img src="https://jthemes.net/themes/html/organic/assets/images/product/product2.png" className='veg-image-1' /></Link>
                        </div>
                        <div className='text-left'>
                          <h3 className='product_title'>Organic Foods</h3>
                          <div className='product_price'>$26.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-6 col-xl-3'>
                    <div className='product position-relative'>
                      <div className='product_content position-relative bg-white'>
                        <div className='image_wrap d-flex justify-content-center align-items-center'>
                          <Link to='/'>
                            <img src="https://jthemes.net/themes/html/organic/assets/images/product/product2.png" className='veg-image-1' /></Link>
                        </div>
                        <div className='text-left'>
                          <h3 className='product_title'>Organic Foods</h3>
                          <div className='product_price'>$26.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section >

        < section className="bg-light py-5" >
          <div className="container">
            <h2 className="text-center mb-4">Fresh Fruits</h2>
            <div className="row">
              <div className="col-md-6">
                <p>
                  Enjoy our hand-picked, organic fruits loaded with vitamins and minerals. Stay refreshed and healthy
                  with our wide selection.
                </p>
                <ul>
                  <li>🍎 Apples - Packed with fiber and antioxidants</li>
                  <li>🍌 Bananas - Great for energy and digestion</li>
                  <li>🍇 Grapes - Boosts heart health</li>
                  <li>🍉 Watermelon - Hydrating and refreshing</li>
                </ul>
              </div>
              <div className="col-md-6">
                <img src={veggieLogo} alt="Fresh Fruits" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </section >

      </div >


    </>
  );
};

export default HomePage;
