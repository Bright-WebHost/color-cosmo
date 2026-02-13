import Layout from "../components/layout/Layout"
import About2 from "../components/sections/About2"
import Achivements from "../components/sections/Achivements"
import Brand2 from "../components/sections/Brand2"
import CtaBanner2 from "../components/sections/CtaBanner2"
import Hero2 from "../components/sections/Hero2"
import News2 from "../components/sections/News2"
import Pricing from "../components/sections/Pricing"
import Project2 from "../components/sections/Project2"
import Service2 from "../components/sections/Service2"
import Team2 from "../components/sections/Team2"
import Testimonial2 from "../components/sections/Testimonial2"
export default function Products() {
    return (
        <>
               <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Products" tagline='Consistency. Performance. Reliability.'>
                <About2 />
            </Layout>
        </>
    )
}
