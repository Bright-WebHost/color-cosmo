
export default function OurSkills({ alt }) {
	return (
		<>
			<section className={`skills-section fix section-padding ${alt ? "section-bg-2" : " pt-10"}`}>
				<div className="shape-1 float-bob-x">
					{/* <img src="assets/img/skills/shape-1.png" alt="img" /> */}
				</div>
				<div className="shape-2 float-bob-y">
					{/* <img src="assets/img/skills/shape-2.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="skills-wrapper">
						<div className="row g-4">
							<div className="col-lg-6">
								<div className="row g-4">
									<div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
										<div className="skills-image">
											<img src="assets/img/allimg/14.png" alt="img" />
										</div>
									</div>
{/* 									
									<div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
										<div className="skills-image">
											<img src="assets/img/skills/02.jpg" alt="img" />
										</div>
									</div> */}
								</div>
							</div>
							<div className="col-lg-6">
								<div className="skill-content">
									<div className="section-title">
										{/* <h6 className="wow fadeInUp">
											<i className="fa-regular fa-arrow-left-long" />
											
											<i className="fa-regular fa-arrow-right-long" />
										</h6> */}
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Trusted Expertise in Advanced Ink Solutions

										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									With over a five decades of combined experience, Color Cosmo delivers high-quality inks for diverse packaging applications across the UAE and beyond.
									</p>
									<div className="skill-feature-items">
										<div
											className="skill-feature wow fadeInUp"
											data-wow-delay=".2s"
										>
											<h3 className="box-title">Years of combined experience</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "100%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: 1,
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">50</span>+
													</div>
												</div>
											</div>
										</div>
										<div
											className="skill-feature wow fadeInUp"
											data-wow-delay=".4s"
										>
											<h3 className="box-title">Substrates</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "100%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: 1,
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">10</span>+
													</div>
												</div>
											</div>
										</div>
										<div
											className="skill-feature wow fadeInUp"
											data-wow-delay=".2s"
										>
											<h3 className="box-title">Types of specialized
											inks</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "100%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: 1,
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">4</span>+
													</div>
												</div>
											</div>
										</div>
										<div
											className="skill-feature wow fadeInUp"
											data-wow-delay=".2s"
										>
											<h3 className="box-title">Customization
											inks</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "100%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: 1,
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">100</span>%
													</div>
												</div>
											</div>
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
