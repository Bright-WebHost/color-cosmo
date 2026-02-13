
// import "swiper/css";
import { Link } from "react-router-dom"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".dot",
		clickable: true,
	},
	navigation: {
		nextEl: ".array-prev",
		prevEl: ".array-next",
	},
	breakpoints: {
		1399: {
			slidesPerView: 4,
		},
		1199: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2,
		},
		575: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
}

export default function Service1() {
	return (
		<>
			<section
				className="service-section fix section-padding bg-cover"
				style={{ backgroundImage: 'url("assets/img/allimg/bg/bg.png")' }}
			>
				<div className="container">
					<div className="section-title text-center">
						{/* <h6 className="wow fadeInUp" style={{color:'#CB239A'}}>
							<i className="fa-regular fa-arrow-left-long" />
							our process
							<i className="fa-regular fa-arrow-right-long" />
						</h6> */}
						{/* <h2 className="wow fadeInUp text-white" data-wow-delay=".2s">
						Our Work Process
						</h2> */}
						<h5 className="wow fadeInUp text-white" data-wow-delay=".2s" >We follow a streamlined process to ensure top-quality UV & LED inks and coatings. From R&D to production, every step is expertly managed to deliver durable, high-performance printing solutions.</h5>
					</div>
					<div className="array-button">
						<button className="array-prev h1p">
							<i className="fa-regular fa-arrow-left-long" />
						</button>
						<button className="array-next h1n">
							<i className="fa-regular fa-arrow-right-long" />
						</button>
					</div>
				</div>
				<div className="container-fluid">
					<div className="swiper service-slider">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/allimg/process/2/4.png" alt="img" />
										{/* <div className="icon">
											<i className="fa-regular fa-truck-fast" />
										</div> */}
									</div>
									<div className="service-content">
										<h2 className="number">01</h2>
										<h3>
											<Link to="#">Research & Development</Link>
										</h3>
										<p >
We create and enhance UV and UV LED ink formulations to deliver high performance, excellent print quality, and reliable results across multiple applications.										</p>
										{/* <Link to="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link> */}
									</div>
								</div>
							</SwiperSlide>
							{/* <SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/allimg/process/2/3.png" alt="img" />
										
									</div>
									<div className="service-content">
										<h2 className="number">02</h2>
										<h3>
										<Link to="#">Precision Manufacturing</Link>
										</h3>
										<p>
										Leveraging advanced technology, we create premium inks and coatings that offer outstanding adhesion and long-lasting durability.
										</p>
										
									</div>
								</div>
							</SwiperSlide> */}
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/allimg/process/2/2.png" alt="img" />
										{/* <div className="icon">
											<i className="fas fa-pallet" />
										</div> */}
									</div>
									<div className="service-content">
										<h2 className="number">02</h2>
										<h3>
										<Link to="#">R&D, Quality Assurance</Link>
										</h3>
										<p>
Each product undergoes rigorous testing to meet industry standards for consistency, fast curing, and long-lasting durability.										</p>
										{/* <Link to="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link> */}
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/allimg/process/5.png" alt="img" />
										{/* <div className="icon">
											<i className="fas fa-shipping-fast" />
										</div> */}
									</div>
									<div className="service-content">
										<h2 className="number">03</h2>
										<h3>
										<Link to="#">Support & Delivery</Link>
										</h3>
										<p>
We provide tailored solutions, reliable distribution, and expert technical support to ensure seamless and efficient application.										</p>
										{/* <Link to="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link> */}
									</div>
								</div>
							</SwiperSlide>

							
						
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
