import React from "react"
import { Link } from "react-router-dom"

export default function ContactInfo() {
	return (
		<section className="contact-info-section fix section-padding">
			<div className="container">
				<div className="section-title text-center">
					{/* <h6 className="wow fadeInUp">
						<i className="fa-regular fa-arrow-left-long" />
					
						<i className="fa-regular fa-arrow-right-long" />
					</h6> */}
					<h2 className="wow fadeInUp" data-wow-delay=".4s">
						Our Contact Information
					</h2>
				</div>
				<div className="row" >
					<div
						className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".2s"
						
						
					>
						<div className="contact-box-items ">
							<div className="icon">
							<i className="far fa-location-dot" />
							</div>
							<div className="content" style={
  window.matchMedia("(max-width: 768px)").matches
    ? { marginTop: "-90px", marginLeft: "100px" }
    : {}
}>
								<h3>Our Address</h3>
								
								<p>
								Warehouse B1-13, Gate 1, Ajman Freezone, Ajman, UAE
								</p>
							</div>
						</div>
					</div>
					<div
						className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".4s"
					>
						<div className="contact-box-items">
							<div className="icon">
							<i className="far fa-envelope" />
							</div>
							<div className="content">
								<h3>Email Address</h3>
								<p>
							
									<Link to="/mailto:sales@colorcosmo.com">sales@colorcosmo.com
</Link>
								</p>
							</div>
						</div>
					</div>
					<div
						className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".6s"
					>
						<div className="contact-box-items">
							<div className="icon">
							<i className="far fa-phone-volume" />
							</div>
							<div className="content">
								<h3>Phone Number</h3>
								<p>
									<a href="https://wa.me/971589996806" target="blank">+971 58 999 6806</a>{" "}
									
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
