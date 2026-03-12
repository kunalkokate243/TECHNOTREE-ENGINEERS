import React, { useState } from "react";
import styles from "../styles/fabrication.module.css";

function Fabrication() {

const [isOpen,setIsOpen] = useState(false);
const [currentIndex,setCurrentIndex] = useState(0);

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

const openModal = (i)=>{
setCurrentIndex(i);
setIsOpen(true);
document.body.style.overflow="hidden";
}

const closeModal = ()=>{
setIsOpen(false);
document.body.style.overflow="auto";
}

const nextSlide = ()=>{
setCurrentIndex((prev)=>(prev+1)%images.length)
}

const prevSlide = ()=>{
setCurrentIndex((prev)=>(prev-1+images.length)%images.length)
}

return (

<div className={styles.fabricationPage}>

{/* HERO */}

<section className={styles.fabricationHero}>
<div className={styles.fabricationVideoOverlay}>
<h2>Sign in to Vimeo to watch this video</h2>
<button>Sign In</button>
</div>
</section>


{/* INTRO */}

<section className={styles.intro}>

<h2>Where Metal Meets Mastery...</h2>

<p>
We transform raw metal materials into finished products through cutting, bending,
assembling and finishing. Our fabrication solutions serve construction, automotive,
manufacturing, aerospace, mining and infrastructure industries.
</p>

</section>



{/* FABRICATION */}

<section className={`${styles.section} ${styles.gradient}`}>

<div className={styles.text}>

<h3>Fabrication</h3>

<p>
TECHNOTREE performs all fabrication work including sheet metal and structural
fabrication with in-house MIG, TIG and ARC welding setup.

Custom manufacturing is done using Stainless Steel, MS, Aluminium and Copper.
We manufacture machine structures, inspection tables, trolleys, containers,
conveyor lines and solar battery covers.
</p>

</div>

<div className={styles.image}>
<img src="/images/fabrication_img/fab1.png" alt="fabrication"/>
</div>

</section>



{/* SOLAR */}

<section className={styles.section}>

<div className={styles.text}>

<h3>Solar Battery & Inverter Covers</h3>

<p>
Solar battery and inverter covers protect outdoor equipment from sunlight,
rain and high temperatures while maintaining airflow for cooling.
</p>

<ul>
<li>Protection from UV, rain and dust</li>
<li>Prevents thermal shutdown</li>
<li>Ventilation airflow design</li>
<li>Custom size fabrication</li>
</ul>

</div>

<div className={styles.image}>
<img src="/images/fabrication_img/fab2.png" alt="solar"/>
</div>

</section>



{/* TANKS */}

<section className={`${styles.section} ${styles.gradient}`}>

<div className={styles.text}>

<h3>Tubs and Tanks</h3>

<p>
We manufacture MS and SS tanks according to industrial requirements including
design, cutting, welding, grinding and finishing.

Applications include water treatment, food processing, chemical plants and
pharmaceutical manufacturing.
</p>

</div>

<div className={styles.image}>
<img src="/images/fabrication_img/fab3.png" alt="tanks"/>
</div>

</section>



{/* CREATIONS */}

<section className={styles.creations}>

<h2>Our Creations</h2>

<div className={styles.gallery}>

{images.map((img,i)=>(
<img
key={i}
src={img}
alt="fabrication"
onClick={()=>openModal(i)}
/>
))}

</div>

</section>



{/* MODAL */}

{isOpen && (

<div className={styles.modal} onClick={closeModal}>

<span className={styles.close} onClick={closeModal}>&times;</span>

<img
className={styles.modalImg}
src={images[currentIndex]}
alt="fabrication"
onClick={(e)=>e.stopPropagation()}
/>

<span
className={styles.prev}
onClick={(e)=>{
e.stopPropagation();
prevSlide();
}}
>
❮
</span>

<span
className={styles.next}
onClick={(e)=>{
e.stopPropagation();
nextSlide();
}}
>
❯
</span>

</div>

)}

</div>

)
}

export default Fabrication