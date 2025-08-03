"use client";
import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";
import FooterOne from "@/components/footer/FooterOne";
import Product from "@/data/Product.json";
import { useState } from "react";
import ShopMain from "../shop/ShopMain";

interface PostType {
  category?: string;
  slug: string;
  image: string;
  title?: string;
  price?: string;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter products based on search and category
  const filteredProducts = Product.filter((product) => {
    const matchesSearch =
      !searchQuery ||
      product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  }).slice(0, 6); // Show only first 6 products

  return (
    <div>
      <HeaderOne />
      <>
        <div className="store-details-area rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-12 mt-lg--30">
                <div className="vendor-details-banner--area">
                  <div className="row g-5">
                    <div className="col-lg-3">
                      <div className="vendor-banner-left">
                        <img
                          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&h=150&fit=crop&crop=center"
                          alt="vendor"
                        />
                        <div className="header-area">
                          <h4 className="title">
                            Rawasy Construction <span>Open</span>
                          </h4>
                        </div>
                        <div className="stars-area">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <span>(4.95 out of 5)</span>
                        </div>
                        <div className="location">
                          <i className="fa-regular fa-location-dot" />
                          <p>King Fahd Road, Riyadh, Saudi Arabia</p>
                        </div>
                        <div className="location">
                          <i className="fa-regular fa-phone-volume" />
                          <p>+966 11 123 4567</p>
                        </div>
                        <div className="location">
                          <i className="fa-regular fa-cart-shopping" />
                          <p>{Product.length} Products Available</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div
                        className="banner-vendor-details"
                        style={{
                          // backgroundImage: 'url(/assets/images/banner/rawasy-banner.jpg)',
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          height: "100%",
                          minHeight: "300px",
                        }}
                      >
                        <div className="content-area">
                          <a href="#" className="rts-btn btn-primary">
                            Special Offer
                          </a>
                          <h3 className="title animated fadeIn">
                            Premium Construction <br />
                            <span>Materials</span>
                          </h3>
                          <a href="/shop" className="shop-now-goshop-btn">
                            <span className="text">Shop Now</span>
                            <div className="plus-icon">
                              <i className="fa-sharp fa-regular fa-plus" />
                            </div>
                            <div className="plus-icon">
                              <i className="fa-sharp fa-regular fa-plus" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                                    <div className="col-lg-12">
                                        <div className="product-area-add-wrapper bg_image">
                                            <h2 className="title">Featured Products</h2>
                                            <img src="/assets/images/products/cement-bag.jpg" alt="cement" className="one" />
                                            <img src="/assets/images/products/steel-rebar.jpg" alt="rebar" className="two" />
                                        </div>
                                    </div>
                                </div> */}
                <div className="row mt--50 ml-v-dec-m ">
                  <div className="col-lg-12">
                    <div className="product-filter-area-vendors-details">
                      <div className="search-area">
                        <form
                          action="#"
                          className="search-header"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <input
                            type="text"
                            placeholder="Search Products"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="rts-btn btn-primary radious-sm with-icon mt--20"
                          >
                            <div className="btn-text">Search</div>
                            <div className="arrow-icon">
                              <i className="fa-light fa-magnifying-glass" />
                            </div>
                          </button>
                        </form>
                      </div>
                      <div className="single-select" style={{alignSelf: "flex-start"}}>
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option value="All Categories">All Categories</option>
                          <option value="Building Materials">
                            Building Materials
                          </option>
                          <option value="Construction Tools">
                            Construction Tools
                          </option>
                          <option value="Heavy Equipment">
                            Heavy Equipment
                          </option>
                          <option value="Safety Equipment">
                            Safety Equipment
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-4 ml-v-dec-m mt--40">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product: PostType, index: number) => (
                      <div key={index} className="col-lg-4 col-md-6">
                        <div className="single-shopping-card-one tranding-product">
                          <ShopMain
                            Slug={product.slug}
                            ProductImage={product.image}
                            ProductTitle={product.title}
                            Price={product.price}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center">
                      <h3>No Products Found</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <ShortService />
      <FooterOne />
    </div>
  );
}
