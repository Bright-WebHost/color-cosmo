import { Link } from "react-router-dom"
import Menu from "../Menu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas, isSearch, handleSearch }) {
	return (
		<>
			<header className="header-section-2">
				<div className="container-fluid">
					<div className="header-top-wrapper-2">
						<ul className="contact-list">
							<li>
								<i className="far fa-envelope" />
								<Link to="/mailto:info@example.com">info@example.com</Link>
							</li>
							<li>
								<i className="fa-sharp fa-solid fa-location-dot" />
								4648 Rocky, New York
							</li>
							<li>
								<i className="fa-regular fa-phone" />
								<Link to="/tel:2086660112">+208-666-0112</Link>
							</li>
						</ul>
						<div className="top-right">
							<ul className="text-list">
								<li>
									<Link to="/contact">Privacy Policy</Link>
								</li>
								<li>
									<Link to="/contact">Terms &amp; Conditions</Link>
								</li>
							</ul>
							<div className="social-icon d-flex align-items-center">
								<Link to="/#">
									<i className="fab fa-facebook-f" />
								</Link>
								<Link to="/#">
									<i className="fab fa-twitter" />
								</Link>
								<Link to="/#">
									<i className="fab fa-youtube" />
								</Link>
								<Link to="/#">
									<i className="fab fa-linkedin-in" />
								</Link>
							</div>
						</div>
					</div>
					<div id="header-sticky" className={`header-2 ${scroll ? "sticky" : ""}`}>
						<div className="mega-menu-wrapper">
							<div className="header-main">
								<div className="header-left">
									<div className="logo">
										<Link to="/" className="header-logo">
											<img
												src="assets/img/logo/black-logo.svg"
												alt="logo-img"
											/>
										</Link>
									</div>
								</div>
								<div className="header-right d-flex justify-content-end align-items-center">
									<div className="mean__menu-wrapper">
										<div className="main-menu">
											<Menu />
										</div>
									</div>
									<div className="header-button">
										<Link to="/contact" className="theme-btn">
											GAT A QUOTE <i className="fa-regular fa-arrow-right" />
										</Link>
									</div>
									<div className="search-item">
										<a className="search-trigger search-icon" onClick={handleSearch}>
											<i className="fal fa-search" />
										</a>
										<div className="header__hamburger d-xl-block my-auto">
											<div className="sidebar__toggle" onClick={handleOffCanvas}>
												<i className="fas fa-bars" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
