import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
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
			slidesPerView: 1,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
}

export default function News1() {
	return (
		<>
			{/* <section className="news-section fix section-padding fix section-bg-2">
				
				<div className="container">
				
					<div className="row">
						
						<div className="col-lg-6">
							<div className="news-right-items">
								<div
									className="news-card-items wow fadeInUp"
									data-wow-delay=".2s"
								>
									<div className="news-content">
										
										<h4>
											Vision
										</h4>
										<p>
										To become a market-leading manufacturer of innovative, high-quality industrial inks and pigment pastes, known for reliability, customization, and consistency across global printing and packaging industries
										</p>
										
									</div>
									<div className="news-image">
										<img src="assets/img/allimg/2.png" alt="img" />
									</div>
								</div>
								
							</div>
						</div>
						<div className="col-lg-6">
							<div className="news-right-items">
								
								<div
									className="news-card-items wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div className="news-content">
										
										<h4>
										Mission
										</h4>
										<p>
										We aim to deliver competitively priced inks and trusted technical support to our clients, offering tailor-made solutions that enhance print quality across various substrates and packaging formats
										</p>
										
									</div>
									<div className="news-image">
										<img src="assets/img/allimg/1.png" alt="img" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}


			<section className="service-section fix section-padding section-bg" id="services" style={{  backgroundImage: `url('assets/img/allimg/bg/2.png')`,backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'}} >

				<div className="bg-shape">
					{/* <img src="assets/img/service/bg-shape.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="section-title text-center">
						{/* <h6 className="wow fadeInUp">
							<i className="fa-regular fa-arrow-left-long" />
							our services
							<i className="fa-regular fa-arrow-right-long" />
						</h6> */}
						{/* <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{color:' rgb(203, 35, 154)',fontSize:'30px'}}>
					
						Color Cosmo’s Vision & Mission

						</h2> */}
						{/* <p style={{color:'black'}}>We offer a comprehensive range of services, including custom color matching, specialty coatings, and high-performance UV, UV LED  printing inks, tailored to meet the diverse needs of various industries. Our expertise ensures precision, durability, and vibrant results across all applications. With cutting-edge technology and a commitment to quality, we deliver innovative solutions that enhance product performance and visual appeal.</p> */}
					</div>
				</div>
				<div className="container-fluid">
					<div className="swiper service-slider-2" >
						<Swiper {...swiperOptions} className="swiper-wrapper" >
							<SwiperSlide className="swiper-slide" >
								<div className="service-card-items" style={{borderRadius:'10px'}}>
									<div className="service-image" >
										<img src="https://wadaangroup.com/wp-content/uploads/2025/03/QC2.jpg" alt="img"  style={{borderRadius:'10px'}}/>
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fa-sharp fa-solid fa-eye" />
									</div>
									<div className="content">
										<h3>
											<Link to="#">Vision</Link>
										</h3>
										<p style={{textAlign:'justify'}}>
										To become a market-leading manufacturer of innovative, high-quality industrial inks and pigment pastes, known for reliability, customization, and consistency across global printing and packaging industries
										</p>
										<Link to="/contact" className="link-btn">
								 {/* <i className="fa-solid fa-arrow-right" /> */}
										</Link>
									</div>
									<div className="items-shape" >
										<img src="assets/img/service/items-shape.png" alt="img"  />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide" style={{borderRadius:'10px'}}>
								<div className="service-card-items" style={{borderRadius:'10px'}}>
									<div className="service-image">
										<img src="https://wadaangroup.com/wp-content/uploads/2025/03/COLOR-MATCH.jpg" alt="img"  style={{borderRadius:'10px'}}/>
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fa-solid fa-rocket" />
									</div>
									<div className="content">
										<h3>
											<Link to="#">Mission</Link>
										</h3>
										<p>
										We aim to deliver competitively priced inks and trusted technical support to our clients, offering tailor-made solutions that enhance print quality across various substrates and packaging formats
										</p>
										<Link to="/contact" className="link-btn">
										 {/* <i className="fa-solid fa-arrow-right" /> */}
										</Link>
									</div>
									<div className="items-shape">
										<img src="assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
						
							
						</Swiper>
						{/* <div className="swiper-dot mt-5">
							<div className="dot" />
						</div> */}
					</div>
				</div>
				{/* <div className="container">
					<div className="service-pagi-items">
						<div className="service-dot" />
						<div className="array-buttons">
							<button className="array-prev h1p">
								<i className="fa-solid fa-arrow-left-long" />
							</button>
							<button className="array-next h1n">
								<i className="fa-solid fa-arrow-right-long" />
							</button>
						</div>
					</div>
				</div> */}
			</section>


			<section className="project-details-section fix section-padding" style={{backgroundColor:'#F2F5FA'}}>
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="project-details-items">
                  {/* <div className="details-image">
                    <img src="assets/img/project/details-1.jpg" alt="img" />
                  </div> */}
                  <div className="project-details-content">
                    {/* <p className="mb-2">Construction, Architecture</p> */}
                    <h2>Quality Policy</h2>
                    <p className="mb-3 mt-3">
                     Management of COLOR COSMO F.Z.C. is committed and dedicated to ensure Customer Satisfaction, Environment Protection and Injury/ill health Prevention in all areas of our expertise. We strive to continously improve our Quality Management System and perfomance by:
                    </p>
                   
                    <div className="project-infor-wrapper">
                      <div className="row g-4">
                        <div className="col-xl-12">
                          {/* <h5> <i className="fa-solid fa-chevrons-right" />Going Beyond the Usual</h5> */}
                          <p className="mt-0 mb-3">
							<i className="fa-solid fa-chevrons-right" style={{color:'#4A136E',margin:'0 12px 0 0'}} />
                           Improving Organizational Efficiency using proper Management Tools
                          </p>
                          <p className="mt-0 mb-3">
							<i className="fa-solid fa-chevrons-right" style={{color:'#4A136E',margin:'0 12px 0 0'}} />
                       Conserving natural resources and energy by optimising maximum efficiency, minimizing waste and exercising environment friendly programs
                          </p>
                          <p className="mt-0 mb-3">
							<i className="fa-solid fa-chevrons-right" style={{color:'#4A136E',margin:'0 12px 0 0'}} />
                       Ensure safe and healthy work environment by minimizing operational risk and hazard

                          </p>
                          <p className="mt-0 mb-3">
							<i className="fa-solid fa-chevrons-right" style={{color:'#4A136E',margin:'0 12px 0 0'}} />
                      Enhancing effectiveness of Quality Management System through reviewing its objectives and targets periodically

                          </p>
                          <p className="mt-0 mb-3">
							<i className="fa-solid fa-chevrons-right" style={{color:'#4A136E',margin:'0 12px 0 0'}} />
                      Increasing quality awareness amongst our employees through workshops and training exercises

                          </p>
                          {/* <h3>Project Goal</h3> */}
                          <p className="mt-3">
                           We commit to communicate this policy to all our company personnel and make it available on request.
                          </p>
                          <p className="mt-3">
                        We tend to adopt the following strategy:
                          </p>
						         <p className="mt-0 mb-3">
							<i className="fa-solid fa-chevrons-right" style={{color:'#4A136E',margin:'0 12px 0 0'}} />
                      Making commitments only after realising and believing we can meet the same


                          </p>
						         <p className="mt-0 mb-3">
							<i className="fa-solid fa-chevrons-right" style={{color:'#4A136E',margin:'0 12px 0 0'}} />
                      Learning from past experiences and implementing quality enhancement measures for product manufacturing and supply


                          </p>
						         <p className="mt-0 mb-3">
							<i className="fa-solid fa-chevrons-right" style={{color:'#4A136E',margin:'0 12px 0 0'}} />
                     Keeping strict quality metrics and maintaining it by regular monitoring and analysing results to verify and validate or processes and performance


                          </p>
						         <p className="mt-0 mb-3">
							<i className="fa-solid fa-chevrons-right" style={{color:'#4A136E',margin:'0 12px 0 0'}} />
                     Setting goals for continuous improvement based on measured results and customer input

                          </p>
                          {/* <ul className="details-list">
                            <li>
                              <i className="fa-solid fa-circle-check" />
                              Proactively pontificate client-centered
                              relationships
                            </li>
                            <li>
                              <i className="fa-solid fa-circle-check" />
                              Release of Letraset sheets containing Lorem Ipsum
                            </li>
                            <li>
                              <i className="fa-solid fa-circle-check" />
                              Is there a waiting list for desired work to be
                              started
                            </li>
                            <li>
                              <i className="fa-solid fa-circle-check" />
                              Release of Letraset sheets containing Lorem Ipsum
                            </li>
                          </ul> */}
                          {/* <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                          </p> */}
                        </div>
                        {/* <div className="col-xl-5">
                          <div className="project-nformation">
                            <h4>Project Information</h4>
                            <ul>
                              <li>
                                Project Category:
                                <span>Rubix carabil tower</span>
                              </li>
                              <li>
                                Clients:
                                <span>David Malan</span>
                              </li>
                              <li>
                                Project Date:
                                <span>25 June, 2024</span>
                              </li>
                              <li>
                                Avenue End Date:
                                <span>08 July, 2024</span>
                              </li>
                              <li>
                                Locations:
                                <span>NewYork – 4648 Rocky, USA</span>
                              </li>
                              <li className="pb-0">
                                Price After:
                                <span>$10 Million</span>
                              </li>
                            </ul>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    {/* <h3 className="mt-3 mb-3">Project Summery</h3>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <p className="mb-4">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum,
                        </p>
                        <div className="details-image">
                          <img
                            src="assets/img/project/details-2.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-4">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum,
                        </p>
                        <div className="details-image">
                          <img
                            src="assets/img/project/details-3.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div> */}
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
