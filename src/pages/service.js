import Layout from "../components/layout/Layout"
import Brand1 from "../components/sections/Brand1"
import OurSkills from "../components/sections/OurSkills"
import Service1 from "../components/sections/Service1"
import Service2 from "../components/sections/Service2"
import Service4 from "../components/sections/Service4"
import Whatsapp from "../components/sections/Whatsapp"
export default function Services() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services" tagline='Your Partner in Perfect Prints'>
<br/>
					{/* <Service2 /> */}
					<Service4 />
				{/* <Service1 /> */}
				{/* <Brand1 /> */}
				<OurSkills />
				{/* <Service1 /> */}
				<Whatsapp/>
			</Layout>
		</>
	)
}
