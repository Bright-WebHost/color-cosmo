import Layout from "../components/layout/Layout"
import About1 from "../components/sections/About1"
import Achivements from "../components/sections/Achivements"
import Brand1 from "../components/sections/Brand1"
import Contact from "../components/sections/Contact"
import CtaBanner from "../components/sections/CtaBanner"
import Faq from "../components/sections/Faq"
import Hero1 from "../components/sections/Hero1"
import News1 from "../components/sections/News1"
import OurSkills from "../components/sections/OurSkills"
import OurSkills2 from "../components/sections/OurSkills2"
import Project1 from "../components/sections/Project1"
import Project2 from "../components/sections/Project2"
import Service1 from "../components/sections/Service1"
import Service3 from "../components/sections/Service3"
import Team1 from "../components/sections/Team1"
import Testimonial1 from "../components/sections/Testimonial1"
import Whatsapp from "../components/sections/Whatsapp"
export default function Home() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Hero1 />

				<About1 />
				<OurSkills2/>
			<Brand1 />
			
			<Service3 />
			<Achivements />
				
				{/* <CtaBanner /> */}
				{/* <OurSkills /> */}
				{/* <Project1 /> */}
				<Project2/>
				{/* <Testimonial1 /> */}
			
				{/* <Faq /> */}
				{/* <Team1 /> */}
				<Contact />
				
				{/* <Brand1 /> */}<Whatsapp/>
			</Layout>
		</>
	)
}
