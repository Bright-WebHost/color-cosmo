
import { Link } from "react-router-dom"
// import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2000,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".project-dot",
	},
	breakpoints: {
		1199: {
			slidesPerView: 5,
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

export default function  	Project2() {
	return (
		<>
			<section className="project-section section-padding pt-6 fix" id="projects" >
				<div className="container">
					<div className="section-title-area">
						<div className="section-title">
							{/* <h6 className="wow fadeInUp" style={{color:'rgb(203, 35, 154)'}}>
								<i className="fa-regular fa-arrow-left-long" />
								Our Latest Projects
								<i className="fa-regular fa-arrow-right-long" />
							</h6> */}
							<h2 className="wow fadeInUp" data-wow-delay=".2s">
								Explore our projects 
							</h2>
						</div>
						{/* <Link
							to="/products"
							className="theme-btn wow fadeInUp"
							data-wow-delay=".4s"
						>
							 our projects <i className="fa-regular fa-arrow-right" />
						</Link> */}
					</div>
				</div>
				<div className="project-wrapper-2">
					<div className="swiper project-slider">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							{/* <SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
									<img src="assets/img/allimg/ourproject/4.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h4>
												<Link to="/products" style={{color:'#4A136E'}}>Akira</Link>
											</h4>
											
										</div>
									</div>
								</div>
							</SwiperSlide> */}
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb" >
								<img src="assets/img/allimg/ourproject/9.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}
										>
											<h4>
												<Link  to="/products" style={{color:'white' }}   state={{ scrollTo: "test" }}>UV Offset Printing Inks</Link>
											</h4>
											{/* <span>
												<i className="fa-sharp fa-solid fa-location-dot" /> 4648
												Rocky, New York
											</span> */}
										</div>
										{/* <h2 className="number">02</h2> */}
									</div>
								</div>
							</SwiperSlide>
							

							<SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
								<img src="assets/img/allimg/ourproject/8.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h4>
												<Link to="/products" style={{color:'white' }} state={{ scrollTo: "test2" }}>UV / UV-LED Based Screen Printing Ink</Link>
											</h4>
											
										</div>
										{/* <h2 className="number">04</h2> */}
									</div>
								</div>
							</SwiperSlide>


							<SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
								<img src="assets/img/allimg/ourproject/13.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h4>
												<Link to="/products" style={{color:'white' }} state={{ scrollTo: "test3" }}>Dry offset Inks</Link>
											</h4>
											
										</div>
										{/* <h2 className="number">05</h2> */}
									</div>
								</div>
							</SwiperSlide>


							<SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
								<img src="assets/img/allimg/ourproject/12.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h4>
												<Link to="/products" style={{color:'white' }} state={{ scrollTo: "test5" }}>Solvent based screen<br/> printing Ink</Link>
											</h4>
											
										</div>
										{/* <h2 className="number">06</h2> */}
									</div>
								</div>
							</SwiperSlide>



								<SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
								<img src="assets/img/allimg/ourproject/11.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h4>
												<Link to="/products" style={{color:'white' }} state={{ scrollTo: "test4" }}>Letterpress Inks</Link>
											</h4>
											
										</div>
										{/* <h2 className="number">06</h2> */}
									</div>
								</div>
							</SwiperSlide>




								<SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
								<img src="assets/img/allimg/ourproject/10.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h4>
												<Link to="/products" style={{color:'white'}} state={{ scrollTo: "test6" }}>UV OVP Varnishes</Link>
											</h4>
											
										</div>
										{/* <h2 className="number">06</h2> */}
									</div>
								</div>
							</SwiperSlide>
							
						</Swiper>
						<div className="project-dot" />
					</div>
				</div>
			</section>
		</>
	)
}
