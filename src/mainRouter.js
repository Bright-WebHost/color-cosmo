import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import About from "./pages/about.js"
// import Blog from "./pages/blog.js"
import Contact from "./pages/contact.js"
import Faq from "./pages/faq.js"
import Home from './pages/index'
import Index2 from "./pages/index-2.js"
import IndexOne from "./pages/index-one.js"
import IndexTwo from "./pages/index-two.js"
import NewsDetails from "./pages/news-details.js"
import NewsGrid from "./pages/news-grid.js"
import News from "./pages/news.js"
import Pricing from "./pages/pricing.js"
import ProjectDetails from "./pages/project-details.js"
import Project from "./pages/project.js"
import ServiceDetails from "./pages/service-details.js"
import Service from "./pages/service.js"
import TeamDetails from "./pages/team-details.js"
import Team from "./pages/team.js"
import NotFound from "./pages/404.js"
import Products from './pages/products.js'


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function MainRouter() {
	return (
		<>
			<BrowserRouter  >
								 <ScrollToTop />
				<Routes>

					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					{/* <Route path="/blog" element={<Blog />} /> */}
					<Route path="/contact" element={<Contact />} />
					<Route path="/products" element={<Products />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/index-2" element={<Index2 />} />
					<Route path="/index-one" element={<IndexOne />} />
					<Route path="/index-two" element={<IndexTwo />} />
					<Route path="/news-details" element={<NewsDetails />} />
					<Route path="/news-grid" element={<NewsGrid />} />
					<Route path="/news" element={<News />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/project-details" element={<ProjectDetails />} />
					<Route path="/project" element={<Project />} />
					<Route path="/service-details" element={<ServiceDetails />} />
					<Route path="/service" element={<Service />} />
					<Route path="/team-details" element={<TeamDetails />} />
					<Route path="/team" element={<Team />} />
					<Route path="/404" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
