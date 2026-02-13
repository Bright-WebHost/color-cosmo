
// import "swiper/css"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2500,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		1199: {
			slidesPerView: 6,
		},
		991: {
			slidesPerView: 4,
		},
		767: {
			slidesPerView: 3,
		},
		575: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 3,
		},
	},
}

export default function Brand1({ alt }) {
	return (
		<>
			<div className={`brand-section fix  ${alt ? "pt-0 section-bg-2" : ""}`}  style={{marginTop:'-80px'}}>
				<div className="container">
				<div className="section-title text-center">
						{/* <h6 className="wow fadeInUp">
							<i className="fa-regular fa-arrow-left-long" />
							
							<i className="fa-regular fa-arrow-right-long" />
						</h6> */}
						<h2 className="wow fadeInUp" data-wow-delay=".2s">
						Our <span style={{color:' rgb(203, 35, 154)'}}> Customers</span> 
						</h2>
					</div>
					<div className="swiper brand-slider">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									<img src="assets/img/allimg/client/9.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
								<img src="assets/img/allimg/client/2.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
								<img src="assets/img/allimg/client/3.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
								<img src="assets/img/allimg/client/4.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
								<img src="assets/img/allimg/client/11.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
								<img src="assets/img/allimg/client/12.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
								<img src="assets/img/allimg/client/7.png" alt="img" />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</>
	)
}
