

import { Link } from 'react-router-dom'

export default function Menu() {
	return (
		<>

			<nav id="mobile-menu" className="d-none d-xl-block">
				<ul>
					{/* <li className="has-dropdown active menu-thumb">
						<Link to="/">
							Home
							<i className="fa-regular fa-plus" />
						</Link>
						<ul className="submenu has-homemenu">
							<li>
								<div className="homemenu-items">
									<div className="homemenu">
										<div className="homemenu-thumb">
											<img
												src="assets/img/header/home-1.jpg"
												alt="img"
											/>
											<div className="demo-button">
												<Link to="/" className="theme-btn">
													Multi Page
												</Link>
												<Link
													to="/index-one"
													className="theme-btn"
												>
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
											<img
												src="assets/img/header/home-2.jpg"
												alt="img"
											/>
											<div className="demo-button">
												<Link
													to="/index-2"
													className="theme-btn"
												>
													Multi Page
												</Link>
												<Link
													to="/index-two"
													className="theme-btn"
												>
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
					</li>
					<li className="has-dropdown active d-xl-none">
						<Link to="/team" className="border-none">
							Home
							<i className="fa-regular fa-plus" />
						</Link>
						<ul className="submenu">
							<li>
								<Link to="/">Home 01</Link>
							</li>
							<li>
								<Link to="/index-2">Home 02</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li className="has-dropdown">
						<Link to="/news">
							Pages
							<i className="fa-regular fa-plus" />
						</Link>
						<ul className="submenu">
							<li>
								<Link to="/team">Our Team</Link>
							</li>
							<li>
								<Link to="/team-details">
									Team Details
								</Link>
							</li>
							<li>
								<Link to="/pricing">Pricing</Link>
							</li>
							<li>
								<Link to="/faq">Faq's</Link>
							</li>
							<li>
								<Link to="/404">404 Page</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/service-details">
							Services
							<i className="fa-regular fa-plus" />
						</Link>
						<ul className="submenu">
							<li>
								<Link to="/service">Services</Link>
							</li>
							<li>
								<Link to="/service-details">
									Service Details
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/project">
							Projects
							<i className="fa-regular fa-plus" />
						</Link>
						<ul className="submenu">
							<li>
								<Link to="/project">Projects</Link>
							</li>
							<li>
								<Link to="/project-details">
									Project Details
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/news">
							News
							<i className="fa-regular fa-plus" />
						</Link>
						<ul className="submenu">
							<li>
								<Link to="/news-grid">News Grid</Link>
							</li>
							<li>
								<Link to="/news">News Standard</Link>
							</li>
							<li>
								<Link to="/news-details">News Details</Link>
							</li>
						</ul>
					</li> */}


					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					
					<li>
						<Link to="/service">Our Services</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

