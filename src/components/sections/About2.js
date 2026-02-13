
import { useEffect, useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Link, useLocation } from "react-router-dom"
import "../../../node_modules/react-modal-video/css/modal-video.css"
export default function About2() {
	const [isOpen, setOpen] = useState(false)
const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Remove state so refresh doesn't scroll again
        window.history.replaceState({}, document.title, "/products");
      }
    }
  }, [location]);

	return (
		<>
		{/* 1 */}
		<div id='test'>
		<section className="about-section fix section-padding" id="about">
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y ">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-2">
							<div className="col-lg-6">
								<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/7.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/Ourproducts/1/1.png" alt="img" />
									</div>
									{/* <div className="video-items wow fadeInUp">
										<a
											onClick={() => setOpen(true)}
											className="video-btn video-popup"
										>
											<i className="fas fa-play" />
										</a>
										<a
											onClick={() => setOpen(true)}
											className="video-text video-popup"
										>
											play now
										</a>
									</div> */}
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								
								</div>
								
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										{/* <h6 className="wow fadeInUp d-none d-md-flex">
											<i className="fa-regular fa-arrow-left-long" />
											<i className="fa-regular fa-arrow-right-long" />
										</h6> */}
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										
										UV Offset Printing Inks
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									Our advanced UV ink systems are engineered for unrivaled adhesion on challenging
                                 	plastic substrates like PVC, PET, polycarbonate, acrylic, and even treated PE/PP.
									Whether you're decorating cosmetic packaging, labeling consumer goods, or producing
									outdoor signage, our ink delivers sharp definition and high color depth every single time
									</p>

									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/7.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p1.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>


									
									<div className="row g-4 mt-3">
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Applicable Substrates
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PVC
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PET
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Polycarbonate
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Acrylics

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Treated HDPE and PP 
										</li>
										
									</ul>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Color Availability
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
										
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cyan
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Magenta
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Yellow
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Black

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Pantone Shades
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Bespoke Color Matching
										</li>
									</ul>

										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Packaging Size
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
										
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											1 kg Black Plastic Container
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											5 kg Black Plastic Container
										</li>
										
									</ul>

										</div>
									</div>
									
									{/* <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
									<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
									UV Offset Printing Inks
										</h3>
										<br/>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Footboard
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cardboard
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Metalized Board
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PE Coated Paper

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PP Coated Paper
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Coated Metals
										</li>
									</ul> */}
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
		{/* 1 */}



{/* 2 */}
<div id='test2'>
<section className="about-section fix section-padding" id="about"  style={{marginTop:'-130px'}}>
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
						
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											{/* <i className="fa-regular fa-arrow-left-long" />
											About Our Company
											<i className="fa-regular fa-arrow-right-long" /> */}
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
								
										UV / UV-LED Based Screen
Printing Ink
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									
								Our advanced UV ink systems are engineered for unrivaled adhesion on challenging
plastic substrates like PVC, PET, polycarbonate, acrylic, and even treated PE/PP.
Whether you're decorating cosmetic packaging, labeling consumer goods, or producing
outdoor signage, our ink delivers sharp definition and high color depth every single time.


									</p>
									
									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/1.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p2.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>


									{/* <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<h4 className="wow fadeInUp" data-wow-delay=".2s">
										
Key Features & Product Range :-
										</h4>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Gloss Varnish – For high-shine finishes that enhance color and visual depth

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Matt Varnish – For a smooth, elegant, non-reflective finish


										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Soft-Touch Varnish – Velvety texture ideal for luxury packaging

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Drip-Off / Reticulated Varnish – Creates contrast effects between gloss and
matt areas



										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											UV-Curable Varnishes – Instant drying with high durability and clarity


										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Food-Safe Varnishes – Low migration, compliant with global food packaging
standards



										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Anti-Scratch & Anti-Scuff Coatings – Added protection for high-contact
packaging


										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Custom Formulations – Tailored solutions based on substrate, print method,
or compliance needs

										</li>

									</ul> */}

	<div className="row g-4 mt-3">
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Applicable Substrates
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PVC
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PET
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Polycarbonate
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Acrylics

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Treated HDPE and PP 
										</li>
										
									</ul>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Color Availability
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
										
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cyan
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Magenta
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Yellow
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Black

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Pantone Shades
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Bespoke Color Matching
										</li>
									</ul>

										</div>
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Properties
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
										
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Excellent Adhesion
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Low Shrinkage
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Excellent Chemical Resistance
										</li>
										
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											High Lightfastness
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											High Scratch and Abrasion Resistance
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
										Low Odor
										</li>
										
									</ul>

										</div>
									</div>
									
									{/* <div className="row g-4 mt-3">
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
											<div className="icon-items">
												<div className="icon">
												<i className="far fa-dot-circle" />
												</div>
												<h5>Electronics (circuit boards, touch panels)

												</h5>
											</div>
										</div>
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
												<i className="far fa-dot-circle" />
												</div>
												<h5>Signage & promotional items
												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
												<i className="far fa-dot-circle" />
												</div>
												<h5>Automotive & industrial labels

												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Glass, metal & plastic printing
												</h5>
											</div>
										</div>
									</div> */}
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div className="col-lg-6">
								<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/1.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/Ourproducts/1/2.png" alt="img" />
									</div>
									
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
{/* 2 */}












{/* 3 */}
<div id='test3'>
			<section className="about-section fix section-padding" id="about" style={{marginTop:'-130px'}} >
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
							<div className="col-lg-6">

								<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/6.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/products/1/3.png" alt="img" />
									</div>
									{/* <div className="video-items wow fadeInUp">
										<a
											onClick={() => setOpen(true)}
											className="video-btn video-popup"
										>
											<i className="fas fa-play" />
										</a>
										<a
											onClick={() => setOpen(true)}
											className="video-text video-popup"
										>
											play now
										</a>
									</div> */}
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div> 
								</div> 
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										{/* <h6 className="wow fadeInUp d-none d-md-flex">
											<i className="fa-regular fa-arrow-left-long" />
											<i className="fa-regular fa-arrow-right-long" />
										</h6> */}
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Dry Offset Inks
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									Color Cosmo’s UV-based Dry Offset Inks are specially formulated for rigid plastic containers. Free from ITX and Benzo, they’re ideal for pharmaceutical, cosmetic, food, and dairy packaging applications
									</p>

									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/6.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p3.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>
									<div className="row g-4 mt-3">
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Applications
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Poly Styrene (PS) Container

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Poly Propylene (PP) Containers

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											High Density Poly Ethylene Containers
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Poly Ethylene (PET) Containers

										</li>
										
									</ul>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Color Availability
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
									
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cyan
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Magenta
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Yellow
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Black

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Pantone Matching System
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Bespoke Color Matching
										</li>
									</ul>

										</div>
									</div>
									{/* <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Proactively pontificate client-centered relationships
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Is there a waiting list for desired work to be started
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Release of Letraset sheets containing Lorem Ipsum
										</li>
									</ul> */}
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
{/* 3 */}









			












		












			{/* 4 */}
			<div id='test4'>
			<section className="about-section fix section-padding" id="about" style={{marginTop:'-130px'}}>
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
						
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											{/* <i className="fa-regular fa-arrow-left-long" />
											Letterpress Inks
											<i className="fa-regular fa-arrow-right-long" /> */}
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Letterpress Inks
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
					

Color Cosmo’s UV Letterpress Inks are ITX and Benzo-free, formulated for seamless application on tubes and aggressive surfaces—ideal for cosmetics, pharmaceuticals, food, and industrial packaging.
									</p>


									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/8.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p4.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>
									<div className="row g-4 mt-3">
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Applications
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Laminated Tubes


										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Seamless Tubes

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Aluminum Tubes
										</li>
										
										
									</ul>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Color Availability
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cyan
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Magenta
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Yellow
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Black

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Pantone Matching System
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Bespoke Color Matching
										</li>
									</ul>

										</div>
									</div>
									{/* <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Proactively pontificate client-centered relationships
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Is there a waiting list for desired work to be started
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Release of Letraset sheets containing Lorem Ipsum
										</li>
									</ul> */}
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div className="col-lg-6">
							<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/8.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/products/1/9.png" alt="img" />
									</div>
									
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
			</div>

			{/* 4 */}












			{/* 5 */}
			<div id='test5'>
			<section className="about-section fix section-padding" id="about" style={{marginTop:'-130px'}}>
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
							<div className="col-lg-6">
							<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/2.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/Ourproducts/1/4.png" alt="img" />
									</div>
									{/* <div className="video-items wow fadeInUp">
										<a
											onClick={() => setOpen(true)}
											className="video-btn video-popup"
										>
											<i className="fas fa-play" />
										</a>
										<a
											onClick={() => setOpen(true)}
											className="video-text video-popup"
										>
											play now
										</a>
									</div> */}
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										{/* <h6 className="wow fadeInUp d-none d-md-flex">
											<i className="fa-regular fa-arrow-left-long" />
											<i className="fa-regular fa-arrow-right-long" />
										</h6> */}
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Solvent based screen printing ink
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									For projects requiring deep material penetration and exceptional durability, our solvent-based screen printing delivers time-tested performance on challenging surfaces.
									</p>

									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/2.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p5.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>
									
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
									<h4 className="wow fadeInUp" data-wow-delay=".2s">
										Solvent based screen printing ink
										</h4><br/>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Deep Material Bonding – Ink penetrates surfaces for unmatched adhesion

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Weather-Resistant – Withstands outdoor conditions (UV, rain, temperature extremes)

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Vibrant & Opaque – Rich color saturation even on dark materials

										</li>
									</ul>

									<div className="row g-4 mt-3">
									<h4 className="wow fadeInUp" data-wow-delay=".2s">
									 Applications
										</h4>
										<div className="col-lg-12 wow fadeInUp mt-0" data-wow-delay=".2s">
												<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
												<li>
													<i className="fa-solid fa-circle-check" />
													PP & HDPE Products (Jerry cans, Plastic Jars, Plastic Barrels)
												</li>
												<li>
													<i className="fa-solid fa-circle-check" />
												Paper and Plastic Cups
												</li>
												<li>
													<i className="fa-solid fa-circle-check" />
												Glass bottles (Food, Cosmetics and Perfumes)
												</li>
												<li>
													<i className="fa-solid fa-circle-check" />
												 Metal Barrels
												</li>
												<li>
													<i className="fa-solid fa-circle-check" />
												Industrial Labels and Safety Markings
												</li>
												</ul>
										</div>
											{/* <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
												<li>
													<i className="fa-solid fa-circle-check" />
													Vehicle Wraps & Fleet Graphics
												</li>
												</ul>
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Industrial Labels & Safety Markings
												</h5>
											</div>
										</div>
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Promotional Products (flags, tents, awnings)
												</h5>
											</div>
										</div> */}
									</div>
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
{/* 5 */}



{/* 6 */}
<div id='test6'>
<section className="about-section fix section-padding" id="about"  style={{marginTop:'-130px'}}>
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
						
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											{/* <i className="fa-regular fa-arrow-left-long" />
											Letterpress Inks
											<i className="fa-regular fa-arrow-right-long" /> */}
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										UV OVP Varnishes
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									At Color Cosmo FZC, we manufacture high-performance overprint varnishes that
              						enhance both the look and durability of printed materials. From high-gloss brilliance to
									matte elegance, our OPVs are formulated for offset, screen, and flexo printing, offering
									fast drying, scuff resistance, and food-safe options—delivering a flawless finish, every
									time.




									</p>
									{/* <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
					
									UV varnishing is an advanced coating technique that cures instantly under UV light, creating a protective and visually striking layer.


									</p> */}

									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/Ourproducts/3.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p6.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>
									
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<h4 className="wow fadeInUp" data-wow-delay=".2s">
										
Key Features & Product Range
										</h4>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Gloss Varnish – For high-shine finishes that enhance color and visual depth

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Matt Varnish – For a smooth, elegant, non-reflective finish


										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Soft-Touch Varnish – Velvety texture ideal for luxury packaging

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Drip-Off / Reticulated Varnish – Creates contrast effects between gloss and
matt areas



										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											UV-Curable Varnishes – Instant drying with high durability and clarity


										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Food-Safe Varnishes – Low migration, compliant with global food packaging
standards



										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Anti-Scratch & Anti-Scuff Coatings – Added protection for high-contact
packaging


										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Custom Formulations – Tailored solutions based on substrate, print method,
or compliance needs

										</li>

									</ul>
									{/* <div className="row g-4 mt-3">
									<h4 className="wow fadeInUp" data-wow-delay=".2s">
										
Best for :- 
										</h4>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Electronics (circuit boards, touch panels)
												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Signage & promotional items
												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Automotive & industrial labels

												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Glass, metal & plastic printing
												</h5>
											</div>
										</div>
									</div> */}
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div className="col-lg-6">
							<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/Ourproducts/3.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/Ourproducts/1/5.png" alt="img" />
									</div>
									
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
{/* 6 */}


<div id='test7'>
<section className="about-section fix section-padding" id="about" style={{marginTop:'-140px'}}>
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y ">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-2">
							<div className="col-lg-6">
								<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/2/2.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/products/2/1.png" alt="img" />
									</div>
									{/* <div className="video-items wow fadeInUp">
										<a
											onClick={() => setOpen(true)}
											className="video-btn video-popup"
										>
											<i className="fas fa-play" />
										</a>
										<a
											onClick={() => setOpen(true)}
											className="video-text video-popup"
										>
											play now
										</a>
									</div> */}
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								
								</div>
								
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										{/* <h6 className="wow fadeInUp d-none d-md-flex">
											<i className="fa-regular fa-arrow-left-long" />
											<i className="fa-regular fa-arrow-right-long" />
										</h6> */}
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										
										Consumables
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									At Color Cosmo FZC, we go beyond inks—we provide the full range of screen printing,
Offset and Flexo printing consumables that bring your print process to life. Every product
is carefully selected to ensure consistent quality, reduce downtime, and support
professional, high-efficiency printing. With Color Cosmo FZC, your printshop is powered
by a trusted partner in every layer of the process.
									</p>

									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/7.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p1.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>


									
									<div className="row g-4 mt-3">
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Screenprinting Consumables
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
										Screen Mesh 
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Squeegees 
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Emulsions & Emulsion Removers
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Adhesives

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Blackout Solutions & Tapes 
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Screen Wash & Cleaning Agents  
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Degreasers & Haze Removers 
										</li>
										
									</ul>
										</div>
										
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
									UV Offset and Flexo Consumables
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
										
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											UV-Compatible Fountain Solutions

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											UV Washes & Roller Cleaners
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
										UV-Resistant Blankets

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
									UV-Compatible Printing Rollers

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
									UV Offset Plates
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
									Setoff Powders & Coating Additives
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
									UV Lamp & Maintenance Supplies
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
									Sleeves & Cylinders
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
								Doctor Blades
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
								Plate Mounting Tapes
										</li>
										
									</ul>

										</div>
									</div>
									
									{/* <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
									<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
									UV Offset Printing Inks
										</h3>
										<br/>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Footboard
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cardboard
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Metalized Board
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PE Coated Paper

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PP Coated Paper
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Coated Metals
										</li>
									</ul> */}
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>

			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />

		</>
	)
}
