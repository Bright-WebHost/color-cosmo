import { Link } from "react-router-dom"
import MobileMenu from "./MobileMenu"

export default function Offcanvas({ isOffCanvas, handleOffCanvas }) {
	return (
		<>
			<div className="fix-area">
				<div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
					<div className="offcanvas__wrapper">
						<div className="offcanvas__content">
							<div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
								<div className="offcanvas__logo">
									<Link to="/">
										<img src="assets/img/allimg/logo.png" alt="logo-img" />
									</Link>
								</div>
								<div className="offcanvas__close">
									<button onClick={handleOffCanvas}>
										<i className="fas fa-times" />
									</button>
								</div>
							</div>
							<p className="text d-none d-xl-block">
							
							</p>
							<MobileMenu />
							{/* <div className="offcanvas__contact">
								<h4>Contact Info</h4>
								<ul>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon">
											<i className="fal fa-map-marker-alt" />
										</div>
										<div className="offcanvas__contact-text">
											<Link target="_blank" to="/#">
												Main Street, Melbourne, Australia
											</Link>
										</div>
									</li>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon mr-15">
											<i className="fal fa-envelope" />
										</div>
										<div className="offcanvas__contact-text">
											<Link to="/mailto:info@example.com">
												<span className="mailto:info@example.com">
													info@example.com
												</span>
											</Link>
										</div>
									</li>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon mr-15">
											<i className="fal fa-clock" />
										</div>
										<div className="offcanvas__contact-text">
											<Link target="_blank" to="/#">
												Mod-friday, 09am -05pm
											</Link>
										</div>
									</li>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon mr-15">
											<i className="far fa-phone" />
										</div>
										<div className="offcanvas__contact-text">
											<Link to="/tel:+11002345909">+11002345909</Link>
										</div>
									</li>
								</ul>
								<div className="header-button mt-4">
									<Link to="/contact" className="theme-btn text-center">
										<span>
											Get A Quote
											<i className="fa-solid fa-arrow-right-long" />
										</span>
									</Link>
								</div>
								<div className="social-icon d-flex align-items-center">
									<Link to="/#">
										<i className="fab fa-facebook-f" />
									</Link>
									<Link to="/#">
										<i className="fab fa-twitter" />
									</Link>
									<Link to="/#">
										<i className="fab fa-youtube" />
									</Link>
									<Link to="/#">
										<i className="fab fa-linkedin-in" />
									</Link>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
		</>
	)
}
