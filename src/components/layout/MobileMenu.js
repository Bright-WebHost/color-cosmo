
import { useState } from 'react'
import { Link } from "react-router-dom"

export default function MobileMenu() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return <>
		<div className="mobile-menu fix mb-3 mean-container">
			<div className="mean-bar">
				<Link to="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
					<span>
						<span>
							<span />
						</span>
					</span>
				</Link>
				<nav className="mean-nav">
					<ul>
						{/* <li className="has-dropdown active menu-thumb">
							<Link to="/">
								Home
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu has-homemenu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
								<li>
									<div className="homemenu-items">
										<div className="homemenu">
											<div className="homemenu-thumb">
												<img src="assets/img/header/home-1.jpg" alt="img" />
												<div className="demo-button">
													<Link to="/" className="theme-btn">
														Multi Page
													</Link>
													<Link to="/index-one" className="theme-btn">
														One Page
													</Link>
												</div>
											</div>
											<div className="homemenu-content text-center">
												<h4 className="homemenu-title">
													Home 01
												</h4>
											</div>
										</div>
										<div className="homemenu">
											<div className="homemenu-thumb mb-15">
												<img src="assets/img/header/home-2.jpg" alt="img" />
												<div className="demo-button">
													<Link to="/index-2" className="theme-btn">
														Multi Page
													</Link>
													<Link to="/index-two" className="theme-btn">
														One Page
													</Link>
												</div>
											</div>
											<div className="homemenu-content text-center">
												<h4 className="homemenu-title">
													Home 02
												</h4>
											</div>
										</div>
									</div>
								</li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(1)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li className="has-dropdown active d-xl-none">
							<Link to="/team" className="border-none">
								Home
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
								<li><Link to="/">Home 01</Link></li>
								<li><Link to="/index-2">Home 02</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(2)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						
						<li className="has-dropdown">
							<Link to="/news">
								Pages
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
								<li><Link to="/team">Our Team</Link></li>
								<li><Link to="/team-details">Team Details</Link></li>
								<li><Link to="/pricing">Pricing</Link></li>
								<li><Link to="/faq">Faq's</Link></li>
								<li><Link to="/404">404 Page</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(3)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li>
							<Link to="/service-details">
								Services
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
								<li><Link to="/service">Services</Link></li>
								<li><Link to="/service-details">Service Details</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(4)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li>
							<Link to="/project">
								Projects
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
								<li><Link to="/project">Projects</Link></li>
								<li><Link to="/project-details">Project Details</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(5)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li>
							<Link to="/news">
								Blog
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
								<li><Link to="/news-grid">Blog Grid</Link></li>
								<li><Link to="/news">Blog Standard</Link></li>
								<li><Link to="/news-details">Blog Details</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(6)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li> */}
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About </Link>
						</li>
						<li>
							<Link to="/products">products</Link>
						</li>
						<li>
							<Link to="/service">our service</Link>
						</li>
						
						<li className="mean-last">
							<Link to="/contact">Contact Us</Link>
						</li>
					</ul>
				</nav></div></div>

	</>
}
