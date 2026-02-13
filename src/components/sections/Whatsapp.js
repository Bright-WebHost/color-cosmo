import React from 'react';

const Whatsapp = () => {
  const pulseStyle = {
    position: 'fixed',
    cursor: 'pointer',
    display: 'block',
    width: '60px',
    height: '60px',
    bottom: '90px',
    right: '20px',
    backgroundColor: '#51CB60',
    color: 'white',
    borderRadius: '50px',
    textAlign: 'center',
    transitionDuration: '0.5s',
    animation: 'pulse-btn 3s infinite',
    zIndex: 9000,
  };

  const iconStyle = {
    position: 'relative',
    zIndex: 20,
    top: '16px',
    fontSize: '30px',
  };

  const keyframes = `
    @keyframes pulse-btn {
      0% {
        box-shadow: 0 0 0 0 #51CB60;
      }
      70% {
        box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={pulseStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#51CB60')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#51CB60')}
      >
        <a
          href="https://wa.me/971589996806" // Correct format: no '+' sign, proper country code
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff' }}
        >
          <i style={iconStyle} className="fab fa-whatsapp" />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
