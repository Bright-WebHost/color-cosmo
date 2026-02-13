import Counter1 from "./Counter1"

export default function Achivements() {
	return (
		<>
			<section
				className="achivements-section fix section-bg-2 section-padding bg-cover"
				style={{
					backgroundImage: 'url("assets/img/achivements-bg-shape.png")',
				}}
			>
				<div className="container">
					<div className="achivements-wrapper">
						<div className="row g-4 justify-content-between">
							<div className="col-xxl-6 col-xl-6 col-lg-8">
								<div className="achivements-content">
									<div className="section-title">
										{/* <h6 className="wow fadeInUp">
											<i className="fa-regular fa-arrow-left-long" />
											<i className="fa-regular fa-arrow-right-long" />
										</h6> */}
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Driven by Color, Backed by Science
										</h2>
									</div>
									<div><h6 className="wow fadeInUp">
											Achivements
										</h6>
									<p className="mt-3 mt-md-0 wow fadeInUp">
									With over 50 years of combined expertise, we specialize in tailor-made ink solutions for diverse packaging materials and industries.
									</p></div>
									

<br/>

									<div><h6 className="wow fadeInUp">
									Quality You Can Trust
										</h6>
									<p className="mt-3 mt-md-0 wow fadeInUp">
									Our ISO-certified facility, rigorous testing, and high-grade materials ensure consistent performance and customer satisfaction across every order.
									</p></div>

									
									{/* <Counter1 /> */}
								</div>
							</div>
							<div
								className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div className="achivements-content">
								
									<Counter1 />
								</div>
								{/* <div className="achivements-image">
									<img src="assets/img/achivements-image.jpg" alt="img" />
									<div className="achivements-image-2 float-bob-y">
										<img src="assets/img/achivements-image-2.jpg" alt="img" />
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
