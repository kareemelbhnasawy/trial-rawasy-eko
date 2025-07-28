import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";
import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
    return (
        <div className="demo-one">
            <HeaderOne />

            <>
                {/* rts contact main wrapper */}
                <div className="rts-contact-main-wrapper-banner bg_image">
                    <div className="container">
                        <div className="row">
                            <div className="co-lg-12">
                                <div className="contact-banner-content">
                                    <h1 className="title">Rawasy Contact Center</h1>
                                    <p className="disc">
                                        Welcome to Rawasy! Reach out for support, partnership, or any inquiry. Our team is ready to assist you with all your construction and supply needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts contact main wrapper end */}

                <div className="rts-map-contact-area rts-section-gap2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="contact-left-area-main-wrapper">
                                    <h2 className="title">Contact Rawasy Offices</h2>
                                    <p className="disc">
                                        For questions, feedback, or business inquiries, connect with our offices below or use the form to get a quick response.
                                    </p>
                                    <div className="location-single-card">
                                        <div className="icon">
                                            <i className="fa-light fa-location-dot" />
                                        </div>
                                        <div className="information">
                                            <h3 className="title">Rawasy HQ - Riyadh</h3>
                                            <p>King Fahd Road, Riyadh, Saudi Arabia</p>
                                            <a href="#" className="number">
                                                +966 11 123 4567
                                            </a>
                                            <a href="#" className="email">
                                                contact@rawasy.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="location-single-card">
                                        <div className="icon">
                                            <i className="fa-light fa-location-dot" />
                                        </div>
                                        <div className="information">
                                            <h3 className="title">Rawasy Branch - Jeddah</h3>
                                            <p>Al Tahlia Street, Jeddah, Saudi Arabia</p>
                                            <a href="#" className="number">
                                                +966 12 987 6543
                                            </a>
                                            <a href="#" className="email">
                                                jeddah@rawasy.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 pl--50 pl_sm--5 pl_md--5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.927123456789!2d46.675295!3d24.713552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038b7e8b7e8b%3A0x7e8b7e8b7e8b7e8b!2sKing%20Fahd%20Road%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1716725338558!5m2!1sen!2ssa"
                                    width={600}
                                    height={540}
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts contact-form area start */}
                <div className="rts-contact-form-area rts-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bg_light-1 contact-form-wrapper-bg">
                                    <div className="row">
                                        <div className="col-lg-7 pr--30 pr_md--10 pr_sm--5">
                                            <div className="contact-form-wrapper-1">
                                                <h3 className="title mb--50">
                                                    Get in Touch with Rawasy
                                                </h3>
                                                <form action="#" className="contact-form-1">
                                                    <div className="contact-form-wrapper--half-area">
                                                        <div className="single">
                                                            <input type="text" placeholder="Name*" />
                                                        </div>
                                                        <div className="single">
                                                            <input type="text" placeholder="Email*" />
                                                        </div>
                                                    </div>
                                                    <div className="single-select">
                                                        <select>
                                                            <option data-display="Subject*">General Inquiry</option>
                                                            <option value={1}>Partnership</option>
                                                            <option value={2}>Support</option>
                                                            <option value={3}>Feedback</option>
                                                        </select>
                                                    </div>
                                                    <textarea
                                                        name="message"
                                                        placeholder="Write your message here..."
                                                        defaultValue={""}
                                                    />
                                                    <button className="rts-btn btn-primary mt--20">
                                                        Send Message
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 mt_md--30 mt_sm--30">
                                            <div className="thumbnail-area">
                                                <img src="/assets/images/contact/rawasy-contact.jpg" alt="Rawasy Contact" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts contact-form area end */}
            </>

            <ShortService />
            <FooterOne />
        </div>
    );
}
