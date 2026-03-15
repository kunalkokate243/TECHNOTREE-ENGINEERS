import React, { useState } from "react";
import styles from "../styles/manufacturing.module.css";

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
    "/images/Manufacturing_img/27.png",
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.manufacturingPage}>
      {/* HERO */}
      <section className={styles.manufacturingHero}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://player.vimeo.com/video/1128708706?autoplay=1&muted=1&loop=1&background=1"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            title="Hero Video"
            frameBorder="0"
          />
        </div>

        <div className={styles.videoOverlay}>
          <h2>We're not just building machines, we're building a better future...</h2>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.manufacturingIntro}>

        <p>
          <span><strong>Where ideas become manufactured realities... </strong></span>
          <strong>Technotree</strong> is a Manufacturer and Exporter of Special
          Purpose Machines (SPM), Leak test Machines, Ultrasonic cleaning
          machines, Industrial washing Machines, Fixtures, Auto fixtures,
          Conveyors, Fabrication of Inspection Tables, Trolleys and Storage
          racks. Our focus is on the development of custom made Special products
          and child parts for our valuable customers. WE TRANSFORM YOUR IDEAS
          INTO REAL WORLD.
        </p>
      </section>

      {/* SECTION TEMPLATE */}
      {[
        {
          title: "Special Purpose Machines (SPM)",
          img: "/images/Manufacturing_img/spm.webp",
          reverse: false,
          text: `We manufacture special purpose machines. We specialize in the design, manufacture, and distribution of conveyor products and equipment, including belt and roller conveyors.

Our team is well experienced in suggesting customized solutions. Our core work areas include production assembly lines, packaging lines, and warehouse management.

We manufacture customized special purpose machines and automation solutions for various process industries. Our commitment is to provide highly precise quality services and products at competitive rates, delivered on time (JIT) to delight our valued customers.`,
        },
        {
          title: "Ultrasonic Cleaners",
          img: "/images/Manufacturing_img/ultrasonic.webp",
          reverse: true,
          text: `Ultrasonic cleaners are used to remove oil, residue, and chemical deposits from components during the manufacturing process.

These machines are designed for industrial production with automatic submerge and lifting mechanisms operated using pneumatic cylinders. Optional features such as auto feeding and air blow drying can be integrated to increase production efficiency.

A temperature controller regulates the tank temperature, while the liquid level is maintained automatically. The drain valve can also operate automatically after specific cycles to ensure proper deep cleaning.

Depending on the application, we design and manufacture customized ultrasonic cleaning systems for industries such as automobile, food processing, pharmaceutical, chemical, aerospace, and more.`,
        },
        {
          title: "Fixtures / Auto-Fixtures",
          img: "/images/Manufacturing_img/fixture.webp",
          reverse: false,
          text: `We manufacture a wide range of industrial fixtures including leak test fixtures, welding fixtures, laser marking fixtures, and other customized solutions designed for specific production requirements.

Our specialty is the development of automated fixtures for laser marking machines. These smart fixtures are equipped with sensors that detect part variants and automatically send signals to the laser marking system for the correct marking operation.

This system eliminates the need for manual program selection when multiple similar part variants are used. Using PLC-based control, the fixture automatically selects the correct marking process, preventing human errors and improving productivity.

This solution works as an advanced Poka-Yoke system used in lean manufacturing to ensure error-proof and efficient production.`,
        },
        {
          title: "Precision Child Parts - Sub Assemblies",
          img: "/images/Manufacturing_img/parts.webp",
          reverse: true,
          text: `As an established CNC and VMC machining company, we bring extensive industry experience and a strong commitment to customer satisfaction.

We manufacture precision-engineered child parts and sub-assemblies using materials such as MS, SS, Brass, Copper, and Aluminium, according to specific customer requirements while maintaining superior quality standards.

Our in-house manufacturing setup includes VMC machines, CNC turning centers, Traub machines (special purpose), power presses, and vision inspection systems, along with various advanced machines and quality inspection instruments.

We perform 100% quality inspection to ensure consistent precision and reliability. Quality is our top priority, and we never compromise on delivering the best to our customers.`,
        },
        {
          title: "Fabrication",
          img: "/images/Manufacturing_img/fabrication.webp",
          reverse: false,
          text: `TECHNOTREE provides complete fabrication services including sheet metal work and structural fabrication with in-house MIG welding, TIG welding, and ARC welding facilities, along with engineering design support.

We manufacture custom components and structures using materials such as Stainless Steel, Mild Steel (MS), Aluminium, and Copper, based on specific customer requirements.

Our fabrication capabilities include machine structures, inspection tables, industrial trolleys, metal boxes, containers, conveyor structures, lifters, and other customized industrial equipment.

Our in-house design and development team helps reduce design time and ensures faster project execution. Our licensed, qualified, and experienced staff is committed to delivering reliable and high-quality fabrication solutions.`,
        },
      ].map((item, i) => (
        <section
          key={i}
          className={`${styles.manufacturingSection} ${
            i % 2 === 0 ? styles.gradient : styles.light
          }`}
        >
          <div
            className={`${styles.manufacturingGrid} ${
              item.reverse ? styles.reverse : ""
            }`}
          >
            <div className={styles.manufacturingText}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

            <div className={styles.manufacturingImage}>
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        </section>
      ))}

      {/* CREATIONS */}
      <section className={styles.manufacturingCreations}>
        <div className={styles.creationHeader}>
          <h1>Our Creations</h1>

          <h3>
            We Strive to Design, Manufacture, Install and Supply the BEST
            Products and Services through continual improvement.
          </h3>
        </div>

        {/* GALLERY */}
        <div className={styles.gallery}>
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Manufacturing ${i}`}
              onClick={() => openModal(i)}
            />
          ))}
        </div>

        {/* MODAL */}
        {isOpen && (
          <div className={styles.modal} onClick={closeModal}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>

            <img
              className={styles.modalContent}
              src={images[currentIndex]}
              alt=""
              onClick={(e) => e.stopPropagation()}
            />

            <span
              className={styles.prev}
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
            >
              ❮
            </span>

            <span
              className={styles.next}
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
