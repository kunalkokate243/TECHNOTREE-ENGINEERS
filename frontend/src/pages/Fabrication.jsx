import React, { useState } from "react";
import styles from "../styles/fabrication.module.css";

function Fabrication() {

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/images/fabrication_img/1.png",
        "/images/fabrication_img/2.png",
        "/images/fabrication_img/3.png",
        "/images/fabrication_img/4.png",
        "/images/fabrication_img/5.png",
        "/images/fabrication_img/6.png",
        "/images/fabrication_img/7.png",
        "/images/fabrication_img/8.png",
        "/images/fabrication_img/9.png",
        "/images/fabrication_img/10.png",
        "/images/fabrication_img/11.png",
        "/images/fabrication_img/12.png",
        "/images/fabrication_img/13.png",
        "/images/fabrication_img/14.png",
        "/images/fabrication_img/15.png",
        "/images/fabrication_img/16.png",
        "/images/fabrication_img/17.png",
        "/images/fabrication_img/18.png",
        "/images/fabrication_img/19.png",
        "/images/fabrication_img/20.png",
        "/images/fabrication_img/21.png",
        "/images/fabrication_img/22.png",
        "/images/fabrication_img/23.png",
        "/images/fabrication_img/24.png",
        "/images/fabrication_img/25.png",
        "/images/fabrication_img/26.png",
        "/images/fabrication_img/27.png"
    ];

    const openModal = (i) => {
        setCurrentIndex(i);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (

        <div className={styles.fabricationPage}>

            {/* HERO */}

            <section className={styles.fabricationHero}>
                <div className={styles.videoContainer}>

                    <iframe
                        src="https://player.vimeo.com/video/1172770867?autoplay=1&muted=1&loop=1&background=1&autopause=0&controls=0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Hero Video"
                    />

                </div>
                <div className={styles.fabricationVideoOverlay}>
                    <h2>Turning Concepts Into Metal Realities...</h2>
                </div>

            </section>


            {/* INTRO */}

            <section className={styles.intro}>



                <p>
                    <span><strong>Where Metal Meets Mastery...We</strong></span> are transforming raw metal materials into finished products or
                    structures through cutting, bending, assembling, and finishing. Our products are widely used in
                    construction, manufacturing, automotive, aerospace, mining, and infrastructure industries.
                    We have inhouse set up of MIG, TIG and spot welding machines and skilled manpower. Our Product range
                    includes- Canopies, Hoppers, Machine structures, Inspection tables, Trolleys, Solar battery covers.
                    Solar Lifters, Various fixtures...etc...
                </p>

            </section>



            {/* FABRICATION */}

            <section className={`${styles.section} ${styles.gradient}`}>

                <div className={styles.text}>

                    <h3>Fabrication</h3>

                    <p>
                        <strong>TECHNOTREE</strong> does all fabrication work including sheet metal and structure building with inhouse MIG
                        welding, TIG welding, ARC welding setup and design support. Custom manufacturing is done using Stainless
                        steel, MS, Aluminium, Copper etc.<br /> <strong>We</strong> make machine structures, Inspection tables, Industrial trolleys,
                        Metal boxes, Containers, Conveyor lines, Solar Battery covers, Lifters etc.. <br /><strong>Inhouse</strong> design and
                        development support team keeps our design time to minimum and help to serve you faster. Our licensed
                        qualified and experienced staff is always eager to produce quality work.
                    </p>

                </div>

                <div className={styles.image}>
                    <img src="/images/fabrication_img/fab1.png" alt="fabrication" />
                </div>

            </section>



            {/* SOLAR */}

            <section className={styles.section}>

                <div className={styles.text}>

                    <h3>Solar Battery & Inverter Covers</h3>

                    <p>
                        Solar battery and inverter covers protect outdoor-mounted equipment from direct sunlight, rain, and
                        heat, preventing overheating, performance reduction, and warranty voiding. Durable, often aluminum,
                        covers improve efficiency and extend lifespan, with many designs to fit standard brands, provide
                        necessary ventilation.
                    </p>

                    <ul>
                        <li>Shields components from harsh UV, rain, snow, and hail, which is crucial for maintaining
                            manufacturer warranties.</li>
                        <li>Prevents thermal shutdown/power derating by reducing temp.</li>
                        <li>Covers are designed for airflow, allowing cross ventilation.
                        </li>
                        <li>Covers are available for most popular inverters (Fronius, Sungrow, Goodwe) and can be custom-sized
                            for both inverters and batteries</li>
                    </ul>

                </div>

                <div className={styles.image}>
                    <img src="/images/fabrication_img/fab2.png" alt="solar" />
                </div>

            </section>



            {/* TANKS */}

            < section className={`${styles.section} ${styles.gradient}`}>

                <div className={styles.text}>

                    <h3>Tubs and Tanks</h3>

                    <p>
                        <strong>We</strong> manufacture various size of Tubs and tanks as per customer requirement. Fabrication
                        in <strong>MS (Mild Steel)</strong> and <strong>SS (Stainless Steel)</strong> involves design, cutting, forming, welding, finishing, and
                        testing of storage or process containers used in industries like water treatment, food processing,
                        chemicals, oil & gas, and pharmaceuticals.  Design and Drawing, Material selection, Cutting, Rolling,
                        Forming, <strong>Welding</strong>, grinding and finishing are the steps we follow for the fabrication.<br />
                        Welding and fabrication of custom steel and stainless steel tanks involves precision engineering to
                        create durable, corrosion-resistant containers for industrial, water, and food-grade applications. Key
                        processes include TIG/orbital welding, structural forming, hydro-testing, and surface treatment to meet
                        strict quality standards
                    </p>

                </div>

                <div className={styles.image}>
                    <img src="/images/fabrication_img/fab3.png" alt="tanks" />
                </div>

            </section >


            {/* INSPECTION TABLES */}

            <section className={styles.section}>

                <div className={styles.text}>

                    <h3>Inspection Tables</h3>

                    <p>
                        Welding and fabrication of a heavy-duty inspection table require a rigid, flat, and heat-resistant
                        metal structure, usually built from steel tubing for the frame and thick plate for the top. Key steps
                        involve precise cutting, tack welding to minimize distortion, full-penetration welding of joints, and
                        ensuring surface flatness for accurate, consistent, and repeatable QC measurements. Our QC inspection
                        tables comes with electrical switchboards, Tube lights, Dust covers, Monitor Holder, storage cabinets
                        etc. We custom design as per your requirement and fabricate with high precision......
                        WE NEVER COMPROMISE WITH QUALITY.....</p>

                </div>

                <div className={styles.image}>
                    <img src="/images/fabrication_img/fab4.png" alt="solar" />
                </div>

            </section>


            {/* TROLLYS */}

            <section className={`${styles.section} ${styles.gradient}`}>

                <div className={styles.text}>

                    <h3>Trollys</h3>

                    <p>
                        Trolleys are essential material handling equipment in fabrication workshops, designed to transport
                        raw materials, tools, and finished components safely and efficiently. In industrial and manufacturing
                        settings, they improve workflow, reduce manual lifting injuries, and increase productivity.
                        <strong>Our specialty</strong> is to custom design manufacture trolleys as per your requirement.
                    </p>

                    <ul>
                        <li>Used in lean manufacturing to transport specific parts to production lines, often designed for just-in-time (JIT) delivery.</li>
                        <li>Multi-shelved units (1-3 shelves) used to organize components for assembly.</li>
                        <li>Specialized carts with cabinets or shelves for storing and moving tools, often utilizing shadow boards for organization.</li>
                        <li>Designed for specific, non-standard loads.</li>
                    </ul>

                </div>

                <div className={styles.image}>
                    <img src="/images/fabrication_img/fab5.png" alt="tanks" />
                </div>

            </section>





            {/* MACHINE STRUCTURES */}

            <section className={styles.section}>

                <div className={styles.text}>

                    <h3>Machine Structures</h3>

                    <p>
                        Machine structure fabrication is the process of creating heavy-duty frameworks, machine bases, and
                        industrial equipment components, primarily using steel, through cutting, bending, welding, and assembly. This process converts raw materials like structural steel, aluminum, or copper into functional components for industries such as mining, construction, and manufacturing.
                        We convert your design to reality. We manufacture our own machine structures as well as we provide
                        fabrication services to manufacture machine structures, Conveyor line structures by using heady duty steel material.
                    </p>

                </div>

                <div className={styles.image}>
                    <img src="/images/fabrication_img/fab6.png" alt="solar" />
                </div>

            </section>



            {/* CREATIONS */}

            < section className={styles.creations} >

                <h2>Our Creations</h2>

                <div className={styles.gallery}>

                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="fabrication"
                            onClick={() => openModal(i)}
                        />
                    ))}

                </div>

            </section >


            {/* MODAL */}

            {
                isOpen && (

                    <div className={styles.modal} onClick={closeModal}>

                        <span className={styles.close} onClick={closeModal}>&times;</span>

                        <img
                            className={styles.modalImg}
                            src={images[currentIndex]}
                            alt="fabrication"
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

                )
            }

        </div >

    )
}

export default Fabrication