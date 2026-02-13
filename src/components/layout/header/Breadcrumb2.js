import { Link } from "react-router-dom"

export default function Breadcrumb2({ tagline }) {
	return (
		<>
			<div
            
				className="breadcrumb-wrapper bg-cover"
				
				// style={{ backgroundImage: 'url("assets/img/breadcrumb-bg.jpg")' }}
			>
				{/* <div className="shape-image float-bob-y">
					<img src="assets/img/allimg/bg/bannershap.png" alt="img" />
				</div> */}
				<div className="container" > 
					<div className="breadcrumb-wrapper-items">
						<div className="page-heading">
							<div className="breadcrumb-sub-title">
								<h3
  className="wow fadeInUp"
  data-wow-delay=".3s"
  style={{
    color: "white",
    marginTop: window.innerWidth <= 768 ? "-160px" : "-60px",
	
    //  marginBottom: window.innerWidth <= 768 ? "-260px" : "-160px",
  }}
>
  {tagline}
</h3>

							</div>
							<ul
								className="breadcrumb-items wow fadeInUp"
								data-wow-delay=".5s"
							>
								{/* <li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<i className="fa-sharp fa-solid fa-slash-forward" />
								</li> */}
								{/* <li>{breadcrumbTitle}</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
