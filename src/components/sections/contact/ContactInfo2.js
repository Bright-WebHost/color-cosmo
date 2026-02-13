import React from "react";

export default function ContactInfo2() {
  return (
    <div className="office-google-map-wrapper" style={{marginTop:'20px'}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.160972784848!2d55.4541967!3d25.408032499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5829bd8da12b%3A0xd5cc43cb6a1da6a2!2sColor%20Cosmo%20FZC!5e1!3m2!1sen!2sin!4v1745556613754!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
