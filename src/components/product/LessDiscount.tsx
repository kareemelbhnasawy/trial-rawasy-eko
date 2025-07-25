'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';

const products = [
  {
    id: 1,
    img: '/assets/images/products/cement-bag.jpg',
    title: 'Portland Cement Type I - 94 lb Bag',
    pack: 'In Stock',
    currentPrice: '$12.50',
    previousPrice: '$15.00',
  },
  {
    id: 2,
    img: '/assets/images/products/steel-rebar.jpg',
    title: 'Steel Rebar Grade 60 - #4 (1/2 inch) x 20 ft',
    pack: 'In Stock',
    currentPrice: '$8.75',
    previousPrice: '$10.00',
  },
  {
    id: 3,
    img: '/assets/images/products/marine-plywood.jpg',
    title: 'Marine Grade Plywood - 1/2" x 4\' x 8\'',
    pack: 'In Stock',
    currentPrice: '$89.99',
    previousPrice: '$99.99',
  },
  {
    id: 4,
    img: '/assets/images/products/concrete-blocks.jpg',
    title: 'Standard Concrete Blocks - 8" x 8" x 16"',
    pack: 'In Stock',
    currentPrice: '$2.25',
    previousPrice: '$2.75',
  },
  {
    id: 5,
    img: '/assets/images/products/safety-helmet.jpg',
    title: 'Safety Hard Hat - ANSI Z89.1 Type I Class E',
    pack: 'In Stock',
    currentPrice: '$24.99',
    previousPrice: '$29.99',
  },
  {
    id: 6,
    img: '/assets/images/products/power-drill.jpg',
    title: 'Cordless Drill Driver - 18V Li-Ion Kit',
    pack: 'In Stock',
    currentPrice: '$189.99',
    previousPrice: '$219.99',
  },
];

export default function CategorySlider() {
  useEffect(() => {
    // Ensure Swiper navigation works after mount
  }, []);

  return (
    <div className="rts-category-area rts-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cover-card-main-over">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-area-between">
                    <h2 className="title-left mb--0">Hand Picked Products for 10% Offer</h2>
                    <div className="next-prev-swiper-wrapper d-sm-none">
                      <div className="swiper-button-prevs">
                        <i className="fa-regular fa-chevron-left"></i>
                      </div>
                      <div className="swiper-button-nexts">
                        <i className="fa-regular fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="rts-caregory-area-one">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="category-area-main-wrapper-one">
                          <Swiper
                            modules={[Navigation]}
                            navigation={{
                              nextEl: '.swiper-button-nexts',
                              prevEl: '.swiper-button-prevs',
                            }}
                            spaceBetween={15}
                            slidesPerView={4}
                            loop={true}
                            speed={1000}
                            breakpoints={{
                              0: { slidesPerView: 1 },
                              320: { slidesPerView: 1 },
                              480: { slidesPerView: 2 },
                              640: { slidesPerView: 2 },
                              840: { slidesPerView: 3 },
                              1140: { slidesPerView: 4 },
                            }}
                            className="mySwiper-category-1 swiper-data"
                          >
                            {products.map((item) => (
                              <SwiperSlide key={item.id}>
                                <div className="single-shopping-card-one tranding-product">
                                  <a href="/shop" className="thumbnail-preview">
                                    <Image
                                      src={item.img}
                                      alt="grocery"
                                      width={300}
                                      height={300}
                                      layout="responsive"
                                    />
                                  </a>
                                  <div className="body-content">
                                    <a href="/shop">
                                      <h4 className="title">{item.title}</h4>
                                    </a>
                                    <span className="availability">{item.pack}</span>
                                    <div className="price-area">
                                      <span className="current">{item.currentPrice}</span>
                                      <div className="previous">{item.previousPrice}</div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* rts category area end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
