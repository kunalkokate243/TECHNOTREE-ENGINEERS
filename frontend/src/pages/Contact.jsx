import { useState } from "react";
import styles from "../styles/contact.module.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      alert(data.message);

      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        subject: "",
        description: "",
      });

    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <div className={styles["contact-container"]}>

      <h1 className={styles["contact-title"]}>Contact Us</h1>

      <div className={styles["contact-cards"]}>

        <div className={styles.card}>
          <h3>TECHNOTREE AUSTRALIA</h3>
          <p>5 Good Street, Parramatta</p>
          <p>NSW, Sydney, AUSTRALIA-2150</p>
          <p>0433 477 533</p>
          <p>sales@electrofirst.com</p>
        </div>

        <div className={styles.card}>
          <h3>TECHNOTREE ENGINEERS PVT LTD</h3>
          <p>Mohan Nagar, Near Godown Chowk</p>
          <p>Bhosari industrial Area, Pune</p>
          <p>Maharashtra, INDIA - 411039</p>
          <p>+91 8805 33 8383</p>
          <p>info@electrofirst.com</p>
        </div>

      </div>

      <form className={styles["contact-form"]} onSubmit={handleSubmit}>

        <div className={styles.row}>
          <input
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.row}>
          <input
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <input
          name="subject"
          placeholder="Subject *"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description *"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default Contact;