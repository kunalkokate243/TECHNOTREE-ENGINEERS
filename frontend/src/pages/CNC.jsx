import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/cnc.css";

function CNC() {
  return (
    <>
      <Navbar />

      <div className="cnc-page">

        {/* HERO VIDEO */}
        <section className="hero-video">
          <div className="video-overlay">
            <h2>Sign in to Vimeo to watch this video</h2>
            <button>Sign In</button>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro">
          <h2>We manufacture precision child parts...</h2>
          <p>
            TECHNOTREE manufacture precision child parts. We have inhouse VMC
            and CNC turning centre, MITR, Lathe, Traub-Double drilling,
            Power press, Drilling machines, Vision inspection system, Ultrasonic cleaners, MIG and TIG welding setup and various QC instruments. We are an ISO 9001:2015 company and fallow QMS for child part manufacturing.
          </p>
        </section>

        {/* CNC TURNING */}
        <section className="gradient-section">
          <div className="content">
            <div className="text">
              <h3>CNC Turning</h3>
              <p>
                Technotree offer reliable CNC Machine Job work service tailored to meet your specific requirement. Our aim is to deliver superior quality at competitive pricing to ensure customer satisfaction. Inhouse design, machining setup with qualified and experienced staff sets us apart from the competitor. We possess the capabilities to deliver results that surpass industry standards.
              </p>
            </div>
          </div>
        </section>

        {/* VMC */}
        <section className="machine-row">
          <div className="text">
            <h3>VMC Machining</h3>
            <p>
              We offer precision milling machining services, our vertical machining centre (VMC) is used for a variety of tasks like milling, drilling, and tapping, and is ideal for producing precise components for industries such as automotive, Food, Pharma, aerospace etc...
              Our inhouse setup of VMC machines will amaze you with our service and Quality.
            </p>
          </div>

          <div className="gradient-box"></div>
        </section>

        {/* BRASS */}
        <section className="gradient-section">
          <div className="content">
            <div className="text">
              <h3>Brass precision SPM</h3>
              <p>
                We have inhouse brass machining facility. our specially designed machines for brass child part manufacturing and vision inspection quality check system sets us apart from the competitors. We are proud to serve our customers with precision work. we have a capability of minimum 0.6mm precision drilling and vision inspection. Our bar feeding mechanism can be customised for special requirements.
              </p>
            </div>
          </div>
        </section>

        {/* M1TR */}
        <section className="machine-image">
          <div className="text">
            <h3>M1TR</h3>
            <p>
              Our trained and experienced MITR operators are master in
              milling, drilling and tapping. We do your production run at best quality and competitive pricing. SPM manufacturing is convenient with these inhouse maching capability, this reduces our production lead time and help to serve you JIT.
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
                Inhouse power press help us to get the press operations done at our continuous production. Machines are equipped with auto-feeder and safety curtons for operators safety. Our press machine production capacity is enhanced with pneumatic auto-feeders. We custom make your child parts and sub-assemblies at high volumes with better quality production.
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
              We at Technotree believe in achieving excellence through continual improvement in our system, services, products and processes. We are committed to provide high quality products on time and ensure to satisfy needs and expectations of customers.
              We do 100% inspections and Quality check. Our QC department is qualified and experience in the field. we are equipped with modern quality check instruments and gadgets. We are a ISO 9001:2015 company having quality management system (QMS). We do lean manufacturing and stick to our Quality policy.

              <p><strong>Quality Matters! Our Mission Is To Amaze The Customers...</strong></p>
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
            <img src="/images/cnc/p2.png" alt="product2" />
            <img src="/images/cnc/p3.jpg" alt="product3" />
            <img src="/images/cnc/p4.jpg" alt="product4" />
          </div>
        </section>

        {/* CTA */}
        <section className="contact-box">
          <img src="/images/cnc/person.png" alt="Contact person" />

          <div className="contact-card">
            <h3>TALK TO US !</h3>
            <p>
              We are always open to talk about your business, new projects, creative opportunities and how we can help each other and grow together.
              Your Trust and our commitment builds a better world !
            </p>

            <button onClick={() => window.location.href = "/contact"}>
              Contact Us
            </button>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default CNC;