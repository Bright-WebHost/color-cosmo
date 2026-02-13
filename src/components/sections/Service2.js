
// import "swiper/css";
import { Link } from "react-router-dom"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: ".h1n",
		prevEl: ".h1p",
	},

	// Pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
}

export default function Service2() {
	return (
		<>
			<section className="service-section fix section-padding section-bg" id="services" style={{backgroundColor:'#4A136E'}}>
				{/* <div className="bg-shape">
					<img src="assets/img/service/bg-shape.png" alt="img" />
				</div> */}
				<div className="container">
					<div className="section-title text-center">
						{/* <h6 className="wow fadeInUp">
							<i className="fa-regular fa-arrow-left-long" />
							our services
							<i className="fa-regular fa-arrow-right-long" />
						</h6> */}
						<h2 className="text-white wow fadeInUp" data-wow-delay=".2s">
						Engineered coatings and inks for
superior performance and standout visuals
						</h2><br/>
						<p style={{color:'white',fontWeight:'initial'}}>Custom colors, specialty finishes, and UV/UV-LED inks backed by cutting-edge
technology and premium quality</p>
					</div>
				</div>
				<div className="container-fluid">
					<div className="swiper service-slider-2">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="service-card-items">
									<div className="service-image">
										<img src="https://wadaangroup.com/wp-content/uploads/2025/03/QC2.jpg" alt="img" />
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fa-sharp fa-solid fa-swatchbook" />
									</div>
									<div className="content">
										<h3>
											<Link to="#">Color Matching</Link>
										</h3>
										<p style={{textAlign:'justify'}}>
We offer expert color-matching services to ensure your prints, products, and designs achieve the exact shade you envision. With advanced technology and skilled precision, we deliver consistent, vibrant, and accurate colors across all materials and applications—every single time.										</p>
										<Link to="/contact" className="link-btn">
								Get This Service <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-card-items">
									<div className="service-image">
										<img src="https://wadaangroup.com/wp-content/uploads/2025/03/COLOR-MATCH.jpg" alt="img" />
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fa-solid fa-paintbrush-pencil" />
									</div>
									<div className="content">
										<h3>
											<Link to="#">Custom Made Inks</Link>
										</h3>
										<p>
Our custom-formulated inks are designed to meet your exact requirements—whether you need unique shades, enhanced durability, or eco-friendly options. We work closely with you to develop high-performance inks that deliver exceptional quality and precise color accuracy.										</p>
										<Link to="/contact" className="link-btn">
										Get This Service  <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-card-items">
									<div className="service-image">
										<img src="https://wadaangroup.com/wp-content/uploads/2025/03/FLEXO-MACHINE-2.jpg" alt="img" />
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fas fa-headset" />
									</div>
									<div className="content">
										<h3>
											<Link to="#">
											Troubleshooting</Link>
										</h3>
										<p>
Our dedicated technical support team is here to help you overcome any challenges. Whether you need troubleshooting assistance or expert guidance, we provide reliable solutions to keep your operations running smoothly, enhance efficiency, and deliver the best results for your projects.										</p>
										<Link to="/contact" className="link-btn">
										Get This Service  <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
							
						</Swiper>
						<div className="swiper-dot mt-5">
							<div className="dot" />
						</div>
					</div>
				</div>
				<div className="container">
					<div className="service-pagi-items">
						<div className="service-dot" />
						<div className="array-buttons">
							<button className="array-prev h1p">
								<i className="fa-solid fa-arrow-left-long" />
							</button>
							<button className="array-next h1n">
								<i className="fa-solid fa-arrow-right-long"  style={{color:'white'}}/>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
