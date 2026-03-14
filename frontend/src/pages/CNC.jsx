import styles from "../styles/cnc.module.css";

function CNC() {
  return (
    <div className={styles["cnc-page"]}>
      {/* HERO VIDEO */}
      <section className={styles["hero-video"]}>
        <div className={styles["video-container"]}>
          <iframe
            src="https://player.vimeo.com/video/1126437074?background=1&autoplay=1&muted=1&quality=auto&dnt=1"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            frameborder="0"
            title="CNC Turning"
          ></iframe>
        </div>

        <div className={styles["video-overlay"]}>
          <h2>We manufacture precision child parts...</h2>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles["intro"]}>
        <h2>We manufacture precision child parts...</h2>
        <p>
          <span>
            <strong>TECHNOTREE</strong> manufacture precision child parts..
          </span>{" "}
          We have inhouse VMC and CNC turning centre, MITR, Lathe, Traub-Double
          drilling, Power press, Drilling machines, Vision inspection system,
          Ultrasonic cleaners, MIG and TIG welding setup and various QC
          instruments. We are an ISO 9001:2015 company and follow{" "}
          <strong>QMS</strong> for child part manufacturing.
        </p>
      </section>

      {/* CNC TURNING - GRADIENT */}
      <section className={`${styles["machine-row"]} ${styles["gradient"]}`}>
        <div className={styles["text"]}>
          <h3>CNC Turning</h3>
          <p>
            <strong>Technotree</strong> offers reliable CNC Machine Job work
            service tailored to meet your specific requirement. Our aim is to
            deliver superior quality at competitive pricing to ensure customer
            satisfaction. Inhouse design, machining setup with qualified and
            experienced staff sets us apart from the competitor. We possess the
            capabilities to deliver results that surpass industry standards.
          </p>
        </div>

        <div className={styles["gradient-box"]}>
          <iframe
            src="https://player.vimeo.com/video/1126437074?background=1"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            title="CNC Turning"
          />
        </div>
      </section>

      {/* VMC - NORMAL */}
      <section className={styles["machine-row"]}>
        <div className={styles["text"]}>
          <h3>VMC Machining</h3>
          <p>
            <strong>W</strong>e offer precision milling machining services, our
            vertical machining centre (VMC) is used for milling, drilling, and
            tapping and is ideal for producing precise components for industries
            such as automotive, food, pharma and aerospace. Our inhouse setup of
            VMC machines will amaze you with our service and quality.
          </p>
        </div>

        <div className={styles["video-box"]}>
          <iframe
            src="https://player.vimeo.com/video/1172770867?background=1"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            title="VMC machining"
          />
        </div>
      </section>

      {/* BRASS - GRADIENT */}
      <section className={`${styles["machine-row"]} ${styles["gradient"]}`}>
        <div className={styles["text"]}>
          <h3>Brass Precision SPM</h3>
          <p>
            <strong>W</strong>e have inhouse brass machining facility. Our
            specially designed machines for brass child part manufacturing and
            vision inspection quality check system sets us apart from the
            competitors. We are proud to serve our customers with precision
            work. We have capability of minimum 0.6mm precision drilling and
            vision inspection.
          </p>
        </div>

        <div className={styles["gradient-box"]}>
          <iframe
            src="https://player.vimeo.com/video/1126437074?background=1"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            title="CNC Turning"
          />
        </div>
      </section>

      {/* M1TR - NORMAL */}
      <section className={styles["machine-image"]}>
        <div className={styles["text"]}>
          <h3>M1TR</h3>
          <p>
            <strong>O</strong>ur trained and experienced MITR operators are
            masters in milling, drilling and tapping. We deliver production runs
            with high quality and competitive pricing.
          </p>
        </div>

        <img src="/images/cnc/machine.jpg" alt="MITR machine" />
      </section>

      {/* POWER PRESS - GRADIENT */}
      <section className={`${styles["machine-row"]} ${styles["gradient"]}`}>
        <div className={styles["text"]}>
          <h3>Power Press</h3>
          <p>
            <strong>I</strong>nhouse power press helps us maintain continuous
            production. Machines are equipped with auto-feeders and safety
            curtains for operator safety.
          </p>
        </div>

        <div className={`${styles["gradient-box"]} ${styles["powerVideo"]}`}>
          <iframe
            src="https://player.vimeo.com/video/1128706242?background=1&autoplay=1&loop=1&muted=1&playsinline=1"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            title="PRESS VIDEO"
          />
        </div>
      </section>

      {/* QUALITY */}
      <section className={styles["quality"]}>
        <img src="/images/cnc/qc.jpeg" alt="Quality Control" />

        <div className={styles["text"]}>
          <h3>Quality Control</h3>

          <p>
            <strong>W</strong>e at Technotree believe in achieving excellence
            through continual improvement in our system, services, products and
            processes. We are committed to provide high quality products on time
            and ensure to satisfy needs and expectations of customers.
            <br />
            <span>We do 100% inspections and Quality check.</span> Our QC
            department is qualified and experience in the field. we are equipped
            with modern quality check instruments and gadgets. We are a ISO
            9001:2015 company having quality management system (QMS). We do lean
            manufacturing and stick to our Quality policy.
          </p>

          <p>
            <strong>
              Quality Matters! Our Mission Is To Amaze The Customers...
            </strong>
          </p>
        </div>
      </section>

      {/* PRODUCT HEADER */}
      <div className={styles["product-header"]}>
        Our developed Precision child parts....
      </div>

      {/* GALLERY */}
      <section className={styles["product-gallery"]}>
        <div className={styles["gallery-grid"]}>
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
