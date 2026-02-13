
import { useState } from "react"
import { Link } from "react-router-dom"

export default function News2() {
	const [activeIndex, setActiveIndex] = useState(2)

	const handleIndex = (index) => {
		setActiveIndex(index)
	}
	return (
		<>
			<section className="news-section fix section-padding pt-10" id="blog">
				<div className="shape-3 float-bob-y">
					<img src="assets/img/news/shape-3.png" alt="img" />
				</div>
				<div className="shape-4 float-bob-y">
					<img src="assets/img/news/shape-4.png" alt="img" />
				</div>
				<div className="container">
					{/* <div className="section-title-area">
						<div className="section-title">
							<h6 className="wow fadeInUp">
								<i className="fa-regular fa-arrow-left-long" />
								
									our process
								<i className="fa-regular fa-arrow-right-long" />
							</h6>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
							Our Work Process
							</h2>
						</div>
						<Link
							to="/news-grid"
							className="theme-btn wow fadeInUp"
							data-wow-delay=".5s"
						>
							View all post <i className="fa-regular fa-arrow-right" />
						</Link>
					</div> */}
					<div className="row" >
						
						<div
							onClick={() => handleIndex(2)}
							className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp "
							data-wow-delay=".4s"
							style={{marginTop:'25px'}}
						>
						<div className="section-title ">
							<h6 className="wow fadeInUp">
								<i className="fa-regular fa-arrow-left-long" />
								
									our process
								<i className="fa-regular fa-arrow-right-long" />
							</h6>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
							Our Work Process
							</h2>
							<p>We follow a streamlined and efficient work process to ensure the highest quality in our UV & LED inks and coatings. From research and development to production and quality control, every step is carefully managed to meet industry standards. Our expert team continuously innovates to deliver durable, high-performance printing solutions tailored to various applications.</p>
						</div>
						</div>


						<div
							onClick={() => handleIndex(3)}
							className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
							data-wow-delay=".6s"
							
						>
							<div
								className={
									activeIndex === 3 ? "news-box-items active" : "news-box-items"
								}
								style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",borderRadius:'20px',backgroundColor:'#4A136E'}}
							>
								
								<div className="news-content">
									{/* <ul className="post-list">
										<li>Industry</li>
										<li>07 July 2024</li>
									</ul> */}
									<h4>
										<Link to="/news-details">
										Research & Development
										</Link>
									</h4>
									<p style={{color:'white'}}>We innovate and refine UV, UV LED ink formulations to ensure superior performance and quality.</p>
									{/* <div className="author-items">
										<div className="author-info">
											<img src="assets/img/news/author-3.png" alt="img" />
											<div className="content">
												<h6>Admin</h6>
												<p>Guy Hawkins</p>
											</div>
										</div>
										<Link to="/news-details" className="link-btn">
											Read More <i className="fa-solid fa-arrow-right" />
										</Link>
									</div> */}
								</div>
								<div className="news-image">
									<img src="https://wadaangroup.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-16-at-5.12.43-AM-e1744772771222.jpeg" alt="img"  style={{height:'172px'}}/>
									<img src="https://wadaangroup.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-16-at-5.12.43-AM-e1744772771222.jpeg" alt="img" style={{height:'172px'}}/>
								</div>
							</div>
						</div>



						<div
							onClick={() => handleIndex(3)}
							className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
							data-wow-delay=".6s"
							
						>
							<div
								className={
									activeIndex === 3 ? "news-box-items active" : "news-box-items"
								}
								style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",borderRadius:'20px',backgroundColor:'#4A136E'}}
							>
								
								<div className="news-content">
									{/* <ul className="post-list">
										<li>Industry</li>
										<li>07 July 2024</li>
									</ul> */}
									<h4>
										<Link to="/news-details">
										Precision Manufacturing
										</Link>
									</h4>
									<p style={{color:'white'}}>Using advanced technology, we produce high-quality inks and coatings with excellent adhesion and durability.</p>
									{/* <div className="author-items">
										<div className="author-info">
											<img src="assets/img/news/author-3.png" alt="img" />
											<div className="content">
												<h6>Admin</h6>
												<p>Guy Hawkins</p>
											</div>
										</div>
										<Link to="/news-details" className="link-btn">
											Read More <i className="fa-solid fa-arrow-right" />
										</Link>
									</div> */}
								</div>
								<div className="news-image">
									<img src="https://wadaangroup.com/wp-content/uploads/2025/03/2-2.svg" alt="img" />
									<img src="https://wadaangroup.com/wp-content/uploads/2025/03/2-2.svg" alt="img"/>
								</div>
							</div>
						</div>
					
                        



						<div
							onClick={() => handleIndex(3)}
							className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
							data-wow-delay=".6s"
							
						>
							<div
								className={
									activeIndex === 3 ? "news-box-items active" : "news-box-items"
								}
								style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",borderRadius:'20px',backgroundColor:'#4A136E'}}
							>
								
								
								<div className="news-content">
									{/* <ul className="post-list">
										<li>Industry</li>
										<li>07 July 2024</li>
									</ul> */}
								
									<h4>
										<Link to="/news-details">
										Quality Assurance
										</Link>
									</h4>
									<p style={{color:'white'}}>Every product undergoes strict testing to meet industry standards for consistency, curing speed, and longevity.</p>
									{/* <div className="author-items">
										<div className="author-info">
											<img src="assets/img/news/author-3.png" alt="img" />
											<div className="content">
												<h6>Admin</h6>
												<p>Guy Hawkins</p>
											</div>
										</div>
										<Link to="/news-details" className="link-btn">
											Read More <i className="fa-solid fa-arrow-right" />
										</Link>
									</div> */}
								</div>
								<div className="news-image">
									<img src="https://wadaangroup.com/wp-content/uploads/2025/03/COLOR-MATCH.jpg" alt="img"  style={{height:'172px'}}/>
									<img src="https://wadaangroup.com/wp-content/uploads/2025/03/COLOR-MATCH.jpg" alt="img" style={{height:'172px'}}/>
								</div>
							</div>
						</div>   





						<div
							onClick={() => handleIndex(3)}
							className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
							data-wow-delay=".6s"
							
						>
							<div
								className={
									activeIndex === 3 ? "news-box-items active" : "news-box-items"
								}
								style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",borderRadius:'20px',backgroundColor:'#4A136E'}}
							>
								
								<div className="news-content">
									{/* <ul className="post-list">
										<li>Industry</li>
										<li>07 July 2024</li>
									</ul> */}
									<h4>
										<Link to="/news-details">
										Support & Delivery
										</Link>
									</h4>
									<p style={{color:'white'}}>We provide tailored solutions, reliable distribution, and expert technical support for seamless application.</p>
									{/* <div className="author-items">
										<div className="author-info">
											<img src="assets/img/news/author-3.png" alt="img" />
											<div className="content">
												<h6>Admin</h6>
												<p>Guy Hawkins</p>
											</div>
										</div>
										<Link to="/news-details" className="link-btn">
											Read More <i className="fa-solid fa-arrow-right" />
										</Link>
									</div> */}
								</div>
								<div className="news-image">
									<img src="https://wadaangroup.com/wp-content/uploads/2025/03/4-2.svg" alt="img"  style={{height:'172px'}}/>
									<img src="https://wadaangroup.com/wp-content/uploads/2025/03/4-2.svg" alt="img" style={{height:'172px'}}/>
								</div>
							</div>
						</div>

                        


						





						


						
					</div>
				</div>
			</section>
		</>
	)
}
