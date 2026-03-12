import automation from "/images/automation/automation.jpg";
import robotics from "/images/automation/robotics.jpg";
import conveyor from "/images/automation/conveyor.jpg";
import controlpanel from "/images/automation/controlpanel.jpg";
import hand from "/images/automation/hand.jpg";
import water from "/images/automation/water.jpg";
import washbay from "/images/automation/washbay.jpg";
import p1 from "/images/automation/p1.jpg";
import laser from "/images/automation/laser.jpg";
import ulthrics from "/images/automation/ulthrics.jpg";
import leaktest from "/images/automation/leaktest.jpg";
import robot from "/images/automation/robot.jpg";

import styles from "../styles/automation.module.css";

function Automation() {
  return (
    <div className={styles.container}>

      {/* HERO */}

      <section className={styles.automationHero}>
        <div className={styles.automationOverlay}>
          <h1>Redefining Automation For Smarter Tomorrow...</h1>
          <button>Sign in</button>
        </div>
      </section>


      {/* ABOUT */}

      <div className={styles.about}>
        <p>
          <b>We are Industrial Automation and System integrator buddy!</b> |
          Experience in Designing, Developing and Implementing complex and
          challenging projects. We are focused on Production Automation,
          System Integration, Robotics, Poka-Yoke (Mistake Proofing Solutions),
          Control panels using Advanced Tools and Technologies.
        </p>
      </div>


      {/* SERVICES */}

      <div className={styles.services}>

        <div className={styles.card}>
          <h3>Industrial Automation</h3>
          <img src={automation} alt="automation" />
          <p>
            We are Industrial Automation and System integrator buddy!
            Experience in Designing, Developing and Implementing
            complex and challenging projects. We are focused on
            Production Automation, System Integration, Process
            optimization, Customizations and Poka-Yoke Control
            panels using PLC and SCADA.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Robotics Control</h3>
          <img src={robotics} alt="robotics" />
          <p>
            Our robotic control team is experienced in the material
            handling Robotics Arms. We design & manufacture Pick and
            Place, Loading & Unloading, Assembly and Packaging robots
            for repetitive actions to complex adaptive behaviours.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Conveyor Lines</h3>
          <img src={conveyor} alt="conveyor" />
          <p>
            We specialise in design, manufacture and distribution of
            conveyor products and equipment including belt and roller
            conveyors. Our team works closely to suggest customised
            production assembly lines and warehouse management systems.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Control Panels</h3>
          <img src={controlpanel} alt="controlpanel" />
          <p>
            In-house design, development and fabrication team ensures
            control panels are built to minimise downtime while
            delivering electrical safety, reliability and high quality.
          </p>
        </div>

      </div>


      {/* AUTOMATION SECTION */}

      <div className={styles.automationSection}>

        <div className={styles.automationText}>
          <h2>Automate with us !</h2>

          <p>
            Automation with us means freedom. In an open ecosystem the
            custom designed hardware paired with software builds modular
            solutions that solve individual challenges.
          </p>

          <p>
            Let’s Automate & Produce Quality! We are Automation and
            System integrator buddy. Experience in Designing, Developing
            and Implementing complex and challenging projects.
          </p>

          <p>
            We are focused on Production Process Automation,
            System Integration, Robotics, Poka-Yoke, Control panels,
            using PLC and SCADA.
          </p>
        </div>

        <div className={styles.automationImg}>
          <img src={robot} alt="robot automation" />
        </div>

      </div>


      {/* BENEFITS */}

      <div className={styles.benefitsSection}>

        <div className={styles.benefitsLeft}>
          <h2>Your Benefits !</h2>

          <ul>
            <li>Gain Speed</li>
            <li>Master Scalability</li>
            <li>Produce Quality</li>
            <li>Leverage Sustainability</li>
            <li>Advanced Technology</li>
            <li>Minimum downtime</li>
            <li>Cost saving</li>
            <li>Consistency</li>
            <li>Enhanced Safety</li>
          </ul>
        </div>

        <div className={styles.benefitsRight}>
          <img src={hand} alt="robot hand" />
        </div>

      </div>


      {/* PROJECTS */}

      <div className={styles.projects}>

        <h2 className={styles.projectTitle}>
          SUCCESSFULLY COMPLETED PROJECTS
        </h2>


        {/* Project 1 */}

        <div className={styles.projectRow}>
          <div className={styles.projectText}>
            <h3>Packaging Poka-Yoke System</h3>

            <p>
              This project is designed using LABVIEW and PLC Automation
              for mistake proof packaging.
            </p>

            <ul>
              <li>Parts loaded and scanned for barcode verification</li>
              <li>Automatic clamping for part positioning</li>
              <li>Vision camera inspection</li>
              <li>PLC controlled logic for validation</li>
              <li>Approved parts move to packing station</li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={laser} alt="poka yoke" />
          </div>
        </div>


        {/* Project 2 */}

        <div className={`${styles.projectRow} ${styles.reverse}`}>
          <div className={styles.projectText}>
            <h3>Cooling Conveyor Line</h3>

            <ul>
              <li>Cooling Conveyor line designed to automatically collect casting parts</li>
              <li>Robot picks part from casting machine</li>
              <li>Visual inspection and QA check</li>
              <li>Approved parts transferred to conveyor</li>
              <li>Cooling process reduces part temperature</li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={leaktest} alt="cooling conveyor" />
          </div>
        </div>


        {/* Project 3 */}

        <div className={styles.projectRow}>
          <div className={styles.projectText}>
            <h3>Leak Test Machine</h3>

            <ul>
              <li>Hydraulic power pack and cylinders</li>
              <li>PLC and HMI controlled testing</li>
              <li>Pneumatic pressure leak testing</li>
              <li>Automatic clamping and sealing</li>
              <li>Pressure monitoring and alarm system</li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={water} alt="leak test" />
          </div>
        </div>


        {/* Project 4 */}

        <div className={`${styles.projectRow} ${styles.reverse}`}>
          <div className={styles.projectText}>
            <h3>Laser marking auto fixture</h3>

            <ul>
              <li>Part loaded manually on fixture</li>
              <li>Sensors detect part position</li>
              <li>PLC sends signal to laser marking machine</li>
              <li>Part number and data printed automatically</li>
              <li>Auto unclamp after marking</li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={p1} alt="laser marking fixture" />
          </div>
        </div>


        {/* Project 5 */}

        <div className={styles.projectRow}>
          <div className={styles.projectText}>
            <h3>Wash Bay</h3>

            <ul>
              <li>Manual wash bay for parts up to 4 ton</li>
              <li>Soap chemical spray cleaning</li>
              <li>High pressure water jet rinse</li>
              <li>PLC controlled water circulation</li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={washbay} alt="wash bay" />
          </div>
        </div>


        {/* Project 6 */}

        <div className={styles.projectRow}>
          <div className={styles.projectText}>
            <h3>Ultrasonic Cleaning Machine</h3>

            <ul>
              <li>Industrial ultrasonic cleaning process</li>
              <li>Automatic dipping and lifting system</li>
              <li>PLC and HMI controlled operation</li>
              <li>Removes residues, oil and dust particles</li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={ulthrics} alt="ultrasonic cleaning" />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Automation;