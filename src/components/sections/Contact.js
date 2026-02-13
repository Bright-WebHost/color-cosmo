import { Link } from "react-router-dom"

export default function Contact() {
	return (
		<>
			<section
				className="contact-section fix section-padding bg-cover" id="contact"
				style={{ backgroundImage: 'url("assets/img/contact-bg.jpg")',marginBottom:'1px' }}
			>
				{/* <div className="contact-image float-bob-x">
					<img src="assets/img/contact-img-shape.png" alt="img" />
				</div> */}
				<div className="container">
					<div className="contact-wrapper">
						<div className="row g-4 align-items-center">
							<div className="col-lg-6">
								<div className="contact-items">
									<h3 className="wow fadeInUp" data-wow-delay=".2s">
										Get in touch!
									</h3>
									<form
										action="#"
										id="contact-form"
										method="POST"
										className="mt-4 mt-md-0"
									>
										<div className="row g-4">
											<div
												className="col-lg-6 col-md-6 wow fadeInUp"
												data-wow-delay=".2s"
											>
												<div className="form-clt">
													<input
														type="text"
														name="name"
														id="name"
														placeholder="Name"
													/>
												</div>
											</div>
											<div
												className="col-lg-6 col-md-6 wow fadeInUp"
												data-wow-delay=".4s"
											>
												<div className="form-clt">
													<input
														type="text"
														name="email"
														id="email"
														placeholder="email"
													/>
												</div>
											</div>
											<div
												className="col-lg-6 col-md-6 wow fadeInUp"
												data-wow-delay=".2s"
											>
												<div className="form-clt">
													<input
														type="text"
														name="number"
														id="number"
														placeholder="Phone"
													/>
												</div>
											</div>
											<div
												className="col-lg-6 col-md-6 wow fadeInUp"
												data-wow-delay=".4s"
											>
												<div className="form-clt">
													<input
														type="text"
														name="subject"
														id="subject"
														placeholder="Subject"
													/>
												</div>
											</div>
											<div
												className="col-lg-12 wow fadeInUp"
												data-wow-delay=".2s"
											>
												<div className="form-clt">
													<textarea
														name="message"
														id="message"
														placeholder="write message . ."
														defaultValue={""}
													/>
												</div>
											</div>
											<div
												className="col-lg-7 wow fadeInUp"
												data-wow-delay=".4s"
											>
												<button type="submit" className="theme-btn">
												Submit<i className="fas fa-long-arrow-right" />
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="contact-content">
									<div className="section-title">
										{/* <h6 className="text-white wow fadeInUp">
											<i className="fa-regular fa-arrow-left-long" />
											talk to us
											<i className="fa-regular fa-arrow-right-long" />
										</h6> */}
										<h2
											className="text-white wow fadeInUp"
											data-wow-delay=".3s"
										>
											Get in touch with us 


										</h2>
									</div>
									<p
										className="text-white mt-3 mt-md-0 wow fadeInUp"
										data-wow-delay=".5s"
									>
										
We provide services tailored to your needs and aligned with your unique business goals.
									</p>
									<div className="icon-items wow fadeInUp" data-wow-delay=".3s">
										<div className="icon">
											<i className="fa-solid fa-phone-volume" />
										</div>
										<div className="content">
											<span>Contact Us    to know more</span>
											<h4>
												<a href="https://wa.me/971589996806" target="blank">+971 58 999 6806</a>
											</h4>
											<h4>
												<Link to="/tel:97167454004">+971 6 745 4004</Link>
											</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
