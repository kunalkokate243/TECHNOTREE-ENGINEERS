import "../styles/footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* CTA Section */}
      <section className="contact-box">
        <img src="/images/cnc/person.png" alt="Contact person" />

        <div className="contact-card">
          <h3>TALK TO US !</h3>
          <p>
            We are always open to talk about your business, new projects,
            creative opportunities and how we can help each other and grow
            together. Your trust and our commitment build a better world!
          </p>

          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/contact");
            }}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <p>
              Copyright {new Date().getFullYear()} © Technotree Australia
            </p>
          </div>

          <div className="footer-center">
            <p>sales@technotree.com.au</p>
          </div>

          <div className="footer-right">
            <p>5 Goods Street, Parramatta, NSW, AUSTRALIA - 2150</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;