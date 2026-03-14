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
        <div className={styles.videoContainer}>
          <iframe
            src="https://player.vimeo.com/video/1104982793?background=1&autoplay=1&muted=1&quality=auto&dnt=1"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            title="Hero Video"
          />
        </div>
        <div className={styles.automationOverlay}>
          <h2>Redefining Automation For Smarter Tomorrow...</h2>
        </div>
      </section>

      {/* ABOUT */}

      <div className={`${styles.about} ${styles.whiteSection}`}>
        <p>
          <b>We are Industrial Automation and System integrator buddy!</b> |
          Experience in Designing, Developing and Implementing complex and
          challenging projects. We are focused on Production Automation, System
          Integration, Robotics, Poka-Yoke (Mistake Proofing Solutions), Control
          panels using Advanced Tools and Technologies.
        </p>
      </div>

      {/* SERVICES */}

      <div className={`${styles.services} ${styles.whiteSection}`}>
        <div className={styles.card}>
          <h3>Industrial Automation</h3>
          <img src={automation} alt="automation" />
          <p>
            <b>W</b>e are Industrial Automation and System integrator buddy!
            Experience in Designing, Developing and Implementing complex and
            challenging projects. We are focused on Production Automation,
            System Integration, Process optimization, Customizations and
            Poka-Yoke Control panels using PLC and SCADA.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Robotics Control</h3>
          <img src={robotics} alt="robotics" />
          <p>
            <b>O</b>ur robotic control team is experienced in the material
            handling Robotics Arms. We design & manufacture Pick and Place,
            Loading & Unloading, Assembly and Packaging robots for repetitive
            actions to complex adaptive behaviours.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Conveyor Lines</h3>
          <img src={conveyor} alt="conveyor" />
          <p>
            <b>W</b>e specialise in design, manufacture and distribution of
            conveyor products and equipment including belt and roller conveyors.
            Our team works closely to suggest customised production assembly
            lines and warehouse management systems.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Control Panels</h3>
          <img src={controlpanel} alt="controlpanel" />
          <p>
            <b>I</b>n-house design, development and fabrication team ensures
            control panels are built to minimise downtime while delivering
            electrical safety, reliability and high quality.
          </p>
        </div>
      </div>

      {/* AUTOMATION SECTION - GRADIENT */}

      <div className={`${styles.automationSection} ${styles.gradientSection}`}>
        <div className={styles.automationText}>
          <h2>Automate with us !</h2>
          <p>
            <b> Automation</b> with us means freedom. In an open ecosystem the
            custom designed hardware paired with software builds modular
            solutions that solve individual challenges.
          </p>

          <p>
            <b> Let’s Automate</b> & Produce Quality! We are Automation and
            System integrator buddy. Experience in Designing, Developing and
            Implementing complex and challenging projects.
          </p>

          <p>
            We are focused on Production Process Automation, System Integration,
            Robotics, Poka-Yoke, Control panels, using PLC and SCADA.
          </p>
        </div>

        <div className={styles.automationImg}>
          <img src={robot} alt="robot automation" />
        </div>
      </div>

      {/* BENEFITS - WHITE */}

      <div className={`${styles.benefitsSection} ${styles.whiteSection}`}>
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
        <h2 className={styles.projectTitle}>SUCCESSFULLY COMPLETED PROJECTS</h2>

        {/* Project 1 */}

        <div className={`${styles.projectRow} ${styles.gradientSection}`}>
          <div className={styles.projectText}>
            <h3>Packaging Poka-Yoke System</h3>

            <p>
              <b>
                {" "}
                This project is designed using LABVIEW and PLC Automation for
                mistake proof packaging.
              </b>
            </p>

            <h3>Operation</h3>
            <ul>
              <li>Parts loaded on fixture and auto clamped.</li>
              <li>
                Openings are sealed automatically using hydraulic cylinders.
              </li>
              <li>Hydraulic cylinders lock the part at fixed position.</li>
              <li>
                Water filling starts automatically up to set level and stops.
              </li>
              <li>
                Pneumatic pressure is filled into the part and held for the test
                period. Leak tester detects if any pressure loss.
              </li>
              <li>
                Manually, operator can check for air bubbles to confirm leak
                location and parts are rejected.
              </li>
              <li>
                Display of pressure is shown on dial as well as on HMI and tower
                lamp is used for indication.
              </li>
              <li>
                User-friendly control – Operator can set air pressure, pneumatic
                cylinder pressure, and leak time.
              </li>
              <li>If no leak is found, then part is PASS.</li>
              <li>Safety curtains are used for safety.</li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={laser} alt="poka yoke" />
          </div>
        </div>

        {/* Project 2 */}

        <div
          className={`${styles.projectRow} ${styles.reverse} ${styles.whiteSection}`}
        >
          <div className={styles.projectText}>
            <h3>Conveyor Line- Cooling Conveyor</h3>
            <p>
              <b>
                {" "}
                Cooling Conveyor line is designed to automatically picked,
                placed casting part on conveyor and temperature of that part is
                reduced from 400 to 80 degree Celsius{" "}
              </b>
            </p>
            <h3>Operation</h3>
            <ul>
              <li>
                Robotic arm picks up part from the casting machine station and
                rotates it for various QC checkpoints to be checked by the
                operator. The part is about 400°C hot.
              </li>
              <li>
                Automated robot shows the part to the QA person for inspection
                at different set angles.
              </li>
              <li>
                When the part is marked “OK” by the QA person, the robot places
                that part on the cooling conveyor line for the next process.
              </li>
              <li>
                If the part is not OK, then it goes into the “NOT OK” bin.
              </li>
              <li>
                OK parts travel through the conveyor line where blower and
                chiller air blow on the part for slow cooling.
              </li>
              <li>Cycle time is achieved by tuning the system.</li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={leaktest} alt="cooling conveyor" />
          </div>
        </div>

        {/* Project 3 */}

        <div className={`${styles.projectRow} ${styles.gradientSection}`}>
          <div className={styles.projectText}>
            <h3>Leak Test Machine</h3>
            <p>
              <b>
                This machine is designed to test leak in various casting
                products. Used Hydraulic power pack and cylinders and Advanced
                PLC and HMI control system.
              </b>
            </p>
            <h3>Operation</h3>
            <ul>
              <li>Parts loaded on fixture and auto clamped.</li>
              <li>
                Openings are sealed automatically using hydraulic cylinders.
              </li>
              <li>Hydraulic cylinders lock the part at fixed position.</li>
              <li>
                Water filling starts automatically up to set level and stops.
              </li>
              <li>
                Pneumatic pressure is filled into the part and held for the test
                period. Leak tester detects if any pressure loss.
              </li>
              <li>
                Operator can manually check for air bubbles to confirm leak
                location and reject parts.
              </li>
              <li>
                Pressure display is shown on dial as well as on HMI, and a tower
                lamp is used for indication.
              </li>
              <li>
                User-friendly controls – Operator can set air pressure,
                pneumatic cylinder pressure, and leak time.
              </li>
              <li>If no leak is found, then the part is PASS.</li>
              <li>Safety curtains are used for safety.</li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={water} alt="leak test" />
          </div>
        </div>

        {/* Project 4 */}

        <div
          className={`${styles.projectRow} ${styles.reverse} ${styles.whiteSection}`}
        >
          <div className={styles.projectText}>
            <h3>Laser marking auto fixture</h3>
            <p>
              <b>
                LM marking auto fixtures are designed to operate at high paced
                production environment. These fixtures identifies the loaded
                part variation and sends signal to the Laser marking machine and
                prints exact information..{" "}
              </b>
            </p>
            <h3>Operation</h3>
            <ul>
              <li>Part variant loaded on the fixture.</li>
              <li>
                Part is auto clamped and sensor logic detects the loaded part.
              </li>
              <li>
                After detection, it sends the variation of the part number.
              </li>
              <li>
                PLC detects that input signal and sends it to the laser marking
                machine, which prints the part number on the part.
              </li>
              <li>
                Once the printing is complete, the laser marking machine sends a
                signal back to the fixture control and the part is declamped.
              </li>
              <li>
                Part number indication lights are used for operator convenience.
              </li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={p1} alt="laser marking fixture" />
          </div>
        </div>

        {/* Project 5 */}

        <div className={`${styles.projectRow} ${styles.gradientSection}`}>
          <div className={styles.projectText}>
            <h3>Wash Bay</h3>
            <p>
              <b>
                Manual wash bay is designed for washing very parts upto 4 ton.
                SS304 material is used for fabrication and controlled washing
                operation trough PLC control.
              </b>
            </p>
            <h3>Operation</h3>
            <ul>
              <li>Part loaded into the tub on fixture.</li>
              <li>
                Soap water / chemical is sprinkled on the part using a spray
                gun.
              </li>
              <li>
                After soaking, a nylon brush is used to wash the part manually.
              </li>
              <li>
                Once the manual washing is complete, the operator can wash the
                part with a water jet spray gun.
              </li>
              <li>
                After the first cycle is complete, the operator can go for
                another cycle if needed or unload the part and send it for
                assembly.
              </li>
              <li>
                Delta PLC control is used to control motor speed, water level,
                and pressure.
              </li>
              <li>
                Various indications are displayed on indication lamps for
                operator convenience.
              </li>
            </ul>
          </div>

          <div className={styles.projectImg}>
            <img src={washbay} alt="wash bay" />
          </div>
        </div>

        {/* Project 6 (FINAL WHITE) */}

        <div className={`${styles.projectRow} ${styles.whiteSection}`}>
          <div className={styles.projectText}>
            <h3>Ultrasonic Cleaning Machine</h3>
            <p>
              <b>
                Ultrasonic cleaner is used to wash and clean various residues
                and oil deposition on parts in manufacturing. These machines are
                deigned for industrial production purpose with auto dipping and
                rising. Manual rinse and air dry or in auto can be
                manufactured.{" "}
              </b>
            </p>
            <h3>Operation</h3>
            <ul>
              <li>Parts loaded on fixture. Press start to start the cycle.</li>
              <li>
                Parts are dipped into the ultrasonic tank automatically and
                cleaning starts. The ultrasonic cleaning machine converts the
                sound energy of the ultrasonic frequency source into mechanical
                vibration through the transducer.
              </li>
              <li>
                Once the cleaning is complete, parts come out automatically
                using pneumatic cylinders and the operator can unload and load
                for another cycle.
              </li>
              <li>
                HMI and PLC are used for control. The user can decide the auto
                cycle time, speed, and pressure.
              </li>
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
