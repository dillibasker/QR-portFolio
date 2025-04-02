import { QRCodeCanvas } from "qrcode.react"; // Correct named import

function App() {
  const portFolio = "https://portfolio-three-rho-51.vercel.app/";
  
  return (
    <>
      <div className="qr-universe">
        <div className="coin coin-1"></div>
        <div className="coin coin-2"></div>
        <div className="coin coin-3"></div>
        <div className="coin coin-4"></div>
        <div className="coin coin-5"></div>
        <div className="coin coin-6"></div>
        
        <div className="qr-card">
          <div className="neon-border"></div>
          <h2 className="qr-title">Scan My Portfolio</h2>
          <div className="qr-code-wrapper">
            <QRCodeCanvas 
              value={portFolio} 
              size={180}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
          </div>
          <p className="qr-description">Scan to see my awesome work!</p>
          <a href={portFolio} className="cyber-button">
            <span className="cyber-button-text">Visit Site</span>
            <span className="glitch"></span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');
        
        .qr-universe {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(45deg, #0f0c29, #302b63, #24243e);
          perspective: 1000px;
          overflow: hidden;
          position: relative;
          font-family: 'Orbitron', sans-serif;
        }
        
        .coin {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(145deg, #ffdf00, #ffbb00);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(255, 223, 0, 0.8), 
                      inset 0 0 10px rgba(255, 255, 255, 0.5);
          animation: float 10s infinite linear;
          z-index: 1;
          transform-style: preserve-3d;
        }
        
        .coin::before {
          content: '$';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #ffdf00;
          font-size: 24px;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
        
        .coin-1 {
          top: 15%;
          left: 20%;
          animation-duration: 15s;
          animation-delay: 0s;
        }
        
        .coin-2 {
          top: 70%;
          left: 15%;
          animation-duration: 18s;
          animation-delay: 1s;
        }
        
        .coin-3 {
          top: 25%;
          right: 15%;
          animation-duration: 20s;
          animation-delay: 2s;
        }
        
        .coin-4 {
          top: 60%;
          right: 20%;
          animation-duration: 17s;
          animation-delay: 3s;
        }
        
        .coin-5 {
          top: 40%;
          left: 10%;
          animation-duration: 19s;
          animation-delay: 4s;
        }
        
        .coin-6 {
          top: 80%;
          right: 30%;
          animation-duration: 16s;
          animation-delay: 5s;
        }
        
        @keyframes float {
          0% {
            transform: translateZ(0) translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateZ(100px) translateX(50px) translateY(-30px) rotate(90deg);
          }
          50% {
            transform: translateZ(0) translateX(100px) translateY(0) rotate(180deg);
          }
          75% {
            transform: translateZ(-50px) translateX(50px) translateY(30px) rotate(270deg);
          }
          100% {
            transform: translateZ(0) translateX(0) translateY(0) rotate(360deg);
          }
        }
        
        .qr-card {
          position: relative;
          background: rgba(20, 20, 40, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          max-width: 360px;
          transform-style: preserve-3d;
          transform: rotateX(5deg);
          animation: cardFloat 6s infinite ease-in-out;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5),
                      0 0 0 2px rgba(88, 104, 240, 0.5);
          z-index: 10;
        }
        
        @keyframes cardFloat {
          0%, 100% {
            transform: rotateX(5deg) translateY(0);
          }
          50% {
            transform: rotateX(8deg) translateY(-20px);
          }
        }
        
        .neon-border {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 25px;
          background: linear-gradient(90deg, #ff00cc, #3333ff, #00ccff, #ff00cc);
          background-size: 400% 400%;
          z-index: -1;
          animation: neonGlow 10s ease infinite;
          opacity: 0.7;
          filter: blur(10px);
        }
        
        @keyframes neonGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .qr-title {
          color: #ffffff;
          font-size: 26px;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 10px #3333ff, 0 0 20px #3333ff;
        }
        
        .qr-code-wrapper {
          background: white;
          border-radius: 15px;
          padding: 15px;
          display: inline-block;
          margin-bottom: 25px;
          position: relative;
          transform-style: preserve-3d;
          animation: qrPulse 4s infinite ease-in-out;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        
        @keyframes qrPulse {
          0%, 100% {
            transform: translateZ(0px);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
          }
          50% {
            transform: translateZ(10px);
            box-shadow: 0 0 30px rgba(102, 204, 255, 0.8);
          }
        }
        
        .qr-description {
          color: #ccccff;
          font-size: 16px;
          margin-bottom: 30px;
          letter-spacing: 1px;
        }
        
        .cyber-button {
          position: relative;
          display: inline-block;
          padding: 15px 30px;
          background: transparent;
          border: 2px solid #00ccff;
          border-radius: 8px;
          color: #ffffff;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 2px;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s;
          z-index: 1;
        }
        
        .cyber-button:before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: all 0.5s;
          z-index: -1;
        }
        
        .cyber-button:hover:before {
          left: 100%;
        }
        
        .cyber-button:hover {
          background: #00ccff;
          color: #000;
          box-shadow: 0 0 20px #00ccff;
          transform: translateY(-5px);
        }
        
        .glitch {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          background: rgba(0, 204, 255, 0.2);
          animation: glitch 2s infinite;
          pointer-events: none;
        }
        
        @keyframes glitch {
          0% {
            opacity: 0;
            transform: translate(0);
          }
          1% {
            opacity: 0.3;
          }
          2% {
            opacity: 0;
            transform: translate(-5px, 5px);
          }
          3% {
            opacity: 0.3;
          }
          4% {
            opacity: 0;
            transform: translate(5px, -5px);
          }
          5% {
            opacity: 0.3;
          }
          6% {
            opacity: 0;
            transform: translate(-5px, -5px);
          }
          7% {
            opacity: 0.3;
          }
          8% {
            opacity: 0;
            transform: translate(0);
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default App;