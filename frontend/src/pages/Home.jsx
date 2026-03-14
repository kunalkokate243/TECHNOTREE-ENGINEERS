import React, { useState } from "react";
import styles from "../styles/home.module.css";

import p1 from "/images/homeimages/p1.jpg";
import p2 from "/images/homeimages/p2.jpg";
import p3 from "/images/homeimages/p3.jpg";
import p4 from "/images/homeimages/p4.jpg";

import p5 from "/images/homeimages/p5.jpg";
import p6 from "/images/homeimages/p6.jpg";
import p7 from "/images/homeimages/p7.jpg";
import p8 from "/images/homeimages/p8.jpg";
import p9 from "/images/homeimages/p9.jpg";
import p10 from "/images/homeimages/p10.jpg";
import p11 from "/images/homeimages/p11.jpg";
import p12 from "/images/homeimages/p12.jpg";
import p13 from "/images/homeimages/p13.jpg";
import p14 from "/images/homeimages/p14.jpg";
import p15 from "/images/homeimages/p15.jpg";
import p16 from "/images/homeimages/p16.jpg";
import p17 from "/images/homeimages/p17.jpg";
import p18 from "/images/homeimages/p18.jpg";

function Home() {

  const galleryImages = [
    p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <>

      {/* HERO */}

      <section className={styles.homeHero}>
        <div className={styles.homeHeroContent}>
          {/* <h1>Let's Drive The Future...</h1> */}

          <div className={styles.homeVideoOverlay}>
            <h2>Sign in to Vimeo to watch this video</h2>
            <button>Sign In</button>
          </div>
        </div>
      </section>


      <div className={styles.container}>

        {/* TITLE */}

        <h2 className={styles.title}>
          Quality Matters! Our Mission Is To Amaze The Customers...
        </h2>

        <p className={styles.subtitle}>
          Technotree is engaged in the Industrial Automation, Process Control & Integration,
          Special Purpose Machine (SPM) and Control Panel Manufacturing,
          Auto Fixturing, Consultation, Maintenance and Service,
          CNC Turning and VMC Machining, child part and Fasteners Manufacturing.
          Our Commitment is to Provide Quality Products and Services at Competitive Rates.
        </p>


        {/* SERVICES */}

        <div className={styles.cardGrid}>

          <div className={styles.card}>
            <h3>Automation</h3>

            <div className={styles.videoBox}>
              <p>Sign in to Vimeo to watch this video</p>
              <button>Sign in</button>
            </div>

            <p>
              Let's Automate & Produce Quality! We are Automation and System
              Integrator buddy. Experience in the Designing, Developing and
              Implementing complex and challenging projects. We are focused
              on Production Process Automation, System Integration,
              Robotics, Poka-Yoke, Control Panels, PLC and SCADA.
            </p>
          </div>


          <div className={styles.card}>
            <h3>Manufacturing</h3>

            <div className={styles.videoBox}>
              <p>Sign in to Vimeo to watch this video</p>
              <button>Sign in</button>
            </div>

            <p>
              Special Purpose Machine Designing, Manufacturing and process
              optimization is our core. We make custom-built machines
              tailored to your unique production needs which leads to
              increased productivity, reduced downtime, improved product
              quality and optimized resource utilization.
            </p>
          </div>


          <div className={styles.card}>
            <h3>CNC, VMC</h3>

            <div className={styles.videoBox}>
              <p>Sign in to Vimeo to watch this video</p>
              <button>Sign in</button>
            </div>

            <p>
              As an established CNC and VMC machining company,
              our extensive experience sets us apart in the industry.
              We manufacture precision engineered parts using
              MS, SS, Brass, Copper and Aluminium.
            </p>
          </div>


          <div className={styles.card}>
            <h3>Fabrication</h3>

            <div className={styles.videoBox}>
              <p>Sign in to Vimeo to watch this video</p>
              <button>Sign in</button>
            </div>

            <p>
              We shape and assemble metal components from raw
              materials for industrial use including cutting,
              bending and welding. We work with steel and
              aluminium into products like canopies, hoppers,
              handrails, fixtures and machinery structures.
            </p>
          </div>

        </div>


        {/* ABOUT SECTION */}

        <section className={styles.aboutSection}>

          <div className={styles.row}>

            <div className={styles.text}>
              <h2>WHO WE ARE</h2>

              <p>
                <b>TECHNOTREE</b> is a young and dynamic organization engaged in
                Industrial Automation, Machine Maintenance, Service Contracts,
                Control System Engineering Solutions, Automation Consultation
                and Fabrication.
              </p>

              <p>
                We are also in CNC Turning and VMC Machining. We manufacture
                precision child parts and fasteners using MS, SS, Brass,
                Copper and Aluminium materials.
              </p>

              <b>WE NEVER COMPROMISE WITH QUALITY...</b>
            </div>

            <div className={styles.image}>
              <img src={p1} alt="factory" />
            </div>

          </div>


          <div className={`${styles.row} ${styles.reverse}`}>

            <div className={styles.text}>
              <h2>Our Mission</h2>

              <ul>
                <li>Focus on value based Advanced control systems</li>
                <li>Continual improvement</li>
                <li>Total elimination of wastes</li>
                <li>Promote excellence in industry</li>
              </ul>
            </div>

            <div className={styles.image}>
              <img src={p2} alt="mission" />
            </div>

          </div>


          <div className={styles.row}>

            <div className={styles.image}>
              <img src={p3} alt="vision" />
            </div>

            <div className={styles.text}>
              <h2>Our Vision</h2>

              <p>BEING EVERYWHERE WHERE QUALITY MATTERS !</p>

              <p>
                We have zero tolerance when it comes to Quality.
                We continuously improve our quality standards
                while expanding our capabilities and capacities.
              </p>

              <p>
                Our roadmap starts with our mission and we bring
                innovation to every project we execute.
              </p>

              <p>
                Your Trust and our commitment builds a better world !!
              </p>
            </div>

          </div>


          <div className={`${styles.row} ${styles.reverse}`}>

            <div className={styles.text}>

              <h2>Quality Policy</h2>

              <p>
                We at Technotree believe in achieving excellence
                through continual improvement in our services,
                products, processes and system.
              </p>

              <p>
                We are committed to provide quality products
                on time and ensure customer satisfaction.
              </p>

              <p>
                Technotree is committed to achieve total
                customer satisfaction through adherence to
                quality system and continual improvement.
              </p>

            </div>

            <div className={styles.image}>
              <img src={p4} alt="quality" />
            </div>

          </div>

        </section>

      </div>


      {/* CREATIONS HEADER */}

      <div className={styles.creationsHeader}>
        <h2>Our Creations</h2>
        <p>
          We strive to Design, Manufacture, Install and Supply
          the best products and services through effective
          implementation and continual improvement.
        </p>
      </div>


      {/* CREATIONS */}

      <section className={styles.creations}>

        <div className={styles.container}>

          <div className={styles.gallery}>

            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Technotree project"
                onClick={() => openModal(index)}
              />
            ))}

          </div>

        </div>


        {isOpen && (

          <div className={styles.modal} onClick={closeModal}>

            <span
              className={styles.close}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              &times;
            </span>

            <img
              className={styles.modalContent}
              src={galleryImages[currentIndex]}
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

    </>
  );
}

export default Home;