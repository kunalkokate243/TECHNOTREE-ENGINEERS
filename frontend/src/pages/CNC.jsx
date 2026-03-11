import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/cnc.css";

function CNC() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <h1>CNC / VMC Machining</h1>
          <p>Precision Engineering Solutions</p>
        </div>
      </div>

      <div className="cnc-container">

        {/* INTRO */}
        <div className="machine-section">
          <div className="machine-img">
            <img src="/images/cnc1.jpg" alt="CNC Machine" />
          </div>

          <div className="machine-text">
            <h2>CNC Turning</h2>
            <p>
              CNC turning allows high precision cylindrical components with
              tight tolerances and superior surface finish.
            </p>
          </div>
        </div>

        {/* VMC */}
        <div className="machine-section reverse">
          <div className="machine-img">
            <img src="/images/vmc.jpg" alt="VMC Machine" />
          </div>

          <div className="machine-text">
            <h2>VMC Machining</h2>
            <p>
              Our Vertical Machining Centers deliver complex components with
              exceptional dimensional accuracy.
            </p>
          </div>
        </div>

        {/* BRASS */}
        <div className="machine-section">
          <div className="machine-img">
            <img src="/images/brass.jpg" alt="Brass Components" />
          </div>

          <div className="machine-text">
            <h2>Brass Precision SPM</h2>
            <p>
              Special purpose machines allow high efficiency manufacturing
              of brass precision components.
            </p>
          </div>
        </div>

        {/* QUALITY */}
        <div className="machine-section reverse">
          <div className="machine-img">
            <img src="/images/qc.jpg" alt="Quality Control" />
          </div>

          <div className="machine-text">
            <h2>Quality Control</h2>
            <p>
              Our quality control process ensures the highest standards
              of dimensional accuracy and product reliability.
            </p>
          </div>
        </div>

        {/* PRODUCT GALLERY */}
        <div className="gallery-section">
          <h2>Our Products</h2>

          <div className="gallery-grid">
            <img src="/images/p1.jpg" alt="product1"/>
            <img src="/images/p2.jpg" alt="product2"/>
            <img src="/images/p3.jpg" alt="product3"/>
            <img src="/images/p4.jpg" alt="product4"/>
            <img src="/images/p5.jpg" alt="product5"/>
            <img src="/images/p6.jpg" alt="product6"/>
            <img src="/images/p7.jpg" alt="product7"/>
            <img src="/images/p8.jpg" alt="product8"/>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="cta-bar">
        <h2>Got a project? Let's talk</h2>
        <button onClick={() => window.location.href="/contact"}>
          Contact Us
        </button>
      </div>

      <Footer />

    </>
  );
}

export default CNC;