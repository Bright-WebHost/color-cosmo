import { Link } from "react-router-dom"

export default function Service4() {
  const services = [
    {
      id: 1,
      title: "Color Matching",
      description: "We provide precise color calibration services using advanced spectrophotometric technology to ensure your printed materials, products, and designs achieve the exact shade you require. Our expert color management and controlled workflows maintain consistent accuracy across different substrates and production processes, delivering vibrant, repeatable, and brand-true results every time. ",
      icon: "fa-sharp fa-solid fa-swatchbook",
      features: ["Advanced Color Technology", "Consistent Results", "All Materials Supported"],
      gradient: "linear-gradient(135deg, #4A136E, #2A9DF4)",
      image: "assets/img/allimg/service/1.webp",
      link: "/contact"
    },
    {
      id: 2,
      title: "Custom Made Inks",
      description: "We can develop application-specific ink systems—UV/UV-LED, water-based, or solvent— precisely tuned to your required shade, opacity, viscosity, adhesion, and curing profile for the target substrates and printing methods. Through controlled lab trials and press trials we can validate stability and printability, ensuring reliable color accuracy, durability and production ready performance on every run.",
      icon: "fa-solid fa-paintbrush-pencil",
      features: ["Tailored Formulations", "Eco-Friendly Options", "Enhanced Durability"],
      gradient: "linear-gradient(135deg, #4CAF50, #2196F3)",
      image: "assets/img/allimg/service/2.webp",
      link: "/contact"
    },
    {
      id: 3,
      title: "Quality Assurance and Quality Control",
      description: "Each ink batch is validated through vigilant lab testing at every step of production to ensure quality assurance. We test for uniformity of color strength and viscosity, curing, adhesion and shelf-life set according to the customer standards.",
      icon: "fas fa-headset",
      features: ["24/7 Expert Support", "Quick Problem Resolution", "Performance Optimization"],
      gradient: "linear-gradient(135deg, #4A136E, #2A9DF4)",
      image: "assets/img/allimg/service/3.webp",
      link: "/contact"
    },
    {
      id: 4,
      title: "Customer Support",
      description: "We offer tailored implementation support along with press-side and remote assistance to ensure seamless production and optimized performance from start to finish. Our experts work closely with you to maximize efficiency and achieve consistent, high-quality results.",
      icon: "fa-solid fa-sun",
      features: ["Fast Curing Times", "Superior Durability", "Eco-Friendly Solution"],
      gradient: "linear-gradient(135deg, #4CAF50, #2196F3)",
      image: "assets/img/allimg/service/5.png",
      link: "/contact"
    },
    {
      id: 5,
      title: "Research & Development",
      description: "At Color Cosmo, we are committed to continuous growth and innovation. Our Research and Development team is dedicated to enhancing ink performance and developing new products that add real value for our customers. We also provide tailor-made solutions, customized to meet each client's unique requirements and ensure optimal results.",
      icon: "fa-solid fa-award",
      features: ["Rigorous Testing", "Batch Certification", "Consistent Quality"],
      gradient: "linear-gradient(135deg, #4A136E, #2A9DF4)",
      image: "assets/img/allimg/service/4.png",
      link: "/contact"
    }
  ];

  return (
    <>
      <section className="creative-services" style={{ 
        background: 'linear-gradient(135deg, #4A136E 0%, #2D1B69 50%, #1A237E 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0',
        marginTop: window.innerWidth <= 768 ? "-70px" : "0",
      }}>
        {/* Animated Background Elements */}
        <div className="bg-animation">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="pulse-dot dot-1"></div>
          <div className="pulse-dot dot-2"></div>
          <div className="pulse-dot dot-3"></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header text-center">
            <h2 className="section-title" style={{
              color: 'white',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '700',
              lineHeight: '1.2',
              margin: '20px 0',
              background: 'linear-gradient(45deg, #FFFFFF, #E0E0E0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
             Engineered coatings and inks for superior <br />
              <span style={{
                background: 'linear-gradient(45deg, #FFD700, #FF6B00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>performance and standout visuals</span>
            </h2>

            <p className="section-description" style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto 60px',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Custom colors, specialty finishes, and UV/UV-LED inks backed by cutting-edge technology and premium quality
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '50px'
          }}>
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card"
                style={{
                  background: service.gradient,
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '20px',
                  padding: '30px',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              >
                {/* Service Image */}
                <div className="service-image" style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Service Content */}
                <div className="service-content" style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    lineHeight: '1.3'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '0.95rem'
                  }}>
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <Link 
                    to={service.link}
                    className="service-cta" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      padding: '12px 25px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255,255,255,0.3)',
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: 2,
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      const icon = e.target.querySelector('i');
                      if (icon) {
                        icon.style.transform = 'translateX(5px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const icon = e.target.querySelector('i');
                      if (icon) {
                        icon.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    Get This Service
                    <i className="fa-solid fa-arrow-right" style={{ 
                      marginLeft: '8px',
                      transition: 'transform 0.3s ease'
                    }} />
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className="corner-decoration" style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.2) 50%)',
                  borderBottomLeftRadius: '20px'
                }}></div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .creative-services {
            min-height: 100vh;
          }

          .bg-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .floating-shape {
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.03);
            animation: float 6s ease-in-out infinite;
          }

          .shape-1 {
            width: 200px;
            height: 200px;
            top: 10%;
            left: 5%;
            animation-delay: 0s;
          }

          .shape-2 {
            width: 150px;
            height: 150px;
            top: 60%;
            right: 10%;
            animation-delay: 2s;
          }

          .shape-3 {
            width: 100px;
            height: 100px;
            bottom: 20%;
            left: 15%;
            animation-delay: 4s;
          }

          .pulse-dot {
            position: absolute;
            width: 8px;
            height: 8px;
            background: rgba(255,255,255,0.5);
            border-radius: 50%;
            animation: pulse 2s infinite;
          }

          .dot-1 {
            top: 30%;
            right: 20%;
            animation-delay: 1s;
          }

          .dot-2 {
            bottom: 40%;
            left: 25%;
            animation-delay: 1.5s;
          }

          .dot-3 {
            top: 70%;
            right: 30%;
            animation-delay: 2s;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }

          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }

          @media (max-width: 768px) {
            .creative-services {
              padding: 60px 0 !important;
            }
            
            .services-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            
            .service-card {
              padding: 20px !important;
            }
          }

          @media (max-width: 480px) {
            .section-title {
              font-size: clamp(1.5rem, 6vw, 2.5rem) !important;
            }
            
            .service-image {
              height: 150px !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}