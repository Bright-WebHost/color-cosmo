
export default function OurSkills2({ alt }) {
	return (
		<>
			<section className={`skills-section fix section-padding ${alt ? "section-bg-2" : " pt-0"}`} style={{ marginTop: window.innerWidth < 768 ? "-100px" : "0px" }}>
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
									{/* <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
										<div className="skills-image">
											<img src="https://wadaangroup.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-16-at-2.46.46-AM.jpeg" alt="img" />
										</div>
									</div> */}
									


									<div className="col-lg-6 wow fadeInUp d-none d-md-block" data-wow-delay=".4s">
										<div className="skills-image">
											<img src="assets/img/allimg/Ourproducts/1.png" alt="img" />
										</div>
									</div>
									<div className="col-lg-6 wow fadeInUp d-none d-md-block" data-wow-delay=".4s">
										<div className="skills-image">
											<img src="assets/img/allimg/Ourproducts/2.png" alt="img" />
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-6 ">
								<div className="skill-content" >
									<div className="section-title">
										
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Color consistency

										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									Color consistency is at the core of our production at Color Cosmo FZC. Each batch is
controlled and verified through spectrophotometric measurement to ensure the exact same
shade, every time. This precision protects your brand identity, ensures your smooth
production and delivers results you can rely on batch after batch.

									</p>
										<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/Ourproducts/1.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/Ourproducts/2.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>
                                    
                                    <section className="about-section fix " id="about">
				
				
				<div className="container">
					<div className="about-wrapper">
						<div className="row g-4">
							
							<div className="col-lg-12">
								<div className="about-content">
									
									
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Minimum Delta E
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Reduced waste and press-side downtime
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Shade reliability
										</li>
									</ul>
									{/* <div className="about-author">
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".2s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
										<img
											src="assets/img/about/signature.png"
											alt="img"
											className="wow fadeInUp"
											data-wow-delay=".4s"
										/>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
								
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			
		</>
	)
}
