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
    p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18
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
        <div className={styles.homeVideoOverlay}>
          <h2>Sign in to Vimeo to watch this video</h2>
          <button>Sign In</button>
        </div>
      </section>

      <div className={styles.container}>

      {/* MAIN CONTAINER */}


        <h2 className={styles.title}>
          Quality Matters! Our Mission Is To Amaze The Customers...
        </h2>

        <p className={styles.subtitle}>
          Technotree is engaged in the Industrial Automation, Process Control &
          Integration, Special Purpose Machine (SPM) and Control Panel
          Manufacturing.
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
              integrator buddy.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Manufacturing</h3>

            <div className={styles.videoBox}>
              <p>Sign in to Vimeo to watch this video</p>
              <button>Sign in</button>
            </div>

            <p>
              Special Purpose Machine Designing and Manufacturing tailored to
              production needs.
            </p>
          </div>

          <div className={styles.card}>
            <h3>CNC, VMC</h3>

            <div className={styles.videoBox}>
              <p>Sign in to Vimeo to watch this video</p>
              <button>Sign in</button>
            </div>

            <p>
              Precision engineered parts using MS, SS, Brass, Copper and Aluminium.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fabrication</h3>

            <div className={styles.videoBox}>
              <p>Sign in to Vimeo to watch this video</p>
              <button>Sign in</button>
            </div>

            <p>
              Fabrication services including cutting, bending and welding.
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
                Industrial Automation and Control System Engineering.
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
                <li>Advanced control systems</li>
                <li>Continual improvement</li>
                <li>Elimination of waste</li>
              </ul>

            </div>

            <div className={styles.image}>
              <img src={p2} alt="mission" />
            </div>

          </div>

        </section>

      </div>


      {/* CREATIONS HEADER */}

      <div className={styles.creationsHeader}>
        <h2>Our Creations</h2>
        <p>We design and manufacture high quality industrial products.</p>
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