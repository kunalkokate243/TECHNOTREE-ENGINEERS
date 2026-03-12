import React, { useState } from "react";
import "../styles/manufacturing.css";

function Manufacturing() {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/Manufacturing_img/1.png",
    "/images/Manufacturing_img/2.png",
    "/images/Manufacturing_img/3.png",
    "/images/Manufacturing_img/4.png",
    "/images/Manufacturing_img/5.png",
    "/images/Manufacturing_img/6.png",
    "/images/Manufacturing_img/7.png",
    "/images/Manufacturing_img/8.png",
    "/images/Manufacturing_img/9.png",
    "/images/Manufacturing_img/10.png",
    "/images/Manufacturing_img/11.png",
    "/images/Manufacturing_img/12.png",
    "/images/Manufacturing_img/13.png",
    "/images/Manufacturing_img/14.png",
    "/images/Manufacturing_img/15.png",
    "/images/Manufacturing_img/16.png",
    "/images/Manufacturing_img/17.png",
    "/images/Manufacturing_img/18.png",
    "/images/Manufacturing_img/19.png",
    "/images/Manufacturing_img/20.png",
    "/images/Manufacturing_img/21.png",
    "/images/Manufacturing_img/22.png",
    "/images/Manufacturing_img/23.png",
    "/images/Manufacturing_img/24.png",
    "/images/Manufacturing_img/25.png",
    "/images/Manufacturing_img/26.png",
    "/images/Manufacturing_img/27.png"
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="manufacturing-page">

      {/* HERO */}
      <section className="manufacturing-hero">
        <div className="manufacturing-video-overlay">
          <h2>Sign in to Vimeo to watch this video</h2>
          <button>Sign In</button>
        </div>
      </section>


      {/* INTRO */}
      <section className="manufacturing-intro">
        <h2>We're not just building machines, we're building a better future...</h2>

        <p>
          Where ideas become manufactured realities... Technotree Is a Manufacturer
          and Exporter of Special Purpose Machines (SPM), Leak test Machines,
          Ultrasonic cleaning machines, Industrial washing Machines, Fixtures,
          Auto fixtures, Conveyors, Fabrication of Inspection Tables, Trolleys
          and Storage racks. Our focus is on the development of custom made
          special products and child parts for our valuable customers.
        </p>
      </section>



      {/* SPM */}
      <section className="manufacturing-section gradient">

        <div className="manufacturing-grid">

          <div className="manufacturing-text">
            <h3>Special Purpose Machines (SPM)</h3>

            <p>
              Manufacturing Special Purpose Machines (SPM) has become a major
              focus in today’s industry. Our SPMs are designed to increase
              productivity, reduce human error and improve efficiency in
              production processes.
            </p>

            <p>
              Customized solutions are developed according to client
              requirements. These machines provide precision and reliability
              while maintaining high operational efficiency.
            </p>
          </div>

          <div className="manufacturing-image">
            <img src="/images/Manufacturing_img/spm.webp" alt="SPM Machine" />
          </div>

        </div>

      </section>



      {/* ULTRASONIC */}
      <section className="manufacturing-section light">

        <div className="manufacturing-grid reverse">

          <div className="manufacturing-text">
            <h3>Ultrasonic Cleaners</h3>

            <p>
              Ultrasonic cleaners are widely used across industrial sectors.
              These machines use ultrasonic waves to remove contaminants from
              delicate parts.
            </p>

            <p>
              The cleaning process is efficient and suitable for industries like
              Automotive, Food Processing, Chemical and Aerospace.
            </p>
          </div>

          <div className="manufacturing-image">
            <img src="/images/Manufacturing_img/ultrasonic.webp" alt="Ultrasonic" />
          </div>

        </div>

      </section>



      {/* FIXTURES */}
      <section className="manufacturing-section gradient">

        <div className="manufacturing-grid">

          <div className="manufacturing-text">
            <h3>Fixtures / Auto-fixtures</h3>

            <p>
              Fixtures are manufacturing tools designed to hold and locate work
              pieces securely during machining or inspection processes.
            </p>

            <p>
              We provide high precision fixtures that increase production
              accuracy and ensure repeatability in manufacturing.
            </p>
          </div>

          <div className="manufacturing-image">
            <img src="/images/Manufacturing_img/fixture.webp" alt="Fixtures" />
          </div>

        </div>

      </section>



      {/* CHILD PARTS */}
      <section className="manufacturing-section light">

        <div className="manufacturing-grid reverse">

          <div className="manufacturing-text">
            <h3>Precision Child Parts - Sub Assemblies</h3>

            <p>
              As an established CNC and VMC machining company, our extensive
              experience allows us to manufacture precision components and
              sub-assemblies.
            </p>

            <p>
              Our team produces high-quality machined parts meeting strict
              industry requirements with precision and consistency.
            </p>
          </div>

          <div className="manufacturing-image">
            <img src="/images/Manufacturing_img/parts.webp" alt="Parts" />
          </div>

        </div>

      </section>



      {/* FABRICATION */}
      <section className="manufacturing-section gradient">

        <div className="manufacturing-grid">

          <div className="manufacturing-text">
            <h3>Fabrication</h3>

            <p>
              Technotree offers fabrication solutions including structural
              fabrication, machine bases, inspection tables, trolleys and
              custom-built assemblies.
            </p>

            <p>
              Our fabrication services deliver durable and reliable structures
              built to meet modern industrial standards.
            </p>
          </div>

          <div className="manufacturing-image">
            <img src="/images/Manufacturing_img/fabrication.webp" alt="Fabrication" />
          </div>

        </div>

      </section>




      {/* CREATIONS */}
      <section className="manufacturing-creations">

        <div className="creation-header">

          <h1>Our Creations</h1>

          <h3>
            We Strive to Design, Manufacture, Install and Supply the BEST
            Products and Services through effective implementation and
            continual improvement of the Quality Management System.
          </h3>

        </div>



        <div className="gallery">

          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Manufacturing ${i}`}
              onClick={() => openModal(i)}
            />
          ))}

        </div>



        {isOpen && (
          <div className="modal" onClick={closeModal}>

            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <img
              className="modal-content"
              src={images[currentIndex]}
              alt=""
              onClick={(e) => e.stopPropagation()}
            />

            <span
              className="prev"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
            >
              ❮
            </span>

            <span
              className="next"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
            >
              ❯
            </span>

          </div>
        )}

      </section>

    </div>
  );
}

export default Manufacturing;