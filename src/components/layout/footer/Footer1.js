import { Link } from "react-router-dom"
import Gallery from "../../elements/Gallery"

export default function Footer1() {
	return (
		<>
			<footer
				className="footer-section bg-cover bg-cover"
				style={{ backgroundImage: 'url("assets/img/footer/bg.jpg")' }}
			>
				<div className="container">

<div style={{padding:'10px'}}></div>
					<div className="contact-info-area"  >
						
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".4s"
						>
							
							<div className="content">
								{/* <p>Our Address</p> */}
								<h2 style={{fontSize:'25px'}}>Do you want high-quality prints on your products?</h2>
								{/* <p>Reach out to enhance your digital presence and start your journey toward remarkable growth</p> */}
							</div>
						</div>
					
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".8s"
						>
							
							<div className="contact">
								<Link to='/contact'>
							<button type="submit" className="theme-btn">
							Contact Us<i className="fas fa-long-arrow-right" />
												</button>
												</Link>
							</div>
						</div>
					</div>
{/* old */}
					{/* <div className="contact-info-area" >
						<Link
							to="/"
							className="logo-img wow fadeInUp"
							data-wow-delay=".2s"
						>
							<img src="assets/img/allimg/logo.png" alt="img" />
						</Link>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="icon">
								<i className="fa-sharp fa-solid fa-location-dot" />
							</div>
							<div className="content">
								<p>Our Address</p>
								<h3>Warehouse B1-13, Gate 1,<br/>
								Ajman Freezone, Ajman, UAE</h3>
							</div>
						</div>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".6s"
						>
							<div className="icon">
								<i className="fa-solid fa-envelope" />
							</div>
							<div className="content">
								<p>Email Address</p>
								<h3>
									<Link to="/mailto:info@colorcosmo.com">info@colorcosmo.com</Link>
								</h3>
							</div>
						</div>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".8s"
						>
							<div className="icon">
								<i className="fa-solid fa-phone-volume" />
							</div>
							<div className="content">
								<p>Phone Number</p>
								<h3>
									<Link to="/tel:+0589996806">+058 999 6806</Link>
								</h3>
							</div>
						</div>
					</div> */}
{/* old */}
					<div className="footer-widgets-wrapper">
						<div className="row">
							<div
								className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										{/* <h5>About Company</h5> */}
									</div>
									<div className="footer-content">
									<Link
							to="/"
							className="logo-img wow fadeInUp"
							data-wow-delay=".2s"
						>
							<img src="assets/img/allimg/footerlogo.png" alt="img" />
						</Link>
										<p style={{marginTop:'20px'}}>
										Advanced ink technology for seamless printing results. Consistency, reliability, and excellence
										</p>
										<div className="social-icon d-flex align-items-center">
											
										<Link to="https://wa.me/971589996806" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-whatsapp" /> 
</Link>

										
											<Link to="https://www.linkedin.com/company/color-cosmo-f-z-c/?originalSubdomain=in" target="_blank">
												<i className="fab fa-linkedin-in" />
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
								data-wow-delay=".4s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Quick Link</h5>
									</div>
									<ul className="list-area">
										<li className="footertag">
											<Link to="/" className="footertag">
												<i className="fa-solid fa-chevrons-right" />
											Home
											</Link>
										</li>
										
										<li className="footertag">
											<Link to="/about" className="footertag">
												<i className="fa-solid fa-chevrons-right" />
											About
											</Link>
										</li>
										<li className="footertag">
											<Link to="/service" className="footertag">
												<i className="fa-solid fa-chevrons-right" />
												Our Services
											</Link>
										</li>
										<li className="footertag">
											<Link to="/products" className="footertag">
												<i className="fa-solid fa-chevrons-right" />
												Products
											</Link>
										</li>
										<li className="footertag">
											<Link to="/contact" className="footertag">
												<i className="fa-solid fa-chevrons-right" />
												Contact Us
											</Link>
										</li>
										
									</ul>
								</div>
							</div>
							<div
								className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
								data-wow-delay=".6s"
							style={{
  display: window.matchMedia("(max-width: 768px)").matches
    ? "none"
    : "block"
}}


							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Products</h5>
									</div>
									<ul className="list-area" >
										<li className="footertag">
											<Link to="/products" className="footertag" state={{ scrollTo: "test" }}>
												<i className="fa-solid fa-chevrons-right" />
												UV Offset Printing Inks


											</Link>
										</li>
										<li className="footertag">
											<Link to="/products" className="footertag" state={{ scrollTo: "test3" }}>
												<i className="fa-solid fa-chevrons-right" />
												Dry Offset Inks

											</Link>
										</li>
										<li className="footertag">
											<Link to="/products" className="footertag" state={{ scrollTo: "test4" }}>
												<i className="fa-solid fa-chevrons-right" />
												
												Letterpress Inks
											</Link>
										</li>
										<li className="footertag">
											<Link to="/products" className="footertag" state={{ scrollTo: "test6" }}>
												<i className="fa-solid fa-chevrons-right" />
												
											UV OVP Varnishes
											</Link>
										</li>
										<li className="footertag">
											<Link to="/products" className="footertag" state={{ scrollTo: "test7" }}>
												<i className="fa-solid fa-chevrons-right" />
												
											Consumables
											</Link>
										</li>
										<li className="footertag" >
											<Link to="/products" className="footertag" state={{ scrollTo: "test2" }}>
												<i className="fa-solid fa-chevrons-right" />
												
												UV / UV-LED Based Screen Printing Ink
											</Link>
										</li>
										
										<li className="footertag">
											<Link to="/products" className="footertag" state={{ scrollTo: "test5" }}>
												<i className="fa-solid fa-chevrons-right" />
												
												Solvent based screen printing ink
											</Link>
										</li>
										
										
										
									</ul>
								</div>
							</div>
							<div
								className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
								data-wow-delay=".6s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Contact Us	</h5>
									</div>
									<ul className="list-area">
										<li>
										<p style={{color:'rgb(217 217 215 / 80%)'}}>Warehouse B1-13, Gate<br/> 1,Ajman Freezone, Ajman, UAE</p>
										</li>
										<li className="footertag">
									<Link to="/mailto:sales@colorcosmo.com" className="footertag">sales@colorcosmo.com
</Link>
										</li>
										
										<li className="footertag">
									<a href="https://wa.me/971589996806" target="blank" className="footertag">+971 58 999 6806</a>
										</li>
										<li className="footertag">
									<Link to="/tel:97167454004" className="footertag">+971 6 745 4004</Link>
										</li>
										
									
										
									</ul>
								</div>
							</div>
							<div
								className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
								data-wow-delay=".8s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										{/* <h5>Instagram</h5> */}
									</div>
									<div className="footer-gallery">
										<div className="gallery-wrap">
											{/* <Gallery /> */}
											{/* <div className="gallery-item">
												<div className="thumb">
													<Link
														to="/assets/img/footer/gallery-4.jpg"
														className="img-popup"
													>
														<img
															src="assets/img/footer/gallery-4.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link
														to="/assets/img/footer/gallery-5.jpg"
														className="img-popup"
													>
														<img
															src="assets/img/footer/gallery-5.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link
														to="/assets/img/footer/gallery-6.jpg"
														className="img-popup"
													>
														<img
															src="assets/img/footer/gallery-6.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<p>
						©  {new Date().getFullYear()} Color Cosmo {" "} | Powered By
						<a href="https://targefy.com/" target="_blank" style={{color:'#bb0000'}}> Targefy</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
