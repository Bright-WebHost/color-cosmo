
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

export default function Service3() {
	return (
		<>
			<section
				className="service-section fix section-padding bg-cover"
				style={{ backgroundImage: 'url("assets/img/allimg/bg/bg.png")' }}
			>
				<div className="container">
					<div className="section-title text-center">
						<h6 className="wow fadeInUp" style={{color:'#CB239A'}}>
							{/* <i className="fa-regular fa-arrow-left-long" />
							our process
							<i className="fa-regular fa-arrow-right-long" /> */}
						</h6>
						<h2 className="wow fadeInUp text-white" data-wow-delay=".2s">
				What Our Clients Say
						</h2>
						{/* <h5 className="wow fadeInUp text-white" data-wow-delay=".2s" >We follow a streamlined process to ensure top-quality UV & LED inks and coatings. From R&D to production, every step is expertly managed to deliver durable, high-performance printing solutions.</h5> */}
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
										<img src="assets/img/allimg/text/1.png" alt="img" />
										{/* <div className="icon">
											<i className="fa-regular fa-truck-fast" />
										</div> */}
									</div>
									<div className="service-content">
										{/* <h2 className="number">01</h2> */}
										<h3>
											<Link to="#">Triton ME</Link>
										</h3>
										<p >
Color Cosmo’s UV screen inks cure fast, hold color from batch to batch, and keep our runs stable with fewer stoppages</p>
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
										<img src="assets/img/allimg/text/2.png" alt="img" />
										{/* <div className="icon">
											<i className="fas fa-pallet" />
										</div> */}
									</div>
									<div className="service-content">
										{/* <h2 className="number">02</h2> */}
										<h3>
										<Link to="#">Neelkamal Plastic Factory</Link>
										</h3>
										<p>
Their UV screen series delivers quick output, strong tape-resistance, low odor, and consistent results across long runs.			</p>
										{/* <Link to="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link> */}
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/allimg/text/3.png" alt="img" />
										{/* <div className="icon">
											<i className="fas fa-shipping-fast" />
										</div> */}
									</div>
									<div className="service-content">
										{/* <h2 className="number">03</h2> */}
										<h3>
										<Link to="#">Al Bayader International</Link>
										</h3>
										<p>
Color Cosmo’s dry offset inks give us low odor, tight ΔE, and fast curing at line speed — compliance-friendly and production-ready.						</p>
										{/* <Link to="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link> */}
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/allimg/text/4.png" alt="img" />
										{/* <div className="icon">
											<i className="fas fa-shipping-fast" />
										</div> */}
									</div>
									<div className="service-content">
										{/* <h2 className="number">04</h2> */}
										<h3>
										<Link to="#">Precision Plastic Products Company</Link>
										</h3>
										<p>
We chose their dry offset inks for reliable adhesion, low-tack start-ups and clean transfer. It has reduced our down time and startup wasteage making our output predictable.</p>										{/* <Link to="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link> */}
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/allimg/text/5.png" alt="img" />
										{/* <div className="icon">
											<i className="fas fa-shipping-fast" />
										</div> */}
									</div>
									<div className="service-content">
										{/* <h2 className="number">05</h2> */}
										<h3>
										<Link to="#">Cristal Plastic Industries LLC</Link>
										</h3>
										<p>
Bespoke dry offset formulations hit our brand colors repeatedly, cure quickly, resist scuffing, and provide the finish we need.</p>										{/* <Link to="/service-details" className="link-btn">
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
