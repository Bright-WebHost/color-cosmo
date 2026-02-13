import Layout from "../components/layout/Layout"
import About1 from "../components/sections/About1"
import Achivements from "../components/sections/Achivements"
import Brand1 from "../components/sections/Brand1"
import News1 from "../components/sections/News1"
import News2 from "../components/sections/News2"
import Service1 from "../components/sections/Service1"
import Team1 from "../components/sections/Team1"
import Testimonial1 from "../components/sections/Testimonial1"
import Whatsapp from "../components/sections/Whatsapp"
export default function About() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us" tagline="Your Color. Our Identity." >
				{/* <About1 /> */}
			<br/>
				<News1 />
			
				{/* <Achivements /> */}
				{/* <Testimonial1 /> */}
				{/* <News2 /> */}
				{/* <Service1 /> */}
				{/* <Team1 /> */}
				<div style={{margin:'20px'}}></div>
				<Brand1 />
				<Whatsapp/>
			</Layout>
		</>
	)
}
