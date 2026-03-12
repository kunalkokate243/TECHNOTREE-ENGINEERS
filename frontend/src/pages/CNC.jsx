import "../styles/cnc.css";

function CNC() {
  return (
    <div className="cnc-page">

      {/* HERO VIDEO */}
      <section className="hero-video">
        <div className="video-container">

          <iframe
            src="https://player.vimeo.com/video/1172770867?autoplay=1&muted=1&loop=1&background=1&autopause=0&controls=0"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            title="VMC Machining"
          />

          <div className="video-overlay">
            <h2>VMC Machining</h2>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <h2>We manufacture precision child parts...</h2>
        <p>
          TECHNOTREE manufacture precision child parts. We have inhouse VMC
          and CNC turning centre, MITR, Lathe, Traub-Double drilling,
          Power press, Drilling machines, Vision inspection system, Ultrasonic cleaners, MIG and TIG welding setup and various QC instruments.
          We are an ISO 9001:2015 company and follow QMS for child part manufacturing.
        </p>
      </section>

      {/* CNC TURNING */}
      <section className="gradient-section">
        <div className="content">
          <div className="text">
            <h3>CNC Turning</h3>
            <p>
              Technotree offer reliable CNC Machine Job work service tailored to meet your specific requirement.
              Our aim is to deliver superior quality at competitive pricing to ensure customer satisfaction.
              Inhouse design, machining setup with qualified and experienced staff sets us apart from the competitor.
              We possess the capabilities to deliver results that surpass industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* VMC */}
      <section className="machine-row">
        <div className="text">
          <h3>VMC Machining</h3>
          <p>
            We offer precision milling machining services, our vertical machining centre (VMC)
            is used for milling, drilling, and tapping and is ideal for producing precise components
            for industries such as automotive, food, pharma and aerospace.
            Our inhouse setup of VMC machines will amaze you with our service and quality.
          </p>
        </div>

        <div className="gradient-box">
          <iframe
            src="https://player.vimeo.com/video/1172770867?background=1"
            allow="autoplay; fullscreen; picture-in-picture"
            title="VMC machining"
          ></iframe>
        </div>
      </section>

      {/* BRASS */}
      <section className="gradient-section">
        <div className="content">
          <div className="text">
            <h3>Brass precision SPM</h3>
            <p>
              We have inhouse brass machining facility. Our specially designed machines
              for brass child part manufacturing and vision inspection quality check
              system sets us apart from the competitors. We are proud to serve our
              customers with precision work. We have capability of minimum 0.6mm
              precision drilling and vision inspection.
            </p>
          </div>
        </div>
      </section>

      {/* M1TR */}
      <section className="machine-image">
        <div className="text">
          <h3>M1TR</h3>
          <p>
            Our trained and experienced MITR operators are masters in milling,
            drilling and tapping. We deliver production runs with high quality
            and competitive pricing.
          </p>
        </div>

        <img src="/images/cnc/machine.jpg" alt="MITR machine" />
      </section>

      {/* POWER PRESS */}
      <section className="gradient-section">
        <div className="content">
          <div className="text">
            <h3>Power Press</h3>
            <p>
              Inhouse power press helps us maintain continuous production.
              Machines are equipped with auto-feeders and safety curtains for
              operator safety.
            </p>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="quality">
        <img src="/images/cnc/qc.jpeg" alt="Quality Control" />

        <div className="text">
          <h3>Quality Control</h3>

          <p>
            We at Technotree believe in achieving excellence through continual
            improvement in our system, services, products and processes.
          </p>

          <p>
            <strong>Quality Matters! Our Mission Is To Amaze The Customers...</strong>
          </p>
        </div>
      </section>

      {/* PRODUCT HEADER */}
      <div className="product-header">
        Our developed Precision child parts....
      </div>

      {/* GALLERY */}
      <section className="product-gallery">

        <div className="gallery-grid">
          <img src="/images/cnc/p1.jpg" alt="product1" />
          <img src="/images/cnc/p2.jpg" alt="product2" />
          <img src="/images/cnc/p3.jpg" alt="product3" />
          <img src="/images/cnc/p4.jpg" alt="product4" />
        </div>

      </section>

    </div>
  );
}

export default CNC;